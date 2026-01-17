"use client";

import { Tema } from "@/src/data/temas";

interface ListaTemasProps {
  temas: Tema[];
  progreso: Set<number>;
  onSeleccionarTema: (temaId: number) => void;
  nombreEstudiante: string;
}

export default function ListaTemas({
  temas,
  progreso,
  onSeleccionarTema,
  nombreEstudiante,
}: ListaTemasProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                ¡Hola, {nombreEstudiante}!
              </h1>
              <p className="text-gray-600">
                Selecciona un tema para comenzar tu preparación
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">
                {progreso.size}/{temas.length}
              </div>
              <div className="text-sm text-gray-600">Completados</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-500"
                style={{
                  width: `${(progreso.size / temas.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Lista de temas */}
        <div className="grid gap-4 md:grid-cols-2">
          {temas.map((tema) => {
            const completado = progreso.has(tema.id);
            return (
              <button
                key={tema.id}
                onClick={() => onSeleccionarTema(tema.id)}
                className={`bg-white rounded-xl shadow-lg p-6 text-left transition-all duration-200 hover:shadow-2xl hover:scale-105 ${
                  completado ? "border-2 border-green-500" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {tema.titulo}
                    </h3>
                    <p className="text-sm text-gray-600">{tema.descripcion}</p>
                  </div>
                  {completado && (
                    <div className="ml-4">
                      <div className="bg-green-500 rounded-full p-2">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span
                    className={`text-sm font-semibold ${
                      completado ? "text-green-600" : "text-blue-600"
                    }`}
                  >
                    {completado ? "Completado" : "Comenzar"}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
