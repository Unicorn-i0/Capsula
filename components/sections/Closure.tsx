import React, { useState, useContext } from 'react';
import Card from '../common/Card.js';
import SectionWrapper from '../common/SectionWrapper.js';
import Button from '../common/Button.js';
import { AppContext } from '../../App.js';
import { ArrowRightIcon } from '../icons/Icons.js';
 
const metacognitiveQuestions = [
    {
        id: 1,
        question: "¿Cuál fue el concepto más desafiante de esta cápsula y qué estrategia utilizaste para comprenderlo mejor?",
    },
    {
        id: 2,
        question: "¿Cómo podrías aplicar el Teorema del Valor Intermedio para crear un problema relevante y contextualizado para tus estudiantes?",
    },
    {
        id: 3,
        question: "Describe una actividad de aprendizaje, usando tecnología, que podrías diseñar para ayudar a los estudiantes a diferenciar entre una discontinuidad evitable y una de salto.",
    }
];

const RubricTable = () => (
    <div className="overflow-x-auto mt-6">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-300 dark:border-gray-600">
            <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-r dark:border-gray-600">Criterio (Taxonomía de Bloom)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-r dark:border-gray-600">Excelente (Crear/Evaluar)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-r dark:border-gray-600">Bueno (Analizar/Aplicar)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Necesita Mejorar (Comprender/Recordar)</th>
                </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900/50 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r dark:border-gray-600">Profundidad del Análisis (Análisis)</td>
                    <td className="px-6 py-4 text-sm border-r dark:border-gray-600">Identifica y descompone conceptos complejos, estableciendo relaciones claras y justificadas entre ellos.</td>
                    <td className="px-6 py-4 text-sm border-r dark:border-gray-600">Describe los conceptos principales y explica cómo se relacionan entre sí de manera coherente.</td>
                    <td className="px-6 py-4 text-sm">Menciona conceptos de forma superficial sin detallar sus interconexiones.</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r dark:border-gray-600">Aplicación Pedagógica (Aplicar)</td>
                    <td className="px-6 py-4 text-sm border-r dark:border-gray-600">Diseña ejemplos o actividades originales, contextualizadas y efectivas para la enseñanza del concepto.</td>
                    <td className="px-6 py-4 text-sm border-r dark:border-gray-600">Aplica el concepto a un contexto escolar de forma correcta, aunque el ejemplo sea estándar.</td>
                    <td className="px-6 py-4 text-sm">Explica el concepto teórico pero no logra transferirlo a una situación de aula práctica.</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r dark:border-gray-600">Originalidad y Creatividad (Crear)</td>
                    <td className="px-6 py-4 text-sm border-r dark:border-gray-600">Propone estrategias o soluciones innovadoras y bien fundamentadas, demostrando un pensamiento divergente.</td>
                    <td className="px-6 py-4 text-sm border-r dark:border-gray-600">Adapta estrategias conocidas o combina ideas de manera efectiva para generar una propuesta sólida.</td>
                    <td className="px-6 py-4 text-sm">Se limita a reproducir ideas o ejemplos presentados directamente en la cápsula.</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const Closure = () => {
    const { navigateTo } = useContext(AppContext);
    const [responses, setResponses] = useState({});

    const handleResponseChange = (id, value) => {
        setResponses(prev => ({ ...prev, [id]: value }));
    };

    const handleSave = () => {
        localStorage.setItem('metacognitiveResponses', JSON.stringify(responses));
        alert('Tus respuestas han sido guardadas localmente.');
    };

    return (
        <SectionWrapper title="Cierre y Metacognición">
            <Card>
                <h3 className="text-2xl font-bold mb-4 text-blue-500">Preguntas de Reflexión</h3>
                <div className="space-y-6">
                    {metacognitiveQuestions.map(q => (
                        <div key={q.id}>
                            <label htmlFor={`q-${q.id}`} className="block font-semibold mb-2 text-justify">{q.question}</label>
                            <textarea
                                id={`q-${q.id}`}
                                rows={4}
                                value={responses[q.id] || ''}
                                onChange={(e) => handleResponseChange(q.id, e.target.value)}
                                className="w-full p-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Escribe tu reflexión aquí..."
                            ></textarea>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <Button onClick={handleSave}>Guardar Respuestas</Button>
                </div>
            </Card>

            <Card>
                <h3 className="text-2xl font-bold mb-4 text-blue-500">Rúbrica Analítica de Autoevaluación</h3>
                <p className="mb-4 text-justify">Utiliza esta rúbrica para evaluar la calidad de tus respuestas a las preguntas de reflexión. Te ayudará a identificar áreas de fortaleza y oportunidades de mejora en tu pensamiento crítico y aplicación pedagógica.</p>
                <RubricTable />
            </Card>
            <div className="flex justify-end mt-8">
                <Button onClick={() => navigateTo('Certificado')} className="inline-flex items-center gap-2">
                    Finalizar Cápsula <ArrowRightIcon className="w-5 h-5" />
                </Button>
            </div>
        </SectionWrapper>
    );
};

export default Closure;