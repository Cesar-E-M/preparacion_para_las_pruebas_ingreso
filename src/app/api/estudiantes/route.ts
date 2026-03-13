import { NextRequest, NextResponse } from "next/server";

type RegistroPayload = {
  modo?: "login" | "registro";
  nombre?: string;
  correo?: string;
  esDe12Grado?: boolean;
};

const obtenerRolDesdeJwt = (token: string): string | null => {
  try {
    const partes = token.split(".");
    if (partes.length < 2) return null;

    const payload = JSON.parse(
      Buffer.from(partes[1], "base64url").toString("utf8"),
    ) as {
      role?: string;
    };

    return payload.role ?? null;
  } catch {
    return null;
  }
};

const esClaveServidorSupabase = (token: string): boolean => {
  if (token.startsWith("sb_secret_")) {
    return true;
  }

  if (token.startsWith("sb_publishable_")) {
    return false;
  }

  return obtenerRolDesdeJwt(token) === "service_role";
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegistroPayload;
    const modo = body.modo ?? "registro";
    const nombre = body.nombre?.trim();
    const correo = body.correo?.trim().toLowerCase();
    const esDe12Grado = body.esDe12Grado === true;

    if (!correo) {
      return NextResponse.json(
        { error: "Debes ingresar el correo." },
        { status: 400 },
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        {
          error:
            "Configura NEXT_PUBLIC_SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en tu entorno.",
        },
        { status: 500 },
      );
    }

    if (!esClaveServidorSupabase(serviceRoleKey)) {
      return NextResponse.json(
        {
          error:
            "SUPABASE_SERVICE_ROLE_KEY es invalida para operaciones de servidor. Usa una clave sb_secret_ o la service_role JWT (no sb_publishable_) y reinicia el servidor.",
        },
        { status: 500 },
      );
    }

    const responseBusqueda = await fetch(
      `${supabaseUrl}/rest/v1/estudiantes?select=id,nombre,correo,es_de_12_grado&correo=eq.${encodeURIComponent(correo)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
        },
      },
    );

    if (!responseBusqueda.ok) {
      const detalle = await responseBusqueda.text();
      return NextResponse.json(
        {
          error: `No se pudo consultar el estudiante en Supabase. ${detalle}`,
        },
        { status: 500 },
      );
    }

    const estudiantes = (await responseBusqueda.json()) as Array<{
      id: number;
      nombre: string;
      correo: string;
      es_de_12_grado: boolean;
    }>;

    if (estudiantes.length > 0) {
      const estudiante = estudiantes[0];

      if (!estudiante.es_de_12_grado) {
        return NextResponse.json(
          {
            error:
              "Aqui hay contenido avansado, recomnedamos que seas de 12 grado para poder profundisar en tu desarollo como estudiante",
          },
          { status: 400 },
        );
      }

      if (modo === "registro") {
        return NextResponse.json(
          {
            error:
              "Ya existe un estudiante registrado con ese correo. Debes iniciar sesion, no registrarte de nuevo.",
          },
          { status: 409 },
        );
      }

      return NextResponse.json(
        {
          ok: true,
          modo: "login",
          nombre: estudiante.nombre,
          correo: estudiante.correo,
        },
        { status: 200 },
      );
    }

    if (modo === "login") {
      return NextResponse.json(
        {
          error: "No existe un estudiante registrado con ese correo.",
        },
        { status: 404 },
      );
    }

    if (!nombre) {
      return NextResponse.json(
        { error: "Debes ingresar el nombre para registrarte." },
        { status: 400 },
      );
    }

    if (!esDe12Grado) {
      return NextResponse.json(
        {
          error:
            "Aqui hay contenido avansado, recomnedamos que seas de 12 grado para poder profundisar en tu desarollo como estudiante",
        },
        { status: 400 },
      );
    }

    const responseBusquedaNombre = await fetch(
      `${supabaseUrl}/rest/v1/estudiantes?select=id,nombre,correo&nombre=ilike.${encodeURIComponent(nombre)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
        },
      },
    );

    if (!responseBusquedaNombre.ok) {
      const detalle = await responseBusquedaNombre.text();
      return NextResponse.json(
        {
          error: `No se pudo validar el nombre en Supabase. ${detalle}`,
        },
        { status: 500 },
      );
    }

    const estudiantesPorNombre =
      (await responseBusquedaNombre.json()) as Array<{
        id: number;
        nombre: string;
        correo: string;
      }>;

    if (estudiantesPorNombre.length > 0) {
      return NextResponse.json(
        {
          error:
            "Ya existe un estudiante registrado con ese nombre. Usa otro nombre o inicia sesion con su correo.",
        },
        { status: 409 },
      );
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/estudiantes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        nombre,
        correo,
        es_de_12_grado: esDe12Grado,
      }),
    });

    if (!response.ok) {
      const detalle = await response.text();

      if (detalle.toLowerCase().includes("duplicate key")) {
        return NextResponse.json(
          {
            error: "No se pudo registrar porque ese nombre o correo ya existe.",
          },
          { status: 409 },
        );
      }

      if (detalle.includes('"code":"42501"')) {
        return NextResponse.json(
          {
            error:
              "Supabase bloqueo la insercion por RLS. Verifica que SUPABASE_SERVICE_ROLE_KEY sea la clave service_role (no anon) y reinicia el servidor.",
          },
          { status: 500 },
        );
      }

      return NextResponse.json(
        {
          error: `No se pudo guardar en Supabase. ${detalle}`,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        modo: "registro",
        nombre,
        correo,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: "Error inesperado al registrar estudiante." },
      { status: 500 },
    );
  }
}
