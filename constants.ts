export const SECTIONS = [
    'Formulario',
    'Portada',
    'Introducción',
    'Activación',
    'Desarrollo',
    'Evaluación Formativa',
    'Evaluación',
    'Síntesis',
    'Cierre',
    'Certificado'
];

export const EVALUATION_QUESTIONS = [
    {
        id: 1,
        text: '¿Cuál es la definición formal de límite de una función f(x) cuando x tiende a c?',
        options: [
            'lim(x→c) f(x) = L si para todo ε > 0, existe un δ > 0 tal que si |x - c| < δ, entonces |f(x) - L| < ε.',
            'lim(x→c) f(x) = L si f(c) = L.',
            'lim(x→c) f(x) = L si la función está definida en c.',
            'lim(x→c) f(x) = L si la gráfica de la función no tiene saltos.'
        ],
        correctAnswer: 'lim(x→c) f(x) = L si para todo ε > 0, existe un δ > 0 tal que si |x - c| < δ, entonces |f(x) - L| < ε.',
        feedback: 'La respuesta correcta es la definición ε-δ, que formaliza la idea de que f(x) se acerca a L tanto como queramos al tomar x suficientemente cerca de c.'
    },
    {
        id: 2,
        text: '¿Qué condición NO es necesaria para que una función f(x) sea continua en un punto x=c?',
        options: [
            'f(c) está definida.',
            'lim(x→c) f(x) existe.',
            'lim(x→c) f(x) = f(c).',
            'La función es derivable en x=c.'
        ],
        correctAnswer: 'La función es derivable en x=c.',
        feedback: 'La derivabilidad implica continuidad, pero la continuidad no implica derivabilidad. Una función puede ser continua en un punto sin ser derivable (por ejemplo, f(x) = |x| en x=0).'
    },
    {
        id: 3,
        text: 'El Teorema del Valor Intermedio garantiza que si una función f es continua en [a, b] y k es un número entre f(a) y f(b), entonces:',
        options: [
            'Existe al menos un c en (a, b) tal que f(c) = k.',
            'Existe exactamente un c en (a, b) tal que f(c) = k.',
            'f(x) es monótona en [a, b].',
            'La función tiene un máximo y un mínimo en [a, b].'
        ],
        correctAnswer: 'Existe al menos un c en (a, b) tal que f(c) = k.',
        feedback: 'El TVI asegura la existencia de al menos un punto `c` donde la función toma el valor intermedio `k`, pero no garantiza su unicidad.'
    },
    {
        id: 4,
        text: '¿Qué tipo de discontinuidad presenta la función f(x) = (x² - 4) / (x - 2) en x = 2?',
        options: [
            'Discontinuidad evitable (o removible)',
            'Discontinuidad de salto',
            'Discontinuidad infinita',
            'La función es continua en x=2'
        ],
        correctAnswer: 'Discontinuidad evitable (o removible)',
        feedback: 'Al simplificar la función (factorizando el numerador) se obtiene f(x) = x + 2 para x ≠ 2. El límite cuando x tiende a 2 es 4. Se puede "remover" la discontinuidad definiendo f(2) = 4.'
    },
    {
        id: 5,
        text: '¿Cuál de las siguientes es una estrategia visual efectiva para enseñar el concepto de límite?',
        options: [
            'Uso de secuencias numéricas en una tabla.',
            'Zoom dinámico en la gráfica de una función cerca del punto de interés.',
            'Resolver algebraicamente indeterminaciones.',
            'Memorizar las propiedades de los límites.'
        ],
        correctAnswer: 'Zoom dinámico en la gráfica de una función cerca del punto de interés.',
        feedback: 'Las herramientas tecnológicas que permiten hacer un "zoom" a la gráfica ayudan a los estudiantes a visualizar de manera intuitiva cómo los valores de la función se acercan a un valor límite a medida que la variable independiente se acerca al punto.'
    }
];