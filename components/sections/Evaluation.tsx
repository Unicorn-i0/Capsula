import React, { useState, useEffect, useCallback, useContext } from 'react';
import { EVALUATION_QUESTIONS } from '../../constants.js';
import Button from '../common/Button.js';
import Card from '../common/Card.js';
import SectionWrapper from '../common/SectionWrapper.js';
import { CheckCircleIcon, XCircleIcon, ArrowRightIcon } from '../icons/Icons.js';
import { AppContext } from '../../App.js';

const TIME_LIMIT = 30 * 60; // 30 minutes in seconds

const Evaluation = ({ onComplete, attemptsLeft }) => {
    const { navigateTo } = useContext(AppContext);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answers, setAnswers] = useState({});
    const [showFeedback, setShowFeedback] = useState(false);
    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
    const [quizFinished, setQuizFinished] = useState(false);
    const [score, setScore] = useState(0);

    const startQuiz = useCallback(() => {
        // Shuffle questions for a new attempt
        const shuffled = [...EVALUATION_QUESTIONS].sort(() => 0.5 - Math.random());
        setQuestions(shuffled.slice(0, 5)); // Use 5 questions as specified.
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setAnswers({});
        setShowFeedback(false);
        setTimeLeft(TIME_LIMIT);
        setQuizFinished(false);
        setScore(0);
    }, []);

    useEffect(() => {
        startQuiz();
    }, [startQuiz]);

    useEffect(() => {
        if (quizFinished || attemptsLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    finishQuiz();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [quizFinished, attemptsLeft]);

    const handleAnswerSelect = (option) => {
        setSelectedAnswer(option);
        setShowFeedback(true);
    };

    const handleNextQuestion = () => {
        setAnswers(prev => ({ ...prev, [questions[currentQuestionIndex].id]: selectedAnswer }));
        
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowFeedback(false);
        } else {
            finishQuiz();
        }
    };
    
    const finishQuiz = () => {
        let finalAnswers = answers;
        if(selectedAnswer && !quizFinished){
            finalAnswers = {...answers, [questions[currentQuestionIndex].id]: selectedAnswer}
        }
        
        let correctAnswers = 0;
        questions.forEach(q => {
            if (finalAnswers[q.id] === q.correctAnswer) {
                correctAnswers++;
            }
        });
        const finalScore = (correctAnswers / questions.length) * 100;
        setScore(finalScore);
        setQuizFinished(true);
        onComplete(finalScore, finalScore >= 70);
    };

    if (attemptsLeft <= 0 && !quizFinished) {
        return (
            <SectionWrapper title="Evaluación Final">
                <Card className="text-center">
                    <h3 className="text-2xl font-bold text-red-500 mb-4">Sin Intentos Restantes</h3>
                    <p>Has utilizado todos tus intentos para esta evaluación.</p>
                </Card>
            </SectionWrapper>
        );
    }
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    if (quizFinished) {
        const passed = score >= 70;
        return (
             <SectionWrapper title="Resultados de la Evaluación">
                <Card className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Evaluación Completada</h3>
                    <p className="text-5xl font-bold my-4" style={{color: passed ? '#22c55e' : '#ef4444'}}>{score.toFixed(1)}%</p>
                    {passed ? (
                        <div>
                            <p className="text-green-500 mb-6">¡Felicidades! Has aprobado la evaluación.</p>
                            <Button onClick={() => navigateTo('Síntesis')} className="inline-flex items-center gap-2">
                                Siguiente <ArrowRightIcon className="w-5 h-5" />
                            </Button>
                        </div>
                    ) : (
                        <div>
                           <p className="text-red-500">No has alcanzado el 70% necesario para aprobar.</p>
                           {attemptsLeft > 0 ? (
                               <Button onClick={startQuiz} className="mt-6">Intentar de Nuevo ({attemptsLeft} {attemptsLeft === 1 ? 'intento restante' : 'intentos restantes'})</Button>
                           ) : (
                               <p className="mt-4 font-bold text-red-600">No te quedan más intentos.</p>
                           )}
                        </div>
                    )}
                </Card>
            </SectionWrapper>
        )
    }

    if(questions.length === 0) return <div>Cargando...</div>;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    return (
        <SectionWrapper title="Evaluación Final">
            <Card>
                <div className="flex justify-between items-center mb-4">
                    <p className="font-semibold">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
                    <div className="text-lg font-bold px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">{formatTime(timeLeft)}</div>
                    <p className="font-semibold">Intentos restantes: {attemptsLeft}</p>
                </div>
                <div className="my-6">
                    <h4 className="text-xl font-semibold mb-6 text-justify">{currentQuestion.text}</h4>
                    <div className="space-y-3">
                        {currentQuestion.options.map((option, i) => {
                            const isSelected = selectedAnswer === option;
                            let buttonClass = 'bg-gray-200 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-900';
                            if (showFeedback && isSelected) {
                                buttonClass = isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
                            } else if (showFeedback && option === currentQuestion.correctAnswer) {
                                buttonClass = 'bg-green-500 text-white';
                            }
                            
                            return (
                                <button
                                    key={i}
                                    onClick={() => handleAnswerSelect(option)}
                                    disabled={showFeedback}
                                    className={`w-full text-left p-4 rounded-lg transition ${buttonClass} flex justify-between items-center`}
                                >
                                    <span>{option}</span>
                                    {showFeedback && isSelected && (isCorrect ? <CheckCircleIcon className="w-6 h-6"/> : <XCircleIcon className="w-6 h-6"/>) }
                                </button>
                            );
                        })}
                    </div>
                </div>
                {showFeedback && (
                    <div className="mt-4 p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 animate-fade-in text-justify">
                        <p className="font-bold">Retroalimentación:</p>
                        <p>{currentQuestion.feedback}</p>
                    </div>
                )}
                <div className="text-right mt-6">
                    <Button onClick={handleNextQuestion} disabled={!showFeedback}>
                        {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Evaluación'}
                    </Button>
                </div>
            </Card>
        </SectionWrapper>
    );
};

export default Evaluation;