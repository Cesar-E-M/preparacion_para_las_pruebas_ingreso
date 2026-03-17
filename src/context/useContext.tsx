export interface Ejercicio {
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
}

export interface Epigrafe {
  id: number;
  titulo: string;
  contenido: string[];
}

export interface Tema {
  id: number;
  titulo: string;
  descripcion: string;
  epigrafes: Epigrafe[];
  ejercicios: Ejercicio[];
}
