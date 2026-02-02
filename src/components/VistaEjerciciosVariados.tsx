/* eslint-disable react-hooks/purity */
"use client";

import { useState, useMemo } from "react";
import { Tema, Ejercicio } from "@/src/data/temas";
import { ejerciciosAdicionales } from "@/src/data/ejercicios";

interface VistaEjerciciosVariadosProps {
  temas: Tema[];
  onVolver: () => void;
  onIrATema: (temaId: number) => void;
}

export default function VistaEjerciciosVariados({
  temas,
  onVolver,
  onIrATema,
}: VistaEjerciciosVariadosProps) {
  const todosLosEjercicios = useMemo(() => {
    const ejerciciosPorTema: {
      [temaId: number]: Array<
        Ejercicio & { temaId: number; temaTitulo: string }
      >;
    } = {};

    temas.forEach((tema) => {
      if (!ejerciciosPorTema[tema.id]) {
        ejerciciosPorTema[tema.id] = [];
      }
      tema.ejercicios.forEach((ejercicio) => {
        ejerciciosPorTema[tema.id].push({
          ...ejercicio,
          temaId: tema.id,
          temaTitulo: tema.titulo,
        });
      });
    });

    ejerciciosAdicionales.forEach((ejercicio) => {
      if (!ejerciciosPorTema[ejercicio.temaId]) {
        ejerciciosPorTema[ejercicio.temaId] = [];
      }
      ejerciciosPorTema[ejercicio.temaId].push(ejercicio);
    });

    const ejerciciosSeleccionados: Array<
      Ejercicio & { temaId: number; temaTitulo: string }
    > = [];
    const todosLosEjerciciosDisponibles: Array<
      Ejercicio & { temaId: number; temaTitulo: string }
    > = [];

    Object.keys(ejerciciosPorTema).forEach((temaIdStr) => {
      const temaId = parseInt(temaIdStr);
      const ejerciciosTema = ejerciciosPorTema[temaId];

      if (ejerciciosTema.length > 0) {
        const indiceAleatorio = Math.floor(
          Math.random() * ejerciciosTema.length,
        );
        ejerciciosSeleccionados.push(ejerciciosTema[indiceAleatorio]);

        ejerciciosTema.forEach((ej, index) => {
          if (index !== indiceAleatorio) {
            todosLosEjerciciosDisponibles.push(ej);
          }
        });
      }
    });

    const ejerciciosRestantes = 10 - ejerciciosSeleccionados.length;

    const disponiblesMezclados = todosLosEjerciciosDisponibles.sort(
      () => Math.random() - 0.5,
    );

    for (
      let i = 0;
      i < Math.min(ejerciciosRestantes, disponiblesMezclados.length);
      i++
    ) {
      ejerciciosSeleccionados.push(disponiblesMezclados[i]);
    }

    return ejerciciosSeleccionados.sort(() => Math.random() - 0.5);
  }, [temas]);

  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<
    number | null
  >(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [ejerciciosCompletados, setEjerciciosCompletados] = useState<boolean[]>(
    new Array(todosLosEjercicios.length).fill(false),
  );
  const [mostrarResultadoFinal, setMostrarResultadoFinal] = useState(false);

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
    } else {
      setMostrarResultadoFinal(true);
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
    setMostrarResultadoFinal(false);
    setEjerciciosCompletados(new Array(todosLosEjercicios.length).fill(false));
  };

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

        {mostrarResultadoFinal ? (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {todosCompletados ? (
              <div className="text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold text-green-800 mb-4">
                  ¡Felicitaciones!
                </h3>
                <p className="text-xl text-green-700 mb-6">
                  Has completado todos los ejercicios variados correctamente
                </p>
                <p className="text-2xl font-semibold text-green-800 mb-6">
                  {cantidadCorrectas} de {todosLosEjercicios.length} correctas
                </p>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 font-semibold mb-3">
                    🎁 ¡Descarga más ejercicios para seguir practicando!
                  </p>
                  <a
                    href="/PI-1998 -2025.pdf"
                    download="Ejercicios_Adicionales.pdf"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
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
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Descargar ejercicios adicionales
                  </a>
                </div>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleReiniciar}
                    className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    Reiniciar ejercicios
                  </button>
                  <button
                    onClick={onVolver}
                    className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                  >
                    Volver a temas
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">😕</div>
                  <h3 className="text-3xl font-bold text-orange-800 mb-4">
                    ¡Ups!
                  </h3>
                  <p className="text-xl text-gray-700 mb-4">
                    Necesitas repasar algunos temas
                  </p>
                  <p className="text-2xl font-semibold text-gray-800">
                    {cantidadCorrectas} de {todosLosEjercicios.length} correctas
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    Ejercicios incorrectos:
                  </h4>
                  <div className="space-y-3">
                    {todosLosEjercicios.map(
                      (ej, index) =>
                        !ejerciciosCompletados[index] && (
                          <div
                            key={index}
                            className="bg-red-50 border-2 border-red-200 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                                  {ej.temaTitulo}
                                </span>
                                <p className="text-gray-800 font-medium">
                                  {ej.pregunta}
                                </p>
                              </div>
                              <button
                                onClick={() => onIrATema(ej.temaId)}
                                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold whitespace-nowrap"
                              >
                                Estudiar tema
                              </button>
                            </div>
                          </div>
                        ),
                    )}
                  </div>
                </div>

                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleReiniciar}
                    className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                  >
                    Reintentar ejercicios
                  </button>
                  <button
                    onClick={onVolver}
                    className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                  >
                    Volver a temas
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
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
                      : mostrarResultado &&
                          index === ejercicio.respuestaCorrecta
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
        )}
      </div>
    </div>
  );
}
