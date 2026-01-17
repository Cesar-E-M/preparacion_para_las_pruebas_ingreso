"use client";

import { useState } from "react";
import { Tema } from "@/src/data/temas";

interface VistaEjerciciosProps {
  tema: Tema;
  onVolver: () => void;
  onCompletar: () => void;
}

export default function VistaEjercicios({
  tema,
  onVolver,
  onCompletar,
}: VistaEjerciciosProps) {
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<
    number | null
  >(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [ejerciciosCompletados, setEjerciciosCompletados] = useState<boolean[]>(
    new Array(tema.ejercicios.length).fill(false)
  );

  const ejercicio = tema.ejercicios[ejercicioActual];
  const esRespuestaCorrecta =
    respuestaSeleccionada === ejercicio.respuestaCorrecta;

  const todosCompletados = ejerciciosCompletados.every((c) => c);

  const handleVerificarRespuesta = () => {
    setMostrarResultado(true);
    if (esRespuestaCorrecta) {
      const nuevosCompletados = [...ejerciciosCompletados];
      nuevosCompletados[ejercicioActual] = true;
      setEjerciciosCompletados(nuevosCompletados);
    }
  };

  const handleSiguienteEjercicio = () => {
    if (ejercicioActual < tema.ejercicios.length - 1) {
      setEjercicioActual(ejercicioActual + 1);
      setRespuestaSeleccionada(null);
      setMostrarResultado(false);
    } else if (todosCompletados) {
      setTimeout(() => {
        onCompletar();
      }, 1000);
    }
  };

  const handleIntentarNuevo = () => {
    setRespuestaSeleccionada(null);
    setMostrarResultado(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
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
            Volver a epígrafes
          </button>
          <h1 className="text-4xl font-bold text-gray-800">{tema.titulo}</h1>
          <h2 className="text-2xl font-semibold text-purple-600 mt-2">
            Ejercicios de Práctica
          </h2>
        </div>

        {/* Progreso */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Progreso
            </span>
            <span className="text-sm font-semibold text-purple-600">
              {ejerciciosCompletados.filter((c) => c).length} /{" "}
              {tema.ejercicios.length}
            </span>
          </div>
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-500"
              style={{
                width: `${
                  (ejerciciosCompletados.filter((c) => c).length /
                    tema.ejercicios.length) *
                  100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Ejercicio actual */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Ejercicio {ejercicioActual + 1} de {tema.ejercicios.length}
            </h3>
            {ejerciciosCompletados[ejercicioActual] && (
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                ✓ Completado
              </span>
            )}
          </div>

          <div className="mb-8">
            <p className="text-xl font-semibold text-gray-800 mb-6">
              {ejercicio.pregunta}
            </p>

            <div className="space-y-3">
              {ejercicio.opciones.map((opcion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!mostrarResultado) {
                      setRespuestaSeleccionada(index);
                    }
                  }}
                  disabled={mostrarResultado}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    respuestaSeleccionada === index
                      ? mostrarResultado
                        ? index === ejercicio.respuestaCorrecta
                          ? "border-green-500 bg-green-50"
                          : "border-red-500 bg-red-50"
                        : "border-blue-500 bg-blue-50"
                      : mostrarResultado &&
                          index === ejercicio.respuestaCorrecta
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
                  } ${mostrarResultado ? "cursor-not-allowed" : ""}`}
                >
                  <span className="font-medium text-gray-800">{opcion}</span>
                </button>
              ))}
            </div>
          </div>

          {!mostrarResultado ? (
            <button
              onClick={handleVerificarRespuesta}
              disabled={respuestaSeleccionada === null}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Verificar Respuesta
            </button>
          ) : (
            <div
              className={`text-center p-6 rounded-lg ${
                esRespuestaCorrecta ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <div
                className={`text-6xl mb-2 ${
                  esRespuestaCorrecta ? "text-green-500" : "text-red-500"
                }`}
              >
                {esRespuestaCorrecta ? "✓" : "✗"}
              </div>
              <h3
                className={`text-2xl font-bold mb-2 ${
                  esRespuestaCorrecta ? "text-green-700" : "text-red-700"
                }`}
              >
                {esRespuestaCorrecta ? "¡Excelente!" : "Respuesta Incorrecta"}
              </h3>
              <p className="text-gray-700 mb-4">
                {esRespuestaCorrecta
                  ? "¡Has respondido correctamente!"
                  : `La respuesta correcta es: ${
                      ejercicio.opciones[ejercicio.respuestaCorrecta]
                    }`}
              </p>

              <div className="flex gap-3 justify-center">
                {!esRespuestaCorrecta && (
                  <button
                    onClick={handleIntentarNuevo}
                    className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Intentar de Nuevo
                  </button>
                )}
                {esRespuestaCorrecta &&
                  ejercicioActual < tema.ejercicios.length - 1 && (
                    <button
                      onClick={handleSiguienteEjercicio}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors"
                    >
                      Siguiente Ejercicio →
                    </button>
                  )}
                {esRespuestaCorrecta &&
                  ejercicioActual === tema.ejercicios.length - 1 &&
                  todosCompletados && (
                    <button
                      onClick={handleSiguienteEjercicio}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-colors"
                    >
                      Finalizar ✓
                    </button>
                  )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
