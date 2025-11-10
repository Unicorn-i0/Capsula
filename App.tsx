import React, { useState, useEffect, createContext, useCallback } from 'react';
import { SECTIONS } from './constants.js';

import LoginForm from './components/sections/LoginForm.js';
import Cover from './components/sections/Cover.js';
import Introduction from './components/sections/Introduction.js';
import Activation from './components/sections/Activation.js';
import Development from './components/sections/Development.js';
import FormativeEvaluation from './components/sections/FormativeEvaluation.js';
import Evaluation from './components/sections/Evaluation.js';
import Synthesis from './components/sections/Synthesis.js';
import Closure from './components/sections/Closure.js';
import Certificate from './components/sections/Certificate.js';
import Header from './components/Header.js';
import DeleteDataButton from './components/DeleteDataButton.js';

export const AppContext = createContext(null);

const App = () => {
    const [userData, setUserData] = useState(null);
    const [currentSection, setCurrentSection] = useState(SECTIONS[0]);
    const [evaluationState, setEvaluationState] = useState({
        passed: false,
        score: 0,
        attempts: 0,
    });

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        const storedEvalState = localStorage.getItem('evaluationState');
        
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUserData(parsedUserData);
            
            if (storedEvalState) {
                const parsedEvalState = JSON.parse(storedEvalState);
                setEvaluationState(parsedEvalState);
                if(parsedEvalState.passed) {
                    setCurrentSection('Certificado');
                } else {
                    setCurrentSection('Portada');
                }
            } else {
                setCurrentSection('Portada');
            }
        } else {
            setCurrentSection('Formulario');
        }
    }, []);

    const handleLogin = (data) => {
        setUserData(data);
        localStorage.setItem('userData', JSON.stringify(data));
        setCurrentSection('Portada');
    };

    const navigateTo = useCallback((section) => {
        setCurrentSection(section);
        window.scrollTo(0, 0);
    }, []);
    
    const handleEvaluationComplete = (score, passed) => {
        const newState = {
            ...evaluationState,
            score,
            passed,
            attempts: evaluationState.attempts + 1,
        };
        setEvaluationState(newState);
        localStorage.setItem('evaluationState', JSON.stringify(newState));
    };
    
    const resetData = () => {
        localStorage.clear();
        setUserData(null);
        setEvaluationState({ passed: false, score: 0, attempts: 0 });
        setCurrentSection('Formulario');
    };

    const renderSection = () => {
        switch (currentSection) {
            case 'Formulario':
                return <LoginForm onLogin={handleLogin} />;
            case 'Portada':
                return <Cover />;
            case 'Introducción':
                return <Introduction />;
            case 'Activación':
                return <Activation />;
            case 'Desarrollo':
                return <Development />;
            case 'Evaluación Formativa':
                return <FormativeEvaluation />;
            case 'Evaluación':
                return <Evaluation onComplete={handleEvaluationComplete} attemptsLeft={3 - evaluationState.attempts}/>;
            case 'Síntesis':
                return <Synthesis />;
            case 'Cierre':
                return <Closure />;
            case 'Certificado':
                return <Certificate />;
            default:
                return <Cover />;
        }
    };
    
    const appContextValue = {
        userData,
        evaluationState,
        navigateTo,
        currentSection
    };

    if (!userData && currentSection !== 'Formulario') {
        return (
             <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white flex items-center justify-center">
                <LoginForm onLogin={handleLogin} />
            </div>
        )
    }

    return (
        <AppContext.Provider value={appContextValue}>
            <div className="min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-500">
                {currentSection !== 'Formulario' && <Header />}
                <main className="pt-20 pb-16 px-4 md:px-8">
                    <div className="max-w-5xl mx-auto">
                        {renderSection()}
                    </div>
                </main>
                {currentSection !== 'Formulario' && <DeleteDataButton onReset={resetData} />}
            </div>
        </AppContext.Provider>
    );
};

export default App;