import React, { useContext } from 'react';
import Card from '../common/Card.js';
import SectionWrapper from '../common/SectionWrapper.js';
import Button from '../common/Button.js';
import { ArrowRightIcon } from '../icons/Icons.js';
import { AppContext } from '../../App.js';

const objectives = [
    "Calcular límites de funciones reales en distintos puntos, identificando indeterminaciones o discontinuidades.",
    "Determinar la continuidad de una función en un punto y en un intervalo, aplicando la definición formal y las condiciones necesarias.",
    "Aplicar el Teorema del Valor Intermedio (TVI) y el teorema de existencia de máximos y mínimos en intervalos cerrados y acotados.",
    "Comprender la relación entre continuidad, derivabilidad y crecimiento asintótico.",
    "Analizar ejemplos del currículo escolar donde se aplican los conceptos de continuidad y límite.",
    "Reconocer estrategias visuales y dinámicas para enseñar continuidad y límites en niveles escolares.",
    "Diseñar o seleccionar ejercicios adecuados para que los estudiantes exploren el concepto de límite y continuidad de manera intuitiva."
];

const Introduction = () => {
    const { navigateTo } = useContext(AppContext);

    return (
        <SectionWrapper title="Introducción">
            <div className="space-y-8">
                <Card>
                    <h3 className="text-2xl font-bold mb-4 text-blue-500">Público Objetivo</h3>
                    <p className="text-justify">
                        Este módulo está diseñado para profesores y futuros docentes de matemáticas en educación superior, que buscan profundizar en la comprensión y enseñanza del cálculo diferencial, específicamente en los conceptos de límites y continuidad.
                    </p>
                </Card>
                
                <Card>
                    <h3 className="text-2xl font-bold mb-4 text-blue-500">Objetivos de Aprendizaje</h3>
                    <ul className="list-disc list-inside space-y-2 text-justify">
                        {objectives.map((obj, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-cyan-400 mr-2 mt-1">▶</span>
                                <span>{obj}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
                <div className="flex justify-end mt-8">
                    <Button onClick={() => navigateTo('Activación')} className="inline-flex items-center gap-2">
                        Siguiente <ArrowRightIcon className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Introduction;