// Ejercicios adicionales para la sección de Ejercicios Variados

export interface EjercicioAdicional {
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  temaId: number;
  temaTitulo: string;
}

export const ejerciciosAdicionales: EjercicioAdicional[] = [
  {
    pregunta:
      "¿Cuál de los siguientes números NO pertenece al conjunto de los números racionales (ℚ)?",
    opciones: ["1/2", "√2", "0.333...", "-5/3"],
    respuestaCorrecta: 1,
    temaId: 1,
    temaTitulo: "Conjuntos y Dominios Numericos",
  },
  {
    pregunta: "Si A = {1, 2, 3, 4} y B = {3, 4, 5, 6}, ¿cuál es A ∪ B?",
    opciones: ["{1, 2, 3, 4, 5, 6}", "{3, 4}", "{1, 2, 5, 6}", "{1, 2, 3, 4}"],
    respuestaCorrecta: 0,
    temaId: 1,
    temaTitulo: "Conjuntos y Dominios Numericos",
  },
  {
    pregunta: "¿Cuál es el conjunto vacío?",
    opciones: ["{0}", "{}", "Ø", "Tanto b como c son correctas"],
    respuestaCorrecta: 3,
    temaId: 1,
    temaTitulo: "Conjuntos y Dominios Numericos",
  },

  {
    pregunta: "¿Cuál es el rango de la función f(x) = x² para x ∈ ℝ?",
    opciones: ["ℝ", "[0, ∞)", "(-∞, 0]", "(0, ∞)"],
    respuestaCorrecta: 1,
    temaId: 2,
    temaTitulo: "Funciones",
  },
  {
    pregunta: "Si f(x) = 3x - 2 y g(x) = x + 1, ¿cuál es (f ∘ g)(2)?",
    opciones: ["7", "9", "5", "11"],
    respuestaCorrecta: 0,
    temaId: 2,
    temaTitulo: "Funciones",
  },
  {
    pregunta: "Una función es inyectiva si:",
    opciones: [
      "Cada elemento del dominio tiene una única imagen",
      "Cada elemento del codominio tiene a lo sumo una preimagen",
      "Es biyectiva",
      "Su dominio es todo ℝ",
    ],
    respuestaCorrecta: 1,
    temaId: 2,
    temaTitulo: "Funciones",
  },

  {
    pregunta: "¿Cuál es la distancia entre los puntos A(1, 2) y B(4, 6)?",
    opciones: ["5", "7", "3", "25"],
    respuestaCorrecta: 0,
    temaId: 3,
    temaTitulo: "Geometria Analitica 2",
  },
  {
    pregunta: "¿Cuál es la pendiente de una recta perpendicular a y = 2x + 3?",
    opciones: ["2", "-2", "-1/2", "1/2"],
    respuestaCorrecta: 2,
    temaId: 3,
    temaTitulo: "Geometria Analitica 2",
  },
  {
    pregunta: "El punto medio entre (2, 4) y (8, 10) es:",
    opciones: ["(5, 7)", "(4, 6)", "(6, 8)", "(10, 14)"],
    respuestaCorrecta: 0,
    temaId: 3,
    temaTitulo: "Geometria Analitica 2",
  },

  {
    pregunta:
      "En una progresión aritmética, el primer término es 5 y la diferencia común es 3. ¿Cuál es el quinto término?",
    opciones: ["17", "20", "15", "14"],
    respuestaCorrecta: 0,
    temaId: 4,
    temaTitulo: "Progresiones e Inecuaciones",
  },
  {
    pregunta: "Resuelve la inecuación: 2x - 4 ≤ 10",
    opciones: ["x ≤ 7", "x ≥ 7", "x < 7", "x > 7"],
    respuestaCorrecta: 0,
    temaId: 4,
    temaTitulo: "Progresiones e Inecuaciones",
  },
  {
    pregunta:
      "En una progresión geométrica con primer término 3 y razón 2, ¿cuál es el tercer término?",
    opciones: ["12", "9", "6", "24"],
    respuestaCorrecta: 0,
    temaId: 4,
    temaTitulo: "Progresiones e Inecuaciones",
  },

  {
    pregunta: "¿Cuánto es tan(45°)?",
    opciones: ["1", "√2", "1/2", "√3/2"],
    respuestaCorrecta: 0,
    temaId: 5,
    temaTitulo: "Trigonometría",
  },
  {
    pregunta:
      "Si sen(x) = 3/5 y x está en el primer cuadrante, ¿cuánto es cos(x)?",
    opciones: ["4/5", "3/4", "5/3", "2/5"],
    respuestaCorrecta: 0,
    temaId: 5,
    temaTitulo: "Trigonometría",
  },
  {
    pregunta: "¿Cuánto es cos(60°)?",
    opciones: ["1/2", "√3/2", "1", "√2/2"],
    respuestaCorrecta: 0,
    temaId: 5,
    temaTitulo: "Trigonometría",
  },
  {
    pregunta: "La identidad fundamental de la trigonometría es:",
    opciones: [
      "sen²x + cos²x = 1",
      "sen x + cos x = 1",
      "tan²x + 1 = sec²x",
      "sen 2x = 2 sen x",
    ],
    respuestaCorrecta: 0,
    temaId: 5,
    temaTitulo: "Trigonometría",
  },
];
