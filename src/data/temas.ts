export interface Ejercicio {
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
}

export interface Tema {
  id: number;
  titulo: string;
  descripcion: string;
  contenido: string[];
  ejercicio: Ejercicio;
}

export const temas: Tema[] = [
  {
    id: 1,
    titulo: "Álgebra Básica",
    descripcion: "Fundamentos de álgebra y ecuaciones lineales",
    contenido: [
      "El álgebra es una rama de las matemáticas que utiliza letras y símbolos para representar números y cantidades en fórmulas y ecuaciones.",
      "Una ecuación lineal es una igualdad que involucra una o más variables de primer grado. Por ejemplo: 2x + 3 = 7",
      "Para resolver una ecuación lineal, debemos despejar la variable. Paso a paso:",
      "1. Agrupar términos semejantes",
      "2. Aislar la variable en un lado de la ecuación",
      "3. Realizar las operaciones necesarias para encontrar el valor de la variable",
      "Ejemplo: Resolver 2x + 3 = 7",
      "Restamos 3 de ambos lados: 2x = 4",
      "Dividimos entre 2: x = 2",
    ],
    ejercicio: {
      pregunta: "Resuelve la ecuación: 3x - 5 = 10",
      opciones: ["x = 3", "x = 5", "x = 15", "x = 2"],
      respuestaCorrecta: 1,
    },
  },
  {
    id: 2,
    titulo: "Geometría Plana",
    descripcion: "Figuras geométricas y sus propiedades",
    contenido: [
      "La geometría plana estudia las figuras en dos dimensiones: largo y ancho.",
      "Perímetro: Es la suma de todos los lados de una figura.",
      "Área: Es la medida de la superficie que ocupa una figura.",
      "Triángulos: Figuras de tres lados. Su área se calcula como: A = (base × altura) / 2",
      "Cuadrados: Figuras de cuatro lados iguales. Su área se calcula como: A = lado²",
      "Rectángulos: Figuras de cuatro lados con lados opuestos iguales. Su área se calcula como: A = base × altura",
      "Círculos: Su área se calcula como: A = π × r² donde r es el radio",
    ],
    ejercicio: {
      pregunta: "¿Cuál es el área de un cuadrado con lado de 6 cm?",
      opciones: ["24 cm²", "36 cm²", "12 cm²", "30 cm²"],
      respuestaCorrecta: 1,
    },
  },
  {
    id: 3,
    titulo: "Fracciones",
    descripcion: "Operaciones con fracciones y números racionales",
    contenido: [
      "Una fracción representa una parte de un todo. Se compone de numerador (arriba) y denominador (abajo).",
      "Suma de fracciones: Si tienen el mismo denominador, se suman los numeradores.",
      "Ejemplo: 1/4 + 2/4 = 3/4",
      "Si tienen diferente denominador, primero se debe encontrar el mínimo común múltiplo (MCM).",
      "Ejemplo: 1/2 + 1/3 = 3/6 + 2/6 = 5/6",
      "Multiplicación de fracciones: Se multiplican numeradores entre sí y denominadores entre sí.",
      "Ejemplo: 2/3 × 3/4 = 6/12 = 1/2 (simplificado)",
      "División de fracciones: Se multiplica la primera fracción por el inverso de la segunda.",
      "Ejemplo: 2/3 ÷ 1/2 = 2/3 × 2/1 = 4/3",
    ],
    ejercicio: {
      pregunta: "¿Cuánto es 2/5 + 1/5?",
      opciones: ["3/10", "3/5", "2/10", "1/5"],
      respuestaCorrecta: 1,
    },
  },
  {
    id: 4,
    titulo: "Porcentajes",
    descripcion: "Cálculo y aplicación de porcentajes",
    contenido: [
      "Un porcentaje es una forma de expresar un número como una fracción de 100.",
      "El símbolo % significa 'por ciento' o 'de cada 100'.",
      "Para calcular el porcentaje de una cantidad: (porcentaje/100) × cantidad",
      "Ejemplo: ¿Cuánto es el 25% de 80?",
      "(25/100) × 80 = 0.25 × 80 = 20",
      "Para calcular qué porcentaje representa una cantidad de otra: (parte/total) × 100",
      "Ejemplo: ¿Qué porcentaje es 15 de 60?",
      "(15/60) × 100 = 25%",
    ],
    ejercicio: {
      pregunta: "¿Cuánto es el 20% de 150?",
      opciones: ["20", "30", "35", "25"],
      respuestaCorrecta: 1,
    },
  },
  {
    id: 5,
    titulo: "Potencias y Raíces",
    descripcion: "Operaciones con exponentes y radicales",
    contenido: [
      "Una potencia es una multiplicación repetida del mismo número.",
      "Se escribe como: a^n, donde 'a' es la base y 'n' es el exponente.",
      "Ejemplo: 2³ = 2 × 2 × 2 = 8",
      "Leyes de los exponentes:",
      "- a^m × a^n = a^(m+n)",
      "- a^m ÷ a^n = a^(m-n)",
      "- (a^m)^n = a^(m×n)",
      "La raíz cuadrada es la operación inversa de elevar al cuadrado.",
      "√16 = 4, porque 4² = 16",
      "√25 = 5, porque 5² = 25",
    ],
    ejercicio: {
      pregunta: "¿Cuánto es 2⁴?",
      opciones: ["8", "16", "12", "6"],
      respuestaCorrecta: 1,
    },
  },
];
