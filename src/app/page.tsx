"use client";

import { useState, useEffect } from "react";
import EntradaEstudiante from "@/src/components/EntradaEstudiante";
import ListaTemas from "@/src/components/ListaTemas";
import VistaEpigrafes from "@/src/components/VistaEpigrafes";
import VistaTema from "@/src/components/VistaTema";
import VistaEjercicios from "@/src/components/VistaEjercicios";
import VistaEjerciciosVariados from "@/src/components/VistaEjerciciosVariados";
import { verificarEstudiante } from "@/src/data/estudiantes";
import { temas } from "@/src/data/temas";

type Vista =
  | "entrada"
  | "lista"
  | "epigrafes"
  | "tema"
  | "ejercicios"
  | "ejercicios-variados";

const STORAGE_KEY = "progreso_estudiantes";

// Funciones para manejar el localStorage
const cargarProgreso = (nombreEstudiante: string): Set<number> => {
  if (typeof window === "undefined") return new Set();
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const progresosGuardados = JSON.parse(data);
      const progresoEstudiante = progresosGuardados[nombreEstudiante] || [];
      return new Set(progresoEstudiante);
    }
  } catch (error) {
    console.error("Error al cargar el progreso:", error);
  }
  return new Set();
};

const guardarProgreso = (nombreEstudiante: string, progreso: Set<number>) => {
  if (typeof window === "undefined") return;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const progresosGuardados = data ? JSON.parse(data) : {};
    progresosGuardados[nombreEstudiante] = Array.from(progreso);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progresosGuardados));
  } catch (error) {
    console.error("Error al guardar el progreso:", error);
  }
};

export default function Home() {
  const [vista, setVista] = useState<Vista>("entrada");
  const [nombreEstudiante, setNombreEstudiante] = useState("");
  const [temaActual, setTemaActual] = useState<number | null>(null);
  const [epigrafeActual, setEpigrafeActual] = useState<number | null>(null);
  const [temasCompletados, setTemasCompletados] = useState<Set<number>>(
    new Set(),
  );
  const [mensajeError, setMensajeError] = useState("");

  // Guardar progreso automáticamente cuando cambia
  useEffect(() => {
    if (nombreEstudiante) {
      guardarProgreso(nombreEstudiante, temasCompletados);
    }
  }, [temasCompletados, nombreEstudiante]);

  const handleAcceso = (nombre: string) => {
    if (verificarEstudiante(nombre)) {
      setNombreEstudiante(nombre);
      // Cargar el progreso guardado del estudiante
      const progresoGuardado = cargarProgreso(nombre);
      setTemasCompletados(progresoGuardado);
      setVista("lista");
      setMensajeError("");
    } else {
      setMensajeError(
        "Lo sentimos, tu nombre no está registrado en el sistema. Por favor, verifica con tu instructor.",
      );
      setTimeout(() => setMensajeError(""), 3000);
    }
  };

  const handleSeleccionarTema = (temaId: number) => {
    setTemaActual(temaId);
    setVista("epigrafes");
  };

  const handleSeleccionarEpigrafe = (epigrafeId: number) => {
    setEpigrafeActual(epigrafeId);
    setVista("tema");
  };

  const handleIrAEjercicios = () => {
    setVista("ejercicios");
  };

  const handleIrAEjerciciosVariados = () => {
    setVista("ejercicios-variados");
  };

  const handleIrATemaDesdeVariados = (temaId: number) => {
    setTemaActual(temaId);
    setVista("epigrafes");
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

  const handleCambiarEstudiante = () => {
    setNombreEstudiante("");
    setTemaActual(null);
    setEpigrafeActual(null);
    setTemasCompletados(new Set());
    setVista("entrada");
  };

  const handleCompletarTema = () => {
    if (temaActual !== null) {
      setTemasCompletados((prev) => new Set(prev).add(temaActual));
    }
    setTimeout(() => {
      handleVolverEpigrafes();
    }, 2000);
  };

  const temaSeleccionado =
    temaActual !== null ? temas.find((t) => t.id === temaActual) : null;

  const epigrafeSeleccionado =
    temaSeleccionado && epigrafeActual !== null
      ? temaSeleccionado.epigrafes.find((e) => e.id === epigrafeActual)
      : null;

  return (
    <div>
      {vista === "entrada" && (
        <>
          <EntradaEstudiante onAcceso={handleAcceso} />
          {mensajeError && (
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-md text-center">
              {mensajeError}
            </div>
          )}
        </>
      )}
      {vista === "lista" && (
        <ListaTemas
          temas={temas}
          progreso={temasCompletados}
          onSeleccionarTema={handleSeleccionarTema}
          onCambiarEstudiante={handleCambiarEstudiante}
          onIrAEjerciciosVariados={handleIrAEjerciciosVariados}
          nombreEstudiante={nombreEstudiante}
        />
      )}
      {vista === "epigrafes" && temaSeleccionado && (
        <VistaEpigrafes
          tema={temaSeleccionado}
          onSeleccionarEpigrafe={handleSeleccionarEpigrafe}
          onIrAEjercicios={handleIrAEjercicios}
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
          onIrATema={handleIrATemaDesdeVariados}
        />
      )}
    </div>
  );
}
