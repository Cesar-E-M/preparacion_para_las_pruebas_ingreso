"use client";

import { useState, useMemo } from "react";
import { Tema, Ejercicio } from "@/src/data/temas";

interface VistaEjerciciosVariadosProps {
  temas: Tema[];
  onVolver: () => void;
}

export default function VistaEjerciciosVariados({
  temas,
  onVolver,
}: VistaEjerciciosVariadosProps) {
  // Obtener todos los ejercicios de todos los temas
  const todosLosEjercicios = useMemo(() => {
    const ejercicios: Array<
      Ejercicio & { temaId: number; temaTitulo: string }
    > = [];
    temas.forEach((tema) => {
      tema.ejercicios.forEach((ejercicio) => {
        ejercicios.push({
          ...ejercicio,
          temaId: tema.id,
          temaTitulo: tema.titulo,
        });
      });
    });
    return ejercicios.sort();
  }, [temas]);

  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<
    number | null
  >(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [ejerciciosCompletados, setEjerciciosCompletados] = useState<boolean[]>(
    new Array(todosLosEjercicios.length).fill(false),
  );

  const ejercicio = todosLosEjercicios[ejercicioActual];
  const esRespuestaCorrecta =
    respuestaSeleccionada === ejercicio.respuestaCorrecta;

  const todosCompletados = ejerciciosCompletados.every((c) => c);
  const cantidadCorrectas = ejerciciosCompletados.filter((c) => c).length;

  const handleVerificarRespuesta = () => {
    setMostrarResultado(true);
    if (esRespuestaCorrecta) {
      const nuevosCompletados = [...ejerciciosCompletados];
      nuevosCompletados[ejercicioActual] = true;
      setEjerciciosCompletados(nuevosCompletados);
    }
  };

  const handleSiguienteEjercicio = () => {
    if (ejercicioActual < todosLosEjercicios.length - 1) {
      setEjercicioActual(ejercicioActual + 1);
      setRespuestaSeleccionada(null);
      setMostrarResultado(false);
    }
  };

  const handleIntentarNuevo = () => {
    setRespuestaSeleccionada(null);
    setMostrarResultado(false);
  };

  const handleReiniciar = () => {
    setEjercicioActual(0);
    setRespuestaSeleccionada(null);
    setMostrarResultado(false);
    setEjerciciosCompletados(new Array(todosLosEjercicios.length).fill(false));
  };

  if (todosLosEjercicios.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-indigo-50 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={onVolver}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-4 cursor-pointer"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver a temas
          </button>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              No hay ejercicios disponibles
            </h2>
            <p className="text-gray-600">
              Todavía no hay ejercicios cargados en los temas.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <button
            onClick={onVolver}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-4 cursor-pointer"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver a temas
          </button>
          <h1 className="text-4xl font-bold text-gray-800">
            Ejercicios Variados
          </h1>
          <h2 className="text-xl text-gray-600 mt-2">
            Practica con ejercicios de todos los temas
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Progreso
            </span>
            <span className="text-sm font-semibold text-purple-600">
              {cantidadCorrectas} / {todosLosEjercicios.length}
            </span>
          </div>
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-linear-to-r from-purple-500 to-pink-500 h-full transition-all duration-500"
              style={{
                width: `${(cantidadCorrectas / todosLosEjercicios.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {todosCompletados && (
          <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6 mb-6 text-center">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              ¡Felicitaciones!
            </h3>
            <p className="text-green-700 mb-4">
              Has completado todos los ejercicios variados correctamente
            </p>
            <p className="text-lg font-semibold text-green-800">
              Respuestas correctas: {cantidadCorrectas} de{" "}
              {todosLosEjercicios.length}
            </p>
            <button
              onClick={handleReiniciar}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Reiniciar ejercicios
            </button>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-semibold text-gray-500">
              Ejercicio {ejercicioActual + 1} de {todosLosEjercicios.length}
            </span>
            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
              {ejercicio.temaTitulo}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {ejercicio.pregunta}
            </h3>
          </div>

          <div className="space-y-3 mb-6">
            {ejercicio.opciones.map((opcion, index) => (
              <button
                key={index}
                onClick={() =>
                  !mostrarResultado && setRespuestaSeleccionada(index)
                }
                disabled={mostrarResultado}
                className={`w-full p-4 rounded-lg text-left transition-all text-black ${
                  respuestaSeleccionada === index
                    ? mostrarResultado
                      ? index === ejercicio.respuestaCorrecta
                        ? "bg-green-100 border-2 border-green-500 text-green-800"
                        : "bg-red-100 border-2 border-red-500 text-red-800"
                      : "bg-purple-100 border-2 border-purple-500"
                    : mostrarResultado && index === ejercicio.respuestaCorrecta
                      ? "bg-green-100 border-2 border-green-500 text-green-800"
                      : "bg-gray-50 border-2 border-gray-200 hover:border-purple-300"
                } ${mostrarResultado ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-center">
                  <span className="font-semibold mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span>{opcion}</span>
                  {mostrarResultado &&
                    index === ejercicio.respuestaCorrecta && (
                      <span className="ml-auto text-green-600">✓</span>
                    )}
                  {mostrarResultado &&
                    respuestaSeleccionada === index &&
                    index !== ejercicio.respuestaCorrecta && (
                      <span className="ml-auto text-red-600">✗</span>
                    )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            {!mostrarResultado ? (
              <button
                onClick={handleVerificarRespuesta}
                disabled={respuestaSeleccionada === null}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                  respuestaSeleccionada !== null
                    ? "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Verificar Respuesta
              </button>
            ) : (
              <>
                {!esRespuestaCorrecta && (
                  <button
                    onClick={handleIntentarNuevo}
                    className="flex-1 py-3 rounded-lg font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-all cursor-pointer"
                  >
                    Intentar de nuevo
                  </button>
                )}
                {(esRespuestaCorrecta ||
                  ejercicioActual < todosLosEjercicios.length - 1) && (
                  <button
                    onClick={handleSiguienteEjercicio}
                    className="flex-1 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-all cursor-pointer"
                  >
                    {ejercicioActual < todosLosEjercicios.length - 1
                      ? "Siguiente Ejercicio"
                      : "Finalizar"}
                  </button>
                )}
              </>
            )}
          </div>

          {mostrarResultado && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                esRespuestaCorrecta
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <p className="font-semibold">
                {esRespuestaCorrecta
                  ? "¡Correcto! Excelente trabajo."
                  : "Incorrecto. Revisa tu respuesta e inténtalo de nuevo."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
