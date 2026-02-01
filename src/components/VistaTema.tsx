"use client";

import { Tema, Epigrafe } from "@/src/data/temas";

interface VistaTemaProps {
  tema: Tema;
  epigrafe: Epigrafe;
  onVolver: () => void;
}

export default function VistaTema({
  tema,
  epigrafe,
  onVolver,
}: VistaTemaProps) {
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
            Volver a epígrafes
          </button>
          <h1 className="text-4xl font-bold text-gray-800">{tema.titulo}</h1>
          <h2 className="text-2xl font-semibold text-purple-600 mt-2">
            {epigrafe.titulo}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-4">
            {epigrafe.contenido.map((parrafo, index) => (
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
      </div>
    </div>
  );
}
