"use client";

import { useState } from "react";
import EntradaEstudiante from "@/src/components/EntradaEstudiante";
import ListaTemas from "@/src/components/ListaTemas";
import VistaTema from "@/src/components/VistaTema";
import { verificarEstudiante } from "@/src/data/estudiantes";
import { temas } from "@/src/data/temas";

type Vista = "entrada" | "lista" | "tema";

export default function Home() {
  const [vista, setVista] = useState<Vista>("entrada");
  const [nombreEstudiante, setNombreEstudiante] = useState("");
  const [temaActual, setTemaActual] = useState<number | null>(null);
  const [temasCompletados, setTemasCompletados] = useState<Set<number>>(
    new Set()
  );
  const [mensajeError, setMensajeError] = useState("");

  const handleAcceso = (nombre: string) => {
    if (verificarEstudiante(nombre)) {
      setNombreEstudiante(nombre);
      setVista("lista");
      setMensajeError("");
    } else {
      setMensajeError(
        "Lo sentimos, tu nombre no está registrado en el sistema. Por favor, verifica con tu instructor."
      );
      setTimeout(() => setMensajeError(""), 3000);
    }
  };

  const handleSeleccionarTema = (temaId: number) => {
    setTemaActual(temaId);
    setVista("tema");
  };

  const handleVolverLista = () => {
    setTemaActual(null);
    setVista("lista");
  };

  const handleCompletarTema = (temaId: number) => {
    setTemasCompletados((prev) => new Set(prev).add(temaId));
    setTimeout(() => {
      handleVolverLista();
    }, 2000);
  };

  const temaSeleccionado =
    temaActual !== null ? temas.find((t) => t.id === temaActual) : null;

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
          nombreEstudiante={nombreEstudiante}
        />
      )}
      {vista === "tema" && temaSeleccionado && (
        <VistaTema
          tema={temaSeleccionado}
          onVolver={handleVolverLista}
          onCompletar={handleCompletarTema}
        />
      )}
    </div>
  );
}
