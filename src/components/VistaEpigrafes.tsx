"use client";

import { Tema } from "@/src/data/temas";

interface VistaEpigrafesProps {
  tema: Tema;
  onSeleccionarEpigrafe: (epigrafeId: number) => void;
  onIrAEjercicios: () => void;
  onVolver: () => void;
}

export default function VistaEpigrafes({
  tema,
  onSeleccionarEpigrafe,
  onIrAEjercicios,
  onVolver,
}: VistaEpigrafesProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {tema.titulo}
          </h1>
          <p className="text-gray-600">{tema.descripcion}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Selecciona un epígrafe
          </h2>
          <p className="text-gray-600 mt-2">
            Cada epígrafe contiene contenido específico del tema
          </p>
        </div>

        <div className="grid gap-4 mb-6">
          {tema.epigrafes.map((epigrafe, index) => (
            <button
              key={epigrafe.id}
              onClick={() => onSeleccionarEpigrafe(epigrafe.id)}
              className="bg-white rounded-xl shadow-lg p-6 text-left transition-all duration-200 hover:shadow-2xl hover:scale-105 hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50"
            >
              <div className="flex items-start">
                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {epigrafe.titulo}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {epigrafe.contenido.length} secciones de contenido
                  </p>
                </div>
                <svg
                  className="w-6 h-6 text-gray-400 shrink-0 ml-4"
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
          ))}
        </div>

        <div className="bg-linear-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-6 border-2 border-green-200">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                📝 Ejercicios de Práctica
              </h3>
              <p className="text-gray-600">
                Pon a prueba tus conocimientos con {tema.ejercicios.length}{" "}
                ejercicio{tema.ejercicios.length > 1 ? "s" : ""}
              </p>
            </div>
            <button
              onClick={onIrAEjercicios}
              className="bg-linear-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer"
            >
              Iniciar Ejercicios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
