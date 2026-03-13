"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function ContenidoHistoria() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nombre = searchParams.get("nombre")?.trim() || "";

  return (
    <main className="min-h-screen bg-linear-to-br from-lime-50 via-emerald-100 to-teal-100 p-4 md:p-8">
      <section className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-emerald-100">
        <button
          type="button"
          onClick={() =>
            router.push(`/dashboard?nombre=${encodeURIComponent(nombre)}`)
          }
          className="text-emerald-700 font-semibold hover:text-emerald-900 transition-colors cursor-pointer"
        >
          Volver al dashboard
        </button>
        <h1 className="text-3xl font-black text-slate-900 mt-4">Historia</h1>
        <p className="text-slate-700 mt-3">
          Esta asignatura ya esta lista para agregar temas, epigrafes y
          ejercicios.
        </p>
      </section>
    </main>
  );
}

export default function HistoriaPage() {
  return (
    <Suspense>
      <ContenidoHistoria />
    </Suspense>
  );
}
