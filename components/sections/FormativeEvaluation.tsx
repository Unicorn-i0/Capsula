import React, { useContext } from 'react';
import Card from '../common/Card.js';
import SectionWrapper from '../common/SectionWrapper.js';
import Button from '../common/Button.js';
import { ArrowRightIcon } from '../icons/Icons.js';
import { AppContext } from '../../App.js';

const FormativeEvaluation = () => {
    const { navigateTo } = useContext(AppContext);

    return (
        <SectionWrapper title="Evaluación Formativa">
            <Card>
                <p className="text-center text-lg mb-6">
                    Es hora de una evaluación formativa. Esta actividad no afectará tu calificación final, pero te ayudará a medir tu comprensión hasta ahora.
                </p>
                <div className="w-full flex flex-col gap-2 min-h-[635px] border-4 border-blue-300 dark:border-blue-700 rounded-lg overflow-hidden shadow-2xl p-2">
                    <iframe 
                        src="https://wayground.com/embed/quiz/69124ca0bf13d6a8b44a8fa4" 
                        title="Evaluación Formativa - Wayground" 
                        className="flex-1" 
                        frameBorder="0" 
                        allowFullScreen>
                    </iframe>
                    <a href="https://wayground.com/admin?source=embedFrame" target="_blank" rel="noopener noreferrer" className="text-center text-xs text-gray-500 hover:text-blue-500">
                        Explora más en Wayground.
                    </a>
                </div>
            </Card>
            <div className="flex justify-end mt-8">
                <Button onClick={() => navigateTo('Evaluación')} className="inline-flex items-center gap-2">
                    Siguiente <ArrowRightIcon className="w-5 h-5" />
                </Button>
            </div>
        </SectionWrapper>
    );
};

export default FormativeEvaluation;