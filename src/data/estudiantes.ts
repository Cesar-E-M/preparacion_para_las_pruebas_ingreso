// Base de datos simulada de estudiantes registrados
export const estudiantesRegistrados = [
  "Juan Pérez",
  "María García",
  "Carlos López",
  "Ana Martínez",
  "Pedro Rodríguez",
  "Laura Fernández",
  "Diego Muñoz",
  "Sofía Ramírez",
];

export const verificarEstudiante = (nombre: string): boolean => {
  return estudiantesRegistrados.some(
    (estudiante) => estudiante.toLowerCase() === nombre.toLowerCase().trim()
  );
};
