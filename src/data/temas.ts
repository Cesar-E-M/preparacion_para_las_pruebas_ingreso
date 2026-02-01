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
    titulo: "Conjuntos y Dominios Numericos",
    descripcion: "Conceptos básicos",
    epigrafes: [
      {
        id: 1,
        titulo: "Introducción al Tema",
        contenido: [
          `Para satisfacer los pedidos de nuestros estudiantes de 10mo grado y
          contribuir con una mayor preparación con vistas a la culminación
          satisfactoria del curso, nuestra empresa CINESOFT ha elaborado este
          resumen.`,
          `Este material te servirá como un complemento a las clases televisivas,
          junto a tu libro de texto.`,
          `Este resumen está dedicado a recordar algunos contenidos de conjuntos
          y dominios numéricos, muchos de ellos aplicados posteriormente en el
          análisis de funciones y el trabajo con ecuaciones e inecuaciones.`,
          `Este material se ha elaborado con premura, para ponerlo a tu disposición.`,
          `Rogamos nos disculpes cualquier imprecisión y la hagas llegar a
          nosotros para hacer la corrección inmediatamente.`,
          `Esperamos que te sea útil para lograr una mejor preparación.`,
        ],
      },
      {
        id: 2,
        titulo: "Conjuntos y Clasificación",
        contenido: [
          `Conjunto: Agrupación de diferentes elementos que
          comparten entre sí características y propiedades semejantes.`,
          "Estos elementos pueden ser números, figuras, meses, frutas; etc.",
          "Ejemplos:",
          "A = {1 ; 2 ; 3}",
          "C = {enero ; marzo ; mayo ; septiembre}",
          "D = {mango ; guayaba}",
          "1. Clasificación de los conjuntos",
          `- Finito: Un conjunto es finito cuando sus n elementos se
          pueden enumerar o contar, siendo n un número entero positivo.`,
          "Ejemplo: M = {5 ; 7,9 ; 100} tiene 3 elementos, n = 3.",
          `- Infinito: Un conjunto es infinito cuando sus n
          elementos no se pueden enumerar ni contar, debido a que
          no tiene fin.`,
          "Ejemplo: P = {x∈R: x > 4} tiene infinitos elementos.",
          "Los conjuntos finitos a su vez, pueden clasificarse en:",
          ` Conjunto vacío:
          Conjunto que no tiene elementos. El símbolo que se utiliza
          para representar este conjunto es Ø.`,
          ` Conjunto unitario:
          Conjunto que tiene un solo elemento.`,
          "Ejemplo: A = {4}.",
          `Cuando los elementos de los conjuntos son números,
          estamos en presencia de conjuntos numéricos.`,
          "Ejemplo:",
          " El conjunto de los números naturales",
          "{0 ; 1 ; 2 ; 3 ; 4 ; …} que es un conjunto infinito.",
          `El conjunto de los números primos entre 4 y 12,
          {2 ; 3 ; 5 ; 7 ; 11} que es un conjunto finito.`,
        ],
      },
      {
        id: 3,
        titulo: "Relaciones y Formas de Representación",
        contenido: [
          "1. Relaciones",
          `Dentro del trabajo con los conjuntos y sus elementos se pueden
          establecer las relaciones siguientes:`,
          "- Relaciones de pertenencia:",
          ` Si un elemento a pertenece a un conjunto B, se escribe a ∈ B,
          se interpreta como ${"el elemento a pertenece al conjunto B"}. Si el
          elemento b no pertenece al conjunto B, se escribe a ∉ B.`,
          `Nota: Los símbolos ∈ y ∉ se utilizan para establecer relaciones
          entre un elemento y un conjunto.`,
          "Ejemplo: −𝟐 ∈ ℤ y – 2 ∉ ℕ",
          "- Relaciones de inclusión:",
          ` Si todos los elementos de un conjunto A son también
          elementos de un conjunto B, se dice que A es
          un subconjunto de B. Esta relación se expresa como: 𝑨 ⊂ 𝑩. Si
          al menos un elemento de A no es un elemento de B,
          entonces A no es un subconjunto de B, se escribe 𝑨 ⊄ 𝑩.`,
          `Nota: Los símbolos ⊂ y ⊄ se utilizan para establecer relaciones
          entre dos conjuntos.`,
          "Ejemplo:",
          " Si A = {– 3 ; 0 ; 5}, entonces 𝑨⊂ ℤ .",
          " Si A = {– 3 ; 0 ; 5}, entonces 𝑨⊄ ℕ .",
          "Nota: Son incorrectas las siguientes igualdades:",
          `{– 3}∈ ℤ , como – 3 está entre llaves, {– 3} es un conjunto
          unitario y entre dos conjuntos no se utiliza el símbolo de
          pertenencia, lo correcto sería {– 3}⊂ ℤ .
           2,4⊄ ℕ , entre un número y un conjunto no se utiliza el
          símbolo de subconjunto, lo correcto sería 2,4∉ ℕ .
           ℕ ∈ ℚ , entre dos conjuntos no se utiliza el símbolo de
          pertenencia, lo correcto sería ℕ ⊂ ℚ .`,
          "2. Formas de representación",
          "Un conjunto puede ser representado de las formas siguientes:",
          `- Forma por enumeración o extensión, listando todos
          sus elementos cuando es posible, separados cada uno por
          medio de una coma o punto y coma y encerrados entre
          llaves.`,
          "Por ejemplo:",
          `${"El conjunto M formado por los dedos de una mano"} se
          escribe así:`,
          "M = {pulgar , medio , meñique , índice , anular}.",
          `${"El conjunto A formado por los números enteros pares mayores que veinte y menores que cien"}`,
          "A = {22 , 24 , 26 , 28 , ... , 98}",
          "Nota: Esta forma de escribir se denomina notación tabular.",
          `- Forma descriptiva por medio de una frase o regla que
          describe las propiedades que tienen sus
          elementos, descripción por comprensión.`,
          "Por ejemplo: B = {x∈ℕ: x² < 25}.",
          `Se lee "B es el conjunto de todas las x que pertenecen a
          los números naturales, cuyo cuadrado es menor que 25".`,
          "Nota: Esta notación se denomina constructiva.",
          `- Forma gráfica mediante
          un dibujo, diagrama de Venn, una tabla o
          un diagrama de árbol para representar ciertas
          relaciones entre dos o más conjuntos.`,
          "Resumiendo:",
          `Observa los ejemplos siguientes, donde aparece
          representado un conjunto de todas las formas anteriores
          descritas:`,
          "*Ejemplo 1:",
          " Por extensión: A = {a , e , i , o , u}",
          " Notación tabular",
          " Por descripción: A = {x/x es una vocal}",
          " Notación constructiva",
          "*Ejemplo 2:",
          " Por extensión: B = {1 ; 3 ; 5 ; ….}",
          " Notación tabular",
          " Por descripción: C = {x ∈ ℕ: x impar}",
          "Notación constructiva",
        ],
      },
      {
        id: 4,
        titulo: "Operaciones con Conjuntos",
        contenido: [
          "1. Unión",
          `La unión de dos conjuntos A y B es el conjunto formado por todos los elementos de los dos conjuntos. 
          O sea, los elementos que pertenecen al
          conjunto A o al conjunto B, o a ambos.`,
          " Esta operación se denota como: A∪B",
          `En forma simbólica, esta operación se puede definir como:
           A∪B = {x/ x ∈ A o x ∈ B}`,
          "*Ejemplos:",
          " Sean A = {0 ; 3,14 ; 5} y B = {– 2 ; 0 ; π}, entonces:",
          " A∪B = {0 ; 3,14 ; 5 ; – 2 ; π}",
          "2. Intersección",
          `La intersección de dos conjuntos A y B es el
          conjunto formado por los elementos que
          pertenecen a ambos conjuntos, los
          elementos comunes. O sea, los elementos que
          pertenecen a A y pertenecen a B.`,
          "Esta operación se denota: A∩B.",
          `En forma simbólica, esta operación se puede definir 
          como: A∩B = {x/ x∈A y x∈B}`,
          "*Ejemplos:",
          " Sean A = {0 ; 3,14 ; 5} y B = {– 2 ; 0 ; π}, entonces:",
          " A∩B = {0}",
          "3. Diferencia",
          `Sean dos conjuntos A y B cualesquiera,
          su diferencia es el conjunto que se forma
          con los elementos que pertenecen al
          conjunto A, pero que no pertenecen al conjunto B.`,
          "Denotamos la diferencia entre conjuntos como A \ B.",
          `Al igual que la operación aritmética que
           llamamos diferencia o resta, la diferencia entre
           dos conjuntos no es conmutativa, o sea A \ B no es
          lo mismo que B \ A.`,
          ` En forma simbólica, la diferencia de dos conjuntos A y B se
            puede expresar de la manera siguiente:`,
          "A \ B = {x/ x ∈ A y x ∉ B}",
          "*Ejemplos:",
          " Sean A = {0 ; 3,14 ; 5} y B = {– 2 ; 0 ; π}, entonces:",
          " A \ B = {3,14 ; 5}",
          `Nota: En los ejemplos mostrados debes tener en cuenta
          que π no es igual a 3,14; π es un número irracional y por
          tanto tiene desarrollo decimal infinito.`,
          "4. Complemento de un conjunto",
          `Para realizar esta operación es necesario tener un
           conjunto llamado conjunto Universo.`,
          `Llamamos conjunto universo al conjunto que tomamos
          como marco de referencia para formar y realizar alguna operación entre conjuntos. 
          Por lo general, este conjunto se representa con la letra U.`,
          `Sean dos conjuntos U (Universo) y A,
          entonces el conjunto A^c
          (Complemento de A)
          es el conjunto formado por los elementos que le
          faltan al conjunto A para conformar el
          conjunto universo U.`,
          "*Ejemplos:",
          `Si el conjunto universo son los números reales ( ℝ ) y el
          conjunto A son los números racionales ( ℚ ), entonces el conjunto
          A^c es el conjunto (I) , o sea los irracionales`,
        ],
      },
      {
        id: 5,
        titulo: "Conjuntos Numéricos",
        contenido: [
          "1. Números Naturales (ℕ)",
          `El conjunto de los números naturales está formado por los
           números enteros no negativos y su símbolo es ℕ :
           ℕ = {0; 1 ; 2 ; 3 ; 4 ; 5 ; …}`,
          "2. Números Enteros (ℤ)",
          `El conjunto de los números enteros está formado por los números
naturales y sus opuestos y su símbolo es ℤ :
 ℤ = {…… ; – 3 ; – 2 ; – 1 ; 0; 1 ; 2 ; 3 ; 4 ; 5 ; …}`,
          "3. Números Racionales (ℚ)",
          `El conjunto de los números racionales está formado por los
números enteros y las fracciones positivas y negativas, su
símbolo es ℚ .`,
          "4. Números Irracionales (I)",
          `Es el conjunto de los números irracionales y está
formado por las expresiones decimales infinitas no
periódicas, positivas y negativas.`,
          "5. Números Reales (ℝ)",
          `Es el conjunto de los reales y está formado por los
números racionales y los irracionales, por tanto se
cumple que:
 ℝ = ℚ ∪ I`,
          "6. Numeros Fraccionarios (Q+)",
          `Es el conjunto de los números fraccionarios y está
formado por los números naturales y las fracciones
positivas, que como sabes se pueden escribir mediante
expresiones decimales finitas e infinitas periódicas.`,
          "*Importante:",
          `Para realizar operaciones con conjuntos cuyos elementos son
números reales, además de la notación constructiva, también es
necesario dominar la notación de intervalos, así como su
representación gráfica.`,
          `Los intervalos numéricos son subconjuntos de números reales
comprendidos entre dos números, que pueden pertenecer o no al
subconjunto numérico que describen.`,
          "Pueden ser:",
          "- Abiertos: (a ; b) = {x ∈ ℝ / a < x < b}",
          "- Cerrados: [a ; b] = {x ∈ ℝ / a ≤ x ≤ b}",
          "- Semiabiertos o semicerrados: [a ; b) = {x ∈ ℝ / a ≤ x < b} o (a ; b] = {x ∈ ℝ / a < x ≤ b}",
          "- Infinito: (a ; ∞) = {x ∈ ℝ / x > a}, (– ∞ ; b) = {x ∈ ℝ / x < b}, [a ; ∞) = {x ∈ ℝ / x ≥ a}, (– ∞ ; b] = {x ∈ ℝ / x ≤ b}",
        ],
      },
    ],
    ejercicios: [
      {
        pregunta: `A = {-2, -1, 0, 1, 2}
        B = (el conjunto de los números naturales incluyendo el cero, es decir: {0, 1, 2, 3, 4, }).
        Determina el conjunto resultante de la intersección (A∩B).`,
        opciones: [
          "A ∩ B = {0, 1, 2}",
          "A ∩ B = {-2, -1}",
          "A ∩ B = {-2, -1, 0, 1, 2}",
          "A ∩ B = {NaN}",
        ],
        respuestaCorrecta: 0,
      },
      {
        pregunta: `Imagina que estamos analizando el dominio de una función. Definimos nuestro Conjunto Universal como el conjunto de todos los números reales: U = ℝ.
        Supongamos que el conjunto A representa todos los números reales positivos y el cero, que es un dominio común para funciones como la raíz cuadrada:
        A = {x ∈ ℝ | x ≥ 0}. ¿Cuál es el conjunto complemento A^c dentro del universo de los números reales?`,
        opciones: ["{x ∈ ℝ | x > 0}", "{x ∈ ℝ | x < 0}", "{x ∈ ℝ | x = 0}"],
        respuestaCorrecta: 1,
      },
    ],
  },
  {
    id: 2,
    titulo: "Funciones",
    descripcion: "Fundamentos de las Funciones y sus aplicaciones",
    epigrafes: [
      {
        id: 1,
        titulo: "Conceptos Básicos de Funciones",
        contenido: [
          `Este epígrafe aborda la definición y las características básicas de las funciones. Entre los puntos clave desarrollados se encuentran:`,
          `- Ceros de la función: Se definen como los valores del dominio cuya imagen es cero, lo que gráficamente representa los puntos donde la curva corta el eje de las abscisas (x)`,
          `- Representación Gráfica: El texto distingue entre gráficas de puntos aislados y trazos continuos:
          Las gráficas consisten en puntos aislados cuando el dominio es un conjunto de números naturales (N) o enteros (Z).
          El trazo es continuo cuando el dominio es el conjunto de los números reales (R)`,
          `- Identificación de una función: Para que una gráfica represente una función, debe cumplir con las condiciones de existencia y unicidad.`,
          `- Prueba de la Recta Vertical: Es un método práctico que establece que una gráfica es función si cualquier recta vertical la interseca en un solo punto. Si una recta vertical corta la gráfica en dos o más puntos, no se cumple la condición de unicidad.`,
        ],
      },
      {
        id: 2,
        titulo: "Funciones Escalares Algebraicas",
        contenido: [
          "1. Clasificación de las Funciones Algebraicas",
          `a) Funciones Polinómicas: Son la base de las funciones algebraicas. Su dominio es siempre el conjunto de los números reales (R).`,
          `- Función Lineal (f(x) = ax + b): 
          Su gráfica es una recta. Se destaca la importancia de la pendiente (a) y la ordenada al origen (b).`,
          `- Función Cuadrática (f(x) = ax^2 + bx + c): Su gráfica es una parábola. 
          Se analiza el vértice, el eje de simetría y las raíces mediante la fórmula resolvente.`,
          `- Grado Superior: Funciones de grado n. El texto enfatiza que el número máximo de ceros (raíces) coincide con el grado de la función.`,
          `b) Funciones Racionales: Se definen como el cociente de dos polinomios: f(x) = P(x) / Q(x).`,
          `Dominio Crítico: El dominio son todos los reales excepto aquellos que anulan el denominador (Q(x) = 0).`,
          `Asíntotas: El documento introduce aquí el comportamiento de la función cerca de los valores excluidos del dominio (asíntotas verticales) y su comportamiento en el infinito (asíntotas horizontales).`,
          `c) Funciones Irracionales (Radicales): Son aquellas donde la variable independiente se encuentra bajo un signo de radical: f(x) = √g(x).`,
          `- Restricción de Dominio: * Si el índice (n) es impar, el dominio es el mismo que el de g(x). Si el índice (n) es par, el dominio está restringido a los valores donde g(x) ≥ 0.`,
          `2. Metodo de Análisis de Funciones`,
          `Determinación del Dominio: Es el primer paso obligatorio. Identificar restricciones (divisiones por cero o raíces pares de números negativos).`,
          `Búsqueda de "Puntos Notables": Intersección con Eje Y: Se calcula f(0). Es la ordenada al origen. Intersección con Eje X (Ceros): Se resuelve f(x) = 0. Son las raíces algebraicas.`,
          `Análisis de Signos (Teorema de Bolzano):Se utilizan las raíces para dividir el dominio en intervalos. Se determina el Conjunto de Positividad (C^+) y el Conjunto de Negatividad (C^-) evaluando puntos dentro de esos intervalos.`,
          `Monotonía y Extremos: Identificar dónde la función crece o decrece y si presenta puntos máximos o mínimos (especialmente en cuadráticas).`,
        ],
      },
      {
        id: 3,
        titulo: "Funciones Escalares Transcendentes",
        contenido: [
          "1. Funciones Exponenciales:",
          `Definición: Son funciones de la forma f(x) = a^x, donde a es una constante positiva distinta de 1.`,
          `- Comportamiento: *Si a > 1, la función es creciente (ej. crecimiento de bacterias).Si 0 < a < 1, la función es decreciente (ej. desintegración radiactiva).`,
          `- Puntos clave: * Siempre pasa por el punto (0, 1) porque a^0 = 1 .Tiene una asíntota horizontal en el eje x (y=0), lo que significa que la curva se acerca al eje pero nunca lo toca.
          El dominio son todos los reales (R), pero su imagen son solo los reales positivos (R+).`,
          `2. Funciones Logísticas:`,
          `- Definición: Es una función exponencial modificada que describe un crecimiento que al principio es rápido pero que luego se estabiliza.`,
          `- Uso práctico: Se utiliza para modelar el crecimiento de poblaciones que tienen un límite de recursos (capacidad de carga). A diferencia de la exponencial pura que crece al infinito, la logística se curva hacia una asíntota superior.`,
          `3. Funciones Logarítmicas:`,
          `Definición: Son la función inversa de las exponenciales, de la forma f(x) = log_a(x), donde a es una constante positiva distinta de 1.`,
          `- Dominio e Imagen: El dominio son los reales positivos (R+), y la imagen son todos los reales (R).`,
          `- Puntos clave: Siempre pasa por el punto (1, 0) porque log_a(1) = 0 .Tiene una asíntota vertical en el eje y (x=0), lo que significa que la curva se acerca al eje pero nunca lo toca.`,
          `- Comportamiento: *Si a > 1, la función es creciente.Si 0 < a < 1, la función es decreciente.`,
          `4. Funciones Trigonométricas:`,
          `Definición: Son funciones que relacionan un ángulo con las razones de los lados de un triángulo rectángulo o con las coordenadas en el círculo unitario. Las principales son seno (sin), coseno (cos) y tangente (tan).`,
          `- Dominio e Imagen: *Seno y Coseno: Dominio es R, Imagen es [-1, 1].Tangente: Dominio es R excepto (π/2 + kπ), Imagen es R.`,
          `- Periodicidad: *Seno y Coseno tienen periodo 2π.Tangente tiene periodo π.`,
          `- Aplicaciones: Se utilizan para modelar fenómenos periódicos como ondas sonoras, luz y movimientos cíclicos.`,
        ],
      },
    ],
    ejercicios: [
      {
        pregunta: `Determine el dominio de la función racional f(x) = {x + 5}/{x^2 - 9}.`,
        opciones: ["R  - {9}", "R - {-5}", "R - {-3, 3}", "(-3, 3)"],
        respuestaCorrecta: 2,
      },
      {
        pregunta:
          "Halle los ceros de la función polinómica de segundo grado f(x) = x^2 - 5x + 6.",
        opciones: [
          "x1 = 2 y x2 = 3",
          "x = 6",
          "x1 = -2 y x2 = -3",
          "No tiene raíces reales",
        ],
        respuestaCorrecta: 0,
      },
    ],
  },
  {
    id: 3,
    titulo: "Geometria Analitica 2",
    descripcion: "Definiciones y Formulas de la geometría analítica",
    epigrafes: [
      {
        id: 1,
        titulo: "Formulas Básicas",
        contenido: [
          "1. Distancia entre dos puntos (x1, y1) y (x2, y2):",
          `Es utilizada para calcular la longitud de un segmento.
          Sean A(x1, y1) y B(x2, y2) dos puntos en el plano cartesiano, la fórmula para calcular la distancia (d) entre ellos es:`,
          "d = √((x2 - x1)² + (y2 - y1)²)",
          "2. Pendiente de una recta:",
          `a) Puede calcularse conocidos dos puntos que pertenecen a la recta:`,
          `Sean A(x1, y1) y B(x2, y2) la pendiente de la recta que está
          determinada por los puntos A y B se calcula mediante la fórmula:`,
          "m = (y2 - y1) / (x2 - x1)",
          `b) Puede calcularse si se conoce el ángulo que forma la recta con el
          semieje positivo “x” m = tan(α)`,
          "3. Coordenadas del punto medio de un segmento:",
          `Puede calcularse si se conocen las coordenadas de los extremos del
          segmento. Sean A(x1, y1) y B(x2, y2) los extremos del segmento, las
          coordenadas del punto medio M(xm, ym) se calculan mediante las
          fórmulas:`,
          "M = ((x1 + x2) / 2; (y1 + y2) / 2)",
          "4. Relaciones de paralelismo y perpendicularidad de rectas:",
          `Es utilizada para demostrar que dos rectas son paralelas o que dos rectas
          se cortan perpendicularmente.`,
          `a) Si dos rectas tienen igual pendiente, entonces son paralelas. Si m1 = m2, entonces r1 || r2.`,
          `b) Si la pendiente de una recta es el opuesto y recíproco de la pendiente
          de otra recta, entonces las rectas se cortan perpendicularmente. Si m1 = -1/m2, entonces r1 ⊥ r2.`,
          "5. Distancia de un punto a una recta:",
          `Definición: (Distancia de un punto a una recta)
          Se llama distancia de un punto a una recta a la longitud del segmento de
          perpendicular trazado desde el punto hasta la recta.
          Permite calcular la longitud de la altura de un polígono.
          Para calcular la distancia de un punto a una recta es necesario conocer las
          coordenadas del punto y la ecuación general de la recta.`,
          "Sea r: Ax + By + C = 0 y P1(x1, y1); entonces d(P1; r) = |Ax1 + By1 + C| / √(A² + B²)",

          `Nota: Las formulas del calclulo de áreas y perímetros de figuras planas se encuentran en el documento resumen del tema, para un
          mayor conosimineto y detalle reviselo. Sludos cordiales del equipo de desarrollo de "MuñozCorp".`,
        ],
      },
    ],
    ejercicios: [
      {
        pregunta:
          "Halle la ecuación de la recta que tiene una pendiente a = 2 y pasa por el punto P(0, 3).",
        opciones: ["y = 3x + 2", "y = 2x - 3", "y = -2x + 3", "y = 2x + 3"],
        respuestaCorrecta: 3,
      },
    ],
  },
  {
    id: 4,
    titulo: "Inecuaciones",
    descripcion: "Cálculo y aplicación de las inecuaciones",
    epigrafes: [
      {
        id: 1,
        titulo: "Concepto de una Inecuación",
        contenido: [
          "Una inecuación es una expresión matemática que establece una relación de desigualdad entre dos expresiones algebraicas. A diferencia de una ecuación, que establece igualdad, una inecuación utiliza símbolos de desigualdad como < (menor que), > (mayor que), ≤ (menor o igual que) y ≥ (mayor o igual que).",
          "El objetivo principal al resolver una inecuación es encontrar el conjunto de valores que satisfacen la desigualdad planteada. Estos valores pueden representarse en una recta numérica o mediante intervalos.",
          "Las inecuaciones se utilizan en diversas áreas de las matemáticas y tienen aplicaciones prácticas en campos como la economía, la ingeniería y la ciencia, donde a menudo es necesario trabajar con rangos de valores en lugar de valores exactos.",
        ],
      },
      {
        id: 2,
        titulo: "Procedimiento para las Inecuaciones Lineales",
        contenido: [
          "1. Transformar la ecuación aplicando productos notables, propiedad distributiva y la eliminación de signos de agrupación.",
          "2. Reducir la ecuación a la forma ax ≥ b; a,b ∈ R; a ≠ 0.",
          "3. Despejar la variable teniendo en cuenta el signo de su coeficiente, si es negativo, se invierte el sentido de la desigualdad.",
          "4. Escribir el conjunto solución o respuesta.",
        ],
      },
      {
        id: 3,
        titulo: "Procedimiento para las Inecuaciones Cuadráticas",
        contenido: [
          "1. Transformar la ecuación aplicando productos notables, propiedad distributiva y la eliminación de signos de agrupación.",
          "2. Reducir la ecuación a la forma ax^2 + bx + c ≥ 0; a,b,c ∈ R; a ≠ 0.",
          "3. Calcular los ceros.",
          "4. Representar los ceros en la recta numérica.",
          `5. Colocar los signos comenzando de derecha a izquierda teniendo en cuenta:`,
          `•	El signo del coeficiente de la variable de mayor exponente.`,
          `•	La existencia de ceros dobles, pues el signo no cambia alrededor de él.`,
          "6. Escribir el conjunto solución o respuesta.",
        ],
      },
      {
        id: 4,
        titulo: "Procedimiento para las Inecuaciones Fraccionarias",
        contenido: [
          "1. Comparar con cero.",
          "2. Ampliar las fracciones a un denominador común.",
          "3. Factorizar el numerador y el denominador.",
          "4. Calcular los ceros del numerador y el denominador.",
          "5. Representar los ceros en la recta numérica.",
          "6. Colocar los signos de derecha a izquierda teniendo en cuenta:",
          "•	El signo del cociente entre el coeficiente de la variable de mayor exponente del numerador y el denominador.",
          "•	La existencia de ceros dobles u otros factores comunes entre el numerador y el denominador.",
          "7. Escribir el conjunto solución o respuesta.",
        ],
      },
      {
        id: 5,
        titulo: "Procedimiento para las Inecuaciones Exponenciales",
        contenido: [
          "1. Expresar todas las potencias en función de una misma base.",
          "2. Agrupar a una potencia en cada miembro aplicando propiedades.",
          "3. Eliminar las bases aplicando el teorema de la monotonía de la potenciación:",
          "•	Si a^x ≥ a^y; entonces x ≥ y; a > 1.",
          "•	Si a^x ≥ a^y; entonces x ≤ y; 0 < a < 1.",
          "4. Resolver la ecuación resultante.",
          "5. Escribir el conjunto solución o respuesta.",
        ],
      },
      {
        id: 6,
        titulo: "Procedimiento para las Inecuaciones Logarítmicas",
        contenido: [
          "1. Expresar todos los logaritmos con igual base y coeficiente uno.",
          "2. Agrupar a un solo logaritmo en cada miembro aplicando propiedades.",
          "3. Eliminar los logaritmos aplicando el teorema de la monotonía de la logaritmación:",
          "•	Si log_a(x) ≥ log_a(y); entonces x ≥ y; a > 1.",
          "•	Si log_a(x) ≥ log_a(y); entonces x ≤ y; 0 < a < 1.",
          "4. Resolver la ecuación resultante.",
          "5. Hallar el dominio de la inecuación original.",
          "6. Intersectar las posibles soluciones con el dominio de la inecuación para determinar las soluciones.6. Intersectar las posibles soluciones con el dominio de la inecuación para determinar las soluciones.",
          "7. Escribir el conjunto solución o respuesta.",
        ],
      },
    ],
    ejercicios: [
      {
        pregunta: "Halle el conjunto solución de la inecuación: 3x - 5 < 7.",
        opciones: [
          "x > 4",
          "x < 4 (o el intervalo (-∞, 4))",
          "x < 2/3",
          "$x ≤ 4",
        ],
        respuestaCorrecta: 1,
      },
      {
        pregunta:
          "Determine el intervalo de valores que satisface la inecuación: (x - 2)(x + 3) > 0.",
        opciones: [
          "(-∞, 2) ∪ (3, +∞)",
          "[-∞, -3] ∪ [2, +∞]",
          "(-∞, -3) ∪ (2, +∞)",
          "(-3, 2)",
        ],
        respuestaCorrecta: 2,
      },
    ],
  },
  {
    id: 5,
    titulo: "Trigonometría",
    descripcion: "Conceptos y Aplicaciones de la Trigonometría",
    epigrafes: [
      {
        id: 1,
        titulo: "Definiciones de Trigonométricas Básicas",
        contenido: [
          "Las funciones trigonométricas son relaciones matemáticas que vinculan los ángulos de un triángulo con las proporciones de sus lados. Las funciones trigonométricas básicas son el seno (sin), el coseno (cos) y la tangente (tan).",
          "1. Seno (sin): En un triángulo rectángulo, el seno de un ángulo agudo es la razón entre la longitud del cateto opuesto al ángulo y la longitud de la hipotenusa. Matemáticamente, se expresa como: sin(θ) = cateto opuesto / hipotenusa.",
          "2. Coseno (cos): El coseno de un ángulo agudo es la razón entre la longitud del cateto adyacente al ángulo y la longitud de la hipotenusa. Se expresa como: cos(θ) = cateto adyacente / hipotenusa.",
          "3. Tangente (tan): La tangente de un ángulo agudo es la razón entre la longitud del cateto opuesto al ángulo y la longitud del cateto adyacente. Se expresa como: tan(θ) = cateto opuesto / cateto adyacente.",
          "Estas funciones son fundamentales en trigonometría y tienen aplicaciones en diversas áreas, incluyendo la física, la ingeniería y la navegación.",
        ],
      },
      {
        id: 2,
        titulo: "Formulas de Relación",
        contenido: [
          "Si x es un angulo agudo, se cumple que:",
          "1. Cuadrante 1:",
          "sen(π/2 - x) = cos x",
          "cos(π/2 - x) = sen x",
          "tan(π/2 - x) = cot x",
          "cot(π/2 - x) = tan x",
          "2. Cuadrante 2:",
          "sen(π - x) = sen x",
          "cos(π - x) = - cos x",
          "tan(π - x) = - tan x",
          "cot(π - x) = - cot x",
          "3. Cuadrante 3:",
          "sen(π + x) = - sen x",
          "cos(π + x) = - cos x",
          "tan(π + x) = tan x",
          "cot(π + x) = cot x",
          "4. Cuadrante 4:",
          "sen(2π - x) = - sen x",
          "cos(2π - x) = cos x",
          "tan(2π - x) = - tan x",
          "cot(2π - x) = - cot x",
          `Nota: Para aprenderte la tabla ten en cuenta que:`,
          `- Cuando el argumento de las razones trigonométricas es π/2 - x, en el resultado se cambia la razón trigonométrica y
          todas son positivas.`,
          `- Cuando en el argumento aparece la fórmula de
          reducción de los cuadrantes 2, 3 o 4, como en las
          columnas 2, 3 y 4, se mantiene la misma razón
          trigonométrica, a diferencia de la columna 1, pero se
          analiza el signo de dicha razón en ese cuadrante.`,
          `- Estas fórmulas se cumplen también cuando el segundo
término en el argumento es otro ángulo. Por ejemplo: sen(π/2 - 2x) = cos 2x`,
          `Los argumentos de las razones trigonométricas pueden
aparecer en grados o radianes.`,
        ],
      },
      {
        id: 3,
        titulo: "Identidades Trigonométricas",
        contenido: [
          `Las identidades trigonométricas son igualdades que se
cumplen para todos los valores admisibles y se utilizan, entre otras
cosas, para realizar demostraciones y resolver ecuaciones
trigonométricas.`,
          "1. Identidad Fundamental Trigonométrica:",
          "sen²x + cos²x = 1",
          "sen²x= 1 - cos²x",
          "cos²x = 1 - sen²x",

          "tan x = senx / cosx",
          "cot x = cosx / senx",
          "1 + tan²x = 1/cos²x",
          "1 + cot²x = 1/sen²x",

          "2. Identidades del ángulo duplo:",
          "sen 2x = 2 sen x cos x",
          "cos 2x = cos²x - sen²x = 2 cos²x - 1 = 1 - 2 sen²x",

          "3. Identidades para ángulos negativos:",
          "sen(-x) = - sen x",
          "cos(-x) = cos x",
          "tan(-x) = - tan x",
          "cot(-x) = - cot x",
        ],
      },
    ],
    ejercicios: [
      {
        pregunta:
          "Dada la función trigonométrica f(x) = 3 * sen(2x), determine su amplitud (A) y su período (T).",
        opciones: [
          "A = 3, T = π",
          "A = 2, T = 3",
          "A = 3, T = 2π",
          "A = 6, T = π/2",
        ],
        respuestaCorrecta: 0,
      },
      {
        pregunta: `En un triángulo rectángulo, el cateto opuesto a un ángulo a mide 6cm y la hipotenusa mide 10cm. 
        ¿Cuál es el valor del seno de a y cuánto mide el cateto adyacente?`,
        opciones: [
          "sen(a) = 0.6 y cateto adyacente = 8cm",
          "sen(a) = 0.8 y cateto adyacente = 6cm",
          "sen(a) = 1.6 y cateto adyacente = 4cm",
          "sen(a) = 0.6 y cateto adyacente = 16cm",
        ],
        respuestaCorrecta: 0,
      },
    ],
  },
];
