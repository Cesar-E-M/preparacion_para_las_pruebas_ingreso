"use client";

import { useState } from "react";
import { Tema } from "@/src/data/temas";

interface VistaTemaProps {
  tema: Tema;
  onVolver: () => void;
  onCompletar: (temaId: number) => void;
}

export default function VistaTema({
  tema,
  onVolver,
  onCompletar,
}: VistaTemaProps) {
  const [mostrarEjercicio, setMostrarEjercicio] = useState(false);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<
    number | null
  >(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const handleVerificarRespuesta = () => {
    setMostrarResultado(true);
    if (respuestaSeleccionada === tema.ejercicio.respuestaCorrecta) {
      setTimeout(() => {
        onCompletar(tema.id);
      }, 2000);
    }
  };

  const esRespuestaCorrecta =
    respuestaSeleccionada === tema.ejercicio.respuestaCorrecta;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onVolver}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-4"
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
          <h1 className="text-4xl font-bold text-gray-800">{tema.titulo}</h1>
          <p className="text-gray-600 mt-2">{tema.descripcion}</p>
        </div>

        {!mostrarEjercicio ? (
          <>
            {/* Contenido del tema */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
              <div className="space-y-4">
                {tema.contenido.map((parrafo, index) => (
                  <p
                    key={index}
                    className={`text-gray-700 leading-relaxed ${
                      parrafo.startsWith("Ejemplo:") || parrafo.match(/^\d+\./)
                        ? "font-semibold text-blue-700"
                        : ""
                    }`}
                  >
                    {parrafo}
                  </p>
                ))}
              </div>
            </div>

            {/* Botón para ir al ejercicio */}
            <div className="text-center">
              <button
                onClick={() => setMostrarEjercicio(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Hacer Ejercicio
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Ejercicio */}
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
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Ejercicio de Práctica
                </h2>
              </div>

              <div className="mb-8">
                <p className="text-xl font-semibold text-gray-800 mb-6">
                  {tema.ejercicio.pregunta}
                </p>

                <div className="space-y-3">
                  {tema.ejercicio.opciones.map((opcion, index) => (
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
                            ? index === tema.ejercicio.respuestaCorrecta
                              ? "border-green-500 bg-green-50"
                              : "border-red-500 bg-red-50"
                            : "border-blue-500 bg-blue-50"
                          : mostrarResultado &&
                            index === tema.ejercicio.respuestaCorrecta
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
                      } ${mostrarResultado ? "cursor-not-allowed" : ""}`}
                    >
                      <span className="font-medium text-gray-800">
                        {opcion}
                      </span>
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
                    {esRespuestaCorrecta
                      ? "¡Excelente!"
                      : "Respuesta Incorrecta"}
                  </h3>
                  <p className="text-gray-700">
                    {esRespuestaCorrecta
                      ? "Has completado este tema correctamente. Regresando a la lista..."
                      : `La respuesta correcta es: ${
                          tema.ejercicio.opciones[
                            tema.ejercicio.respuestaCorrecta
                          ]
                        }`}
                  </p>
                  {!esRespuestaCorrecta && (
                    <button
                      onClick={() => {
                        setMostrarResultado(false);
                        setRespuestaSeleccionada(null);
                      }}
                      className="mt-4 bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Intentar de Nuevo
                    </button>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
