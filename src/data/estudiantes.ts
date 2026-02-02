// Base de datos simulada de estudiantes registrados
export const estudiantesRegistrados = [
  "Alvaro Sanabria Gomez",
  "Thalia Campo Valera",
  "Fabio Castillo",
  "Jose Miguel Betancourt",
  "Franco Valdez de la Cruz",
  "Diego Jose Muñoz Orellana",
];

export const verificarEstudiante = (nombre: string): boolean => {
  return estudiantesRegistrados.some(
    (estudiante) => estudiante.toLowerCase() === nombre.toLowerCase().trim(),
  );
};
