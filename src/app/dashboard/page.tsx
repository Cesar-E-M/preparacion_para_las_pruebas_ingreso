"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const asignaturas = [
  {
    nombre: "Matematica",
    descripcion: "Algebra, geometria, trigonometria y mas.",
    ruta: "/dashboard/matematica",
    activa: true,
  },
  {
    nombre: "Literatura y Lengua",
    descripcion: "Comprension, redaccion y ortografia.",
    ruta: "/dashboard/espanol",
    activa: true,
  },
  {
    nombre: "Historia De Cuba",
    descripcion: "Procesos historicos y cultura general.",
    ruta: "/dashboard/historia",
    activa: true,
  },
];

function ContenidoDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nombre = searchParams.get("nombre")?.trim() || "";

  useEffect(() => {
    if (!nombre) {
      router.replace("/");
    }
  }, [nombre, router]);

  return (
    <main className="min-h-screen bg-linear-to-br from-cyan-50 via-sky-100 to-blue-100 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-cyan-100">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-cyan-700">
                Dashboard del estudiante
              </p>
              <h1 className="text-3xl font-black text-slate-900 mt-1">
                Bienvenido{nombre ? `, ${nombre}` : ""}
              </h1>
              <p className="text-slate-600 mt-2">
                Selecciona una asignatura para comenzar tu preparacion.
              </p>
            </div>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="rounded-xl bg-slate-900 text-white px-4 py-2 font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Cerrar sesion
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {asignaturas.map((asignatura) => (
            <article
              key={asignatura.nombre}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-5 flex flex-col"
            >
              <h2 className="text-2xl font-extrabold text-slate-900">
                {asignatura.nombre}
              </h2>
              <p className="text-slate-600 mt-3 flex-1">
                {asignatura.descripcion}
              </p>
              <button
                type="button"
                onClick={() =>
                  router.push(
                    `${asignatura.ruta}?nombre=${encodeURIComponent(nombre)}`,
                  )
                }
                className="mt-4 rounded-xl bg-cyan-600 text-white py-2 font-semibold hover:bg-cyan-700 transition-colors cursor-pointer"
              >
                Entrar
              </button>
            </article>
          ))}
        </div>
        <article className="mt-8 rounded-2xl bg-white/80 border border-cyan-100 p-5 text-center shadow-sm">
          <p className="text-slate-700 font-medium">
            “ La tarea mas importante de todos nosotros es preparar el porvenir;
            nosotros somos en esta hora de la patria, el puño de semillas que se
            siembra en el surco de la Revolucion para hacer el porvenir. ”
          </p>
          <p className="text-slate-700 font-medium mt-3 border-b w-auto mx-auto pb-2 border-cyan-200">
            Fidel Castro Ruz
          </p>
        </article>
      </div>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <Suspense>
      <ContenidoDashboard />
    </Suspense>
  );
}
