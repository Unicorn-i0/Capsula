import React, { useState, useEffect, useRef, useContext } from 'react';
import Card from '../common/Card.js';
import SectionWrapper from '../common/SectionWrapper.js';
import Button from '../common/Button.js';
import { ArrowRightIcon } from '../icons/Icons.js';
import { AppContext } from '../../App.js';

const quizPoints = [
    { time: 60, question: "¿Qué condición es fundamental para la definición de límite en un punto c?", options: ["Que f(c) exista", "El comportamiento de f(x) cerca de c", "Que la función sea polinómica"], answer: "El comportamiento de f(x) cerca de c", answered: false },
    { time: 150, question: "Si una función es continua en un intervalo cerrado, ¿qué teorema garantiza que alcanza un valor máximo y mínimo?", options: ["Teorema del Valor Intermedio", "Teorema de Rolle", "Teorema de Weierstrass (Existencia de Máximos y Mínimos)"], answer: "Teorema de Weierstrass (Existencia de Máximos y Mínimos)", answered: false },
];

const Development = () => {
    const { navigateTo } = useContext(AppContext);
    const playerRef = useRef(null);
    const [modalState, setModalState] = useState({ isOpen: false, question: null, feedback: null });
    const intervalRef = useRef(null);

    const onPlayerReady = (event) => {
        // Player is ready
    };

    const onPlayerStateChange = (event) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
            intervalRef.current = window.setInterval(() => {
                const currentTime = playerRef.current.getCurrentTime();
                const activeQuizPoint = quizPoints.find(p => Math.abs(p.time - currentTime) < 1 && !p.answered);

                if (activeQuizPoint) {
                    playerRef.current.pauseVideo();
                    activeQuizPoint.answered = true; 
                    setModalState({ isOpen: true, question: activeQuizPoint, feedback: null });
                    if(intervalRef.current) clearInterval(intervalRef.current);
                }
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
    };
    
    useEffect(() => {
        const loadPlayer = () => {
            if (window.YT && window.YT.Player) {
                playerRef.current = new window.YT.Player('youtube-player', {
                    height: '315',
                    width: '100%',
                    videoId: 'pYVVPqphPS0',
                    playerVars: {
                        'playsinline': 1
                    },
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            }
        };

        if (!window.YT) {
            window.onYouTubeIframeAPIReady = loadPlayer;
        } else {
            loadPlayer();
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);
    

    const handleAnswer = (option) => {
        if (option === modalState.question.answer) {
            setModalState(prev => ({ ...prev, feedback: "¡Correcto! Buen trabajo." }));
        } else {
            setModalState(prev => ({ ...prev, feedback: `Incorrecto. La respuesta correcta es: "${modalState.question.answer}"` }));
        }
    };

    const closeModal = () => {
        setModalState({ isOpen: false, question: null, feedback: null });
        playerRef.current.playVideo();
    };

    return (
        <SectionWrapper title="Desarrollo">
            <Card>
                <p className="text-center text-lg mb-6">
                    Observa el siguiente video. Se pausará en momentos clave para que respondas algunas preguntas y refuerces tu aprendizaje.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl border-4 border-cyan-300 dark:border-cyan-700">
                    <div id="youtube-player"></div>
                </div>
            </Card>

            {modalState.isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
                    <Card className="w-full max-w-lg">
                        <h3 className="text-xl font-bold mb-4">{modalState.question.question}</h3>
                        <div className="space-y-3">
                            {modalState.question.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option)}
                                    disabled={modalState.feedback !== null}
                                    className="w-full text-left p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-900 disabled:opacity-70 transition"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        {modalState.feedback && (
                            <div className={`mt-4 p-3 rounded-lg bg-opacity-30 text-center font-semibold animate-fade-in-up
                                ${modalState.feedback.startsWith('¡Correcto!') ? 'bg-green-500 text-green-800 dark:text-green-200' : 'bg-red-500 text-red-800 dark:text-red-200'}`}>
                                {modalState.feedback}
                            </div>
                        )}
                        <div className="text-right mt-6">
                            <Button onClick={closeModal} disabled={!modalState.feedback}>
                                Continuar Video
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
             <div className="flex justify-end mt-8">
                <Button onClick={() => navigateTo('Evaluación Formativa')} className="inline-flex items-center gap-2">
                    Siguiente <ArrowRightIcon className="w-5 h-5" />
                </Button>
            </div>
        </SectionWrapper>
    );
};

export default Development;