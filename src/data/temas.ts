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

export const temas: Tema[] = [
  {
    id: 1,
    titulo: "Funciones",
    descripcion: "Conceptos básicos y tipos de funciones",
    epigrafes: [
      {
        id: 1,
        titulo: "Introducción al álgebra",
        contenido: [
          "El álgebra es una rama de las matemáticas que utiliza letras y símbolos para representar números y cantidades en fórmulas y ecuaciones.",
          "Las variables son letras que representan números desconocidos.",
          "Los términos algebraicos combinan números y variables mediante operaciones.",
        ],
      },
      {
        id: 2,
        titulo: "Ecuaciones lineales",
        contenido: [
          "Una ecuación lineal es una igualdad que involucra una o más variables de primer grado. Por ejemplo: 2x + 3 = 7",
          "Para resolver una ecuación lineal, debemos despejar la variable. Paso a paso:",
          "1. Agrupar términos semejantes",
          "2. Aislar la variable en un lado de la ecuación",
          "3. Realizar las operaciones necesarias para encontrar el valor de la variable",
          "Ejemplo: Resolver 2x + 3 = 7",
          "Restamos 3 de ambos lados: 2x = 4",
          "Dividimos entre 2: x = 2",
        ],
      },
    ],
    ejercicios: [
      {
        pregunta: "¿Qué es una variable en álgebra?",
        opciones: [
          "Un número fijo",
          "Una letra que representa un número desconocido",
          "Una operación matemática",
          "Un símbolo sin significado",
        ],
        respuestaCorrecta: 1,
      },
      {
        pregunta: "Resuelve la ecuación: 3x - 5 = 10",
        opciones: ["x = 3", "x = 5", "x = 15", "x = 2"],
        respuestaCorrecta: 1,
      },
    ],
  },
  {
    id: 2,
    titulo: "Geometría Plana",
    descripcion: "Figuras geométricas y sus propiedades",
    epigrafes: [
      {
        id: 1,
        titulo: "Conceptos básicos",
        contenido: [
          "La geometría plana estudia las figuras en dos dimensiones: largo y ancho.",
          "Perímetro: Es la suma de todos los lados de una figura.",
          "Área: Es la medida de la superficie que ocupa una figura.",
        ],
      },
      {
        id: 2,
        titulo: "Áreas de figuras",
        contenido: [
          "Triángulos: Figuras de tres lados. Su área se calcula como: A = (base × altura) / 2",
          "Cuadrados: Figuras de cuatro lados iguales. Su área se calcula como: A = lado²",
          "Rectángulos: Figuras de cuatro lados con lados opuestos iguales. Su área se calcula como: A = base × altura",
          "Círculos: Su área se calcula como: A = π × r² donde r es el radio",
        ],
      },
    ],
    ejercicios: [
      {
        pregunta: "¿Qué estudia la geometría plana?",
        opciones: [
          "Figuras en tres dimensiones",
          "Figuras en dos dimensiones",
          "Solo círculos",
          "Solo triángulos",
        ],
        respuestaCorrecta: 1,
      },
      {
        pregunta: "¿Cuál es el área de un cuadrado con lado de 6 cm?",
        opciones: ["24 cm²", "36 cm²", "12 cm²", "30 cm²"],
        respuestaCorrecta: 1,
      },
    ],
  },
  {
    id: 3,
    titulo: "Fracciones",
    descripcion: "Operaciones con fracciones y números racionales",
    epigrafes: [
      {
        id: 1,
        titulo: "Definición de fracciones",
        contenido: [
          "Una fracción representa una parte de un todo. Se compone de numerador (arriba) y denominador (abajo).",
          "El numerador indica cuántas partes tomamos.",
          "El denominador indica en cuántas partes se divide el todo.",
        ],
      },
      {
        id: 2,
        titulo: "Suma y resta de fracciones",
        contenido: [
          "Suma de fracciones: Si tienen el mismo denominador, se suman los numeradores.",
          "Ejemplo: 1/4 + 2/4 = 3/4",
          "Si tienen diferente denominador, primero se debe encontrar el mínimo común múltiplo (MCM).",
          "Ejemplo: 1/2 + 1/3 = 3/6 + 2/6 = 5/6",
        ],
      },
      {
        id: 3,
        titulo: "Multiplicación y división",
        contenido: [
          "Multiplicación de fracciones: Se multiplican numeradores entre sí y denominadores entre sí.",
          "Ejemplo: 2/3 × 3/4 = 6/12 = 1/2 (simplificado)",
          "División de fracciones: Se multiplica la primera fracción por el inverso de la segunda.",
          "Ejemplo: 2/3 ÷ 1/2 = 2/3 × 2/1 = 4/3",
        ],
      },
    ],
    ejercicios: [
      {
        pregunta: "En la fracción 3/4, ¿qué representa el número 4?",
        opciones: ["El numerador", "El denominador", "La suma", "El producto"],
        respuestaCorrecta: 1,
      },
      {
        pregunta: "¿Cuánto es 2/5 + 1/5?",
        opciones: ["3/10", "3/5", "2/10", "1/5"],
        respuestaCorrecta: 1,
      },
      {
        pregunta: "¿Cuánto es 1/2 × 2/3?",
        opciones: ["1/3", "2/6", "3/4", "1/6"],
        respuestaCorrecta: 0,
      },
    ],
  },
  {
    id: 4,
    titulo: "Porcentajes",
    descripcion: "Cálculo y aplicación de porcentajes",
    epigrafes: [
      {
        id: 1,
        titulo: "Concepto de porcentaje",
        contenido: [
          "Un porcentaje es una forma de expresar un número como una fracción de 100.",
          "El símbolo % significa 'por ciento' o 'de cada 100'.",
          "Por ejemplo, 50% significa 50 de cada 100, o la mitad.",
        ],
      },
      {
        id: 2,
        titulo: "Calcular porcentajes",
        contenido: [
          "Para calcular el porcentaje de una cantidad: (porcentaje/100) × cantidad",
          "Ejemplo: ¿Cuánto es el 25% de 80?",
          "(25/100) × 80 = 0.25 × 80 = 20",
          "Para calcular qué porcentaje representa una cantidad de otra: (parte/total) × 100",
          "Ejemplo: ¿Qué porcentaje es 15 de 60?",
          "(15/60) × 100 = 25%",
        ],
      },
    ],
    ejercicios: [
      {
        pregunta: "¿Qué significa el símbolo %?",
        opciones: ["Por mil", "Por ciento", "Por diez", "Dividir"],
        respuestaCorrecta: 1,
      },
      {
        pregunta: "¿Cuánto es el 20% de 150?",
        opciones: ["20", "30", "35", "25"],
        respuestaCorrecta: 1,
      },
    ],
  },
  {
    id: 5,
    titulo: "Potencias y Raíces",
    descripcion: "Operaciones con exponentes y radicales",
    epigrafes: [
      {
        id: 1,
        titulo: "Potencias",
        contenido: [
          "Una potencia es una multiplicación repetida del mismo número.",
          "Se escribe como: a^n, donde 'a' es la base y 'n' es el exponente.",
          "Ejemplo: 2³ = 2 × 2 × 2 = 8",
          "Leyes de los exponentes:",
          "- a^m × a^n = a^(m+n)",
          "- a^m ÷ a^n = a^(m-n)",
          "- (a^m)^n = a^(m×n)",
        ],
      },
      {
        id: 2,
        titulo: "Raíces",
        contenido: [
          "La raíz cuadrada es la operación inversa de elevar al cuadrado.",
          "√16 = 4, porque 4² = 16",
          "√25 = 5, porque 5² = 25",
          "√9 = 3, porque 3² = 9",
        ],
      },
    ],
    ejercicios: [
      {
        pregunta: "¿Cuánto es 2⁴?",
        opciones: ["8", "16", "12", "6"],
        respuestaCorrecta: 1,
      },
      {
        pregunta: "¿Cuánto es √64?",
        opciones: ["6", "8", "7", "9"],
        respuestaCorrecta: 1,
      },
    ],
  },
];
