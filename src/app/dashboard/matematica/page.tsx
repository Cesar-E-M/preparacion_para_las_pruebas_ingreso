"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ListaTemas from "@/src/components/ListaTemas";
import VistaEpigrafes from "@/src/components/VistaEpigrafes";
import VistaTema from "@/src/components/VistaTema";
import VistaEjercicios from "@/src/components/VistaEjercicios";
import VistaEjerciciosVariados from "@/src/components/VistaEjerciciosVariados";
import { temas } from "@/src/data/matematica/temas";

type Vista =
  | "lista"
  | "epigrafes"
  | "tema"
  | "ejercicios"
  | "ejercicios-variados";
const STORAGE_KEY = "progreso_estudiantes";

const cargarProgreso = (nombreEstudiante: string): Set<number> => {
  if (typeof window === "undefined") return new Set();

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return new Set();

    const progresosGuardados = JSON.parse(data) as Record<string, number[]>;
    return new Set(progresosGuardados[nombreEstudiante] || []);
  } catch {
    return new Set();
  }
};

const guardarProgreso = (nombreEstudiante: string, progreso: Set<number>) => {
  if (typeof window === "undefined") return;

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const progresosGuardados = data
      ? (JSON.parse(data) as Record<string, number[]>)
      : {};

    progresosGuardados[nombreEstudiante] = Array.from(progreso);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progresosGuardados));
  } catch {
    // Ignoramos errores de localStorage para no romper la experiencia.
  }
};

function ContenidoMatematica() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nombreEstudiante = searchParams.get("nombre")?.trim() || "";

  const [vista, setVista] = useState<Vista>("lista");
  const [temaActual, setTemaActual] = useState<number | null>(null);
  const [epigrafeActual, setEpigrafeActual] = useState<number | null>(null);
  const [temasCompletados, setTemasCompletados] = useState<Set<number>>(() =>
    nombreEstudiante ? cargarProgreso(nombreEstudiante) : new Set(),
  );

  useEffect(() => {
    if (!nombreEstudiante) {
      router.replace("/");
    }
  }, [nombreEstudiante, router]);

  const temaSeleccionado = useMemo(
    () =>
      temaActual !== null ? temas.find((tema) => tema.id === temaActual) : null,
    [temaActual],
  );

  const epigrafeSeleccionado = useMemo(() => {
    if (!temaSeleccionado || epigrafeActual === null) return null;
    return (
      temaSeleccionado.epigrafes.find(
        (epigrafe) => epigrafe.id === epigrafeActual,
      ) || null
    );
  }, [temaSeleccionado, epigrafeActual]);

  const handleSeleccionarTema = (temaId: number) => {
    setTemaActual(temaId);
    setVista("epigrafes");
  };

  const handleSeleccionarEpigrafe = (epigrafeId: number) => {
    setEpigrafeActual(epigrafeId);
    setVista("tema");
  };

  const handleVolverLista = () => {
    setTemaActual(null);
    setEpigrafeActual(null);
    setVista("lista");
  };

  const handleVolverEpigrafes = () => {
    setEpigrafeActual(null);
    setVista("epigrafes");
  };

  const handleCompletarTema = () => {
    if (temaActual !== null) {
      setTemasCompletados((prev) => {
        const nuevoProgreso = new Set(prev).add(temaActual);
        guardarProgreso(nombreEstudiante, nuevoProgreso);
        return nuevoProgreso;
      });
    }

    setTimeout(() => {
      handleVolverEpigrafes();
    }, 2000);
  };

  return (
    <div>
      {vista === "lista" && (
        <ListaTemas
          temas={temas}
          progreso={temasCompletados}
          onSeleccionarTema={handleSeleccionarTema}
          onCambiarEstudiante={() =>
            router.push(
              `/dashboard?nombre=${encodeURIComponent(nombreEstudiante)}`,
            )
          }
          onIrAEjerciciosVariados={() => setVista("ejercicios-variados")}
          nombreEstudiante={nombreEstudiante}
          textoBotonVolver="Volver al dashboard"
        />
      )}

      {vista === "epigrafes" && temaSeleccionado && (
        <VistaEpigrafes
          tema={temaSeleccionado}
          onSeleccionarEpigrafe={handleSeleccionarEpigrafe}
          onIrAEjercicios={() => setVista("ejercicios")}
          onVolver={handleVolverLista}
        />
      )}

      {vista === "tema" && temaSeleccionado && epigrafeSeleccionado && (
        <VistaTema
          tema={temaSeleccionado}
          epigrafe={epigrafeSeleccionado}
          onVolver={handleVolverEpigrafes}
        />
      )}

      {vista === "ejercicios" && temaSeleccionado && (
        <VistaEjercicios
          tema={temaSeleccionado}
          onVolver={handleVolverEpigrafes}
          onCompletar={handleCompletarTema}
        />
      )}

      {vista === "ejercicios-variados" && (
        <VistaEjerciciosVariados
          temas={temas}
          onVolver={handleVolverLista}
          onIrATema={handleSeleccionarTema}
        />
      )}
    </div>
  );
}

export default function MatematicaPage() {
  return (
    <Suspense>
      <ContenidoMatematica />
    </Suspense>
  );
}
