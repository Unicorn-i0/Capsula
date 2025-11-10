import React, { useContext } from 'react';
import Card from '../common/Card.js';
import SectionWrapper from '../common/SectionWrapper.js';
import Button from '../common/Button.js';
import { ArrowRightIcon } from '../icons/Icons.js';
import { AppContext } from '../../App.js';

const Activation = () => {
    const { navigateTo } = useContext(AppContext);

    return (
        <SectionWrapper title="Activación de Conocimientos Previos">
            <Card>
                <p className="text-center text-lg mb-6">
                    A continuación, te invitamos a participar en una actividad para recordar algunos conceptos clave sobre límites y continuidad. ¡Pon a prueba tus conocimientos!
                </p>
                <div className="aspect-w-16 aspect-h-9 border-4 border-blue-300 dark:border-blue-700 rounded-lg overflow-hidden shadow-2xl">
                     <iframe 
                        allow="fullscreen; autoplay;" 
                        allowFullScreen
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        src="https://es.educaplay.com/juego/26549520-limites_y_continuidad.html"
                        className="w-full h-[690px]"
                        > 
                    </iframe>
                </div>
            </Card>
            <div className="flex justify-end mt-8">
                <Button onClick={() => navigateTo('Desarrollo')} className="inline-flex items-center gap-2">
                    Siguiente <ArrowRightIcon className="w-5 h-5" />
                </Button>
            </div>
        </SectionWrapper>
    );
};

export default Activation;