import React, { useContext } from 'react';
import Card from '../common/Card.js';
import SectionWrapper from '../common/SectionWrapper.js';
import Button from '../common/Button.js';
import { ArrowRightIcon } from '../icons/Icons.js';
import { AppContext } from '../../App.js';

const Synthesis = () => {
    const { navigateTo } = useContext(AppContext);

    return (
        <SectionWrapper title="Síntesis">
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <h3 className="text-2xl font-bold mb-4 text-blue-500">Ideas Clave</h3>
                    <ul className="list-disc list-inside space-y-3 text-justify">
                        <li>
                            <strong>El Límite como Aproximación:</strong> El límite describe el comportamiento de una función cerca de un punto, sin importar el valor de la función en ese punto exacto. Es la base del cálculo.
                        </li>
                        <li>
                            <strong>Continuidad como Conexión:</strong> Una función es continua si su gráfica no tiene interrupciones. Esto requiere que el límite en un punto exista, que la función esté definida en ese punto, y que ambos valores coincidan.
                        </li>
<li>
                            <strong>Poder de los Teoremas:</strong> Los teoremas como el del Valor Intermedio y el de Weierstrass son herramientas poderosas que se aplican a funciones continuas, garantizando la existencia de soluciones y de valores extremos, cruciales en optimización.
                        </li>
                        <li>
                            <strong>Enseñanza Visual:</strong> Para los estudiantes, las representaciones visuales (gráficas dinámicas, zoom) son más efectivas para una comprensión intuitiva de los límites que las definiciones puramente algebraicas.
                        </li>
                    </ul>
                </Card>
                <div className="space-y-8">
                    <Card>
                        <h3 className="text-2xl font-bold mb-4 text-blue-500">Infografía Resumen</h3>
                        <div className="flex justify-center items-center p-4">
                            <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                                <rect width="300" height="180" fill="#f0f9ff"/>
                                {/* Title */}
                                <text x="150" y="20" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#0284c7">Límites y Continuidad: El Puente del Cálculo</text>

                                {/* Column 1: Limite */}
                                <g transform="translate(20, 40)">
                                    <circle cx="40" cy="15" r="15" fill="#7dd3fc"/>
                                    <path d="M30 15 L 50 15 M 40 5 L 40 25" stroke="white" strokeWidth="2"/>
                                    <text x="40" y="45" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#0369a1">Límite</text>
                                    <text x="40" y="60" fontFamily="sans-serif" fontSize="8" textAnchor="middle" fill="#075985">¿A dónde te acercas?</text>
                                    <foreignObject x="0" y="70" width="80" height="50">
                                        <p style={{fontSize: '7px', textAlign: 'center', color: '#0c4a6e'}}>Describe el valor al que tiende una función cerca de un punto.</p>
                                    </foreignObject>
                                </g>

                                {/* Arrow */}
                                <path d="M110 80 C 130 60, 170 60, 190 80" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeDasharray="5,3"/>
                                <text x="150" y="65" fontSize="10" fill="#0ea5e9" textAnchor="middle">implica</text>
                                
                                {/* Column 2: Continuidad */}
                                <g transform="translate(200, 40)">
                                    <circle cx="40" cy="15" r="15" fill="#0ea5e9"/>
                                    <path d="M28 20 Q 40 5, 52 20" stroke="white" strokeWidth="2" fill="none"/>
                                    <text x="40" y="45" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#0369a1">Continuidad</text>
                                    <text x="40" y="60" fontFamily="sans-serif" fontSize="8" textAnchor="middle" fill="#075985">¿Hay un camino sin saltos?</text>
                                    <foreignObject x="0" y="70" width="80" height="50">
                                        <p style={{fontSize: '7px', textAlign: 'center', color: '#0c4a6e'}}>El límite existe, f(c) existe, y son iguales. ¡Sin interrupciones!</p>
                                    </foreignObject>
                                </g>
                            </svg>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="flex justify-end mt-8">
                <Button onClick={() => navigateTo('Cierre')} className="inline-flex items-center gap-2">
                    Siguiente <ArrowRightIcon className="w-5 h-5" />
                </Button>
            </div>
        </SectionWrapper>
    );
};

export default Synthesis;