"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const MENSAJE_ADVERTENCIA =
  "Aqui hay contenido avansado, recomnedamos que seas de 12 grado para poder profundisar en tu desarollo como estudiante";

export default function Home() {
  const router = useRouter();
  const [seccion, setSeccion] = useState<"login" | "registro">("login");

  const [esDe12Grado, setEsDe12Grado] = useState<boolean | null>(null);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [correoLogin, setCorreoLogin] = useState("");
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [esError, setEsError] = useState(false);

  const iniciarSesion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!correoLogin.trim()) {
      setMensaje("Ingresa tu correo para iniciar sesion.");
      setEsError(true);
      return;
    }

    try {
      setCargando(true);
      setMensaje("");

      const response = await fetch("/api/estudiantes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          modo: "login",
          correo: correoLogin.trim(),
        }),
      });

      const data = (await response.json()) as {
        error?: string;
        nombre?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "No se pudo iniciar sesion.");
      }

      setEsError(false);
      setMensaje("Inicio de sesion exitoso. Entrando al dashboard...");
      router.push(`/dashboard?nombre=${encodeURIComponent(data.nombre || "")}`);
    } catch (error) {
      setEsError(true);
      setMensaje(
        error instanceof Error
          ? error.message
          : "Ocurrio un error inesperado al iniciar sesion.",
      );
    } finally {
      setCargando(false);
    }
  };

  const registrarEstudiante = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!nombre.trim() || !correo.trim()) {
      setMensaje("Completa todos los campos para registrarte.");
      setEsError(true);
      return;
    }

    if (esDe12Grado !== true) {
      setMensaje(MENSAJE_ADVERTENCIA);
      setEsError(true);
      return;
    }

    try {
      setCargando(true);
      setMensaje("");

      const response = await fetch("/api/estudiantes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          modo: "registro",
          nombre: nombre.trim(),
          correo: correo.trim(),
          esDe12Grado: true,
        }),
      });

      const data = (await response.json()) as {
        error?: string;
        modo?: "login" | "registro";
        nombre?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "No se pudo registrar el estudiante.");
      }

      const nombreFinal = data.nombre || nombre.trim();
      setEsError(false);
      setMensaje(
        data.modo === "login"
          ? "Ya estabas registrado. Iniciando sesion..."
          : "Registro exitoso. Entrando al dashboard...",
      );

      router.push(`/dashboard?nombre=${encodeURIComponent(nombreFinal)}`);
    } catch (error) {
      setEsError(true);
      setMensaje(
        error instanceof Error
          ? error.message
          : "Ocurrio un error inesperado al registrar.",
      );
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-sky-50 via-cyan-100 to-indigo-100 flex items-center justify-center p-4">
      <section className="w-full max-w-2xl rounded-3xl bg-white/90 backdrop-blur-xs border border-white shadow-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
          La Bibleoteca Del Saber
        </h1>
        <p className="mt-3 text-slate-700">
          Tu plataforma gratuita para prepararte para las pruebas de ingreso a
          la universidad. Crea tu cuenta o inicia sesion para acceder a recursos
          de alta calidad y mejorar tus habilidades en matematicas, historia,
          español.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => {
              setSeccion("login");
              setMensaje("");
              setEsError(false);
            }}
            className={`rounded-xl px-4 py-2 font-semibold transition-all cursor-pointer ${
              seccion === "login"
                ? "bg-white text-slate-900 shadow"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Iniciar sesion
          </button>
          <button
            type="button"
            onClick={() => {
              setSeccion("registro");
              setMensaje("");
              setEsError(false);
            }}
            className={`rounded-xl px-4 py-2 font-semibold transition-all cursor-pointer ${
              seccion === "registro"
                ? "bg-white text-slate-900 shadow"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Registrarse
          </button>
        </div>

        {seccion === "login" && (
          <form className="mt-8 space-y-4" onSubmit={iniciarSesion}>
            <div>
              <label
                className="block text-sm text-slate-700 mb-1"
                htmlFor="correo-login"
              >
                Correo
              </label>
              <input
                id="correo-login"
                type="email"
                value={correoLogin}
                onChange={(event) => setCorreoLogin(event.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                placeholder="Ej: estudiante@correo.com"
                disabled={cargando}
              />
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="w-full rounded-xl bg-slate-900 text-white font-bold py-3 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              {cargando ? "Procesando..." : "Iniciar sesion"}
            </button>
          </form>
        )}

        {seccion === "registro" && (
          <>
            <div className="mt-8 space-y-3">
              <p className="flex font-semibold text-slate-800 justify-center">
                Estas en 12 grado?
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setEsDe12Grado(true);
                    setMensaje("");
                    setEsError(false);
                  }}
                  className={`px-5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                    esDe12Grado === true
                      ? "bg-emerald-600 text-white"
                      : "bg-emerald-100 text-emerald-900 hover:bg-emerald-200"
                  }`}
                >
                  Si
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEsDe12Grado(false);
                    setEsError(true);
                    setMensaje(MENSAJE_ADVERTENCIA);
                  }}
                  className={`px-5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                    esDe12Grado === false
                      ? "bg-rose-600 text-white"
                      : "bg-rose-100 text-rose-900 hover:bg-rose-200"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            <form className="mt-8 space-y-4" onSubmit={registrarEstudiante}>
              <div>
                <label
                  className="block text-sm text-slate-700 mb-1"
                  htmlFor="nombre"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                  placeholder="Ej: Ana Perez"
                  disabled={esDe12Grado !== true || cargando}
                />
              </div>

              <div>
                <label
                  className="block text-sm text-slate-700 mb-1"
                  htmlFor="correo"
                >
                  Correo
                </label>
                <input
                  id="correo"
                  type="email"
                  value={correo}
                  onChange={(event) => setCorreo(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                  placeholder="Ej: estudiante@correo.com"
                  disabled={esDe12Grado !== true || cargando}
                />
              </div>

              <button
                type="submit"
                disabled={esDe12Grado !== true || cargando}
                className="w-full rounded-xl bg-slate-900 text-white font-bold py-3 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                {cargando ? "Procesando..." : "Registrarme"}
              </button>
            </form>
          </>
        )}

        {mensaje && (
          <div
            className={`mt-5 rounded-xl px-4 py-3 text-sm ${
              esError
                ? "bg-rose-100 text-rose-800 border border-rose-200"
                : "bg-emerald-100 text-emerald-800 border border-emerald-200"
            }`}
          >
            {mensaje}
          </div>
        )}
      </section>
    </main>
  );
}
