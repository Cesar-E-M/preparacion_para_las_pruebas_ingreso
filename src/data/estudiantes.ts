// Base de datos simulada de estudiantes registrados
export const estudiantesRegistrados = [
  "Juan Perez",
  "Maria Garcia",
  "Carlos LLopez",
  "Ana Martinez",
  "Pedro Rodriguez",
  "Laura Fernandez",
  "Diego Muñoz",
  "Sofia Ramirez",
];

export const verificarEstudiante = (nombre: string): boolean => {
  return estudiantesRegistrados.some(
    (estudiante) => estudiante.toLowerCase() === nombre.toLowerCase().trim(),
  );
};
