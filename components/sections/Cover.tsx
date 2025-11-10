import React, { useContext } from 'react';
import { AppContext } from '../../App.js';
import Button from '../common/Button.js';
import SectionWrapper from '../common/SectionWrapper.js';
import { AnimatedGraphIcon, ArrowRightIcon } from '../icons/Icons.js';

const Cover = () => {
    const { navigateTo, userData } = useContext(AppContext);

    return (
        <SectionWrapper title="Estándar 6: Continuidad y límites">
            <div className="text-center space-y-8">
                <p className="text-xl text-gray-700 dark:text-gray-300">
                    Bienvenido/a, <span className="font-bold text-blue-500">{userData?.name}</span>.
                </p>
                <div className="flex justify-center">
                   <AnimatedGraphIcon className="w-full max-w-md h-auto text-gray-700 dark:text-gray-400" />
                </div>
                <p className="text-lg max-w-3xl mx-auto text-justify">
                    Esta cápsula educativa te guiará a través de los conceptos fundamentales de continuidad y límites, herramientas esenciales en el análisis de funciones. Explorarás definiciones formales, teoremas clave y su aplicación pedagógica en el aula.
                </p>
                <div>
                    <Button onClick={() => navigateTo('Introducción')} className="inline-flex items-center gap-2">
                        Siguiente <ArrowRightIcon className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Cover;