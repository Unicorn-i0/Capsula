import React from 'react';
import SectionWrapper from '../common/SectionWrapper.js';
import Card from '../common/Card.js';
import { CheckCircleIcon } from '../icons/Icons.js';

const Certificate = () => {
    return (
        <SectionWrapper title="¡Felicitaciones!">
            <Card className="text-center animate-fade-in-up">
                <div className="flex justify-center mb-6">
                    <CheckCircleIcon className="w-24 h-24 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                    Has completado la cápsula educativa
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    Has finalizado con éxito el recorrido por el Estándar 6: Continuidad y límites.
                </p>
                <p className="mt-4 text-md text-gray-600 dark:text-gray-400">
                    ¡Sigue aplicando estos conocimientos en tu labor docente!
                </p>
            </Card>
        </SectionWrapper>
    );
};

export default Certificate;