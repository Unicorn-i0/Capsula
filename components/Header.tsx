import React, { useState, useContext } from 'react';
import { AppContext } from '../App.js';
import { SECTIONS } from '../constants.js';
import { MenuIcon, XIcon, BookOpenIcon } from './icons/Icons.js';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { navigateTo, currentSection } = useContext(AppContext);
    
    const navSections = SECTIONS.filter(s => s !== 'Formulario');
    const currentIndex = navSections.indexOf(currentSection);
    const progress = currentIndex >= 0 ? ((currentIndex + 1) / navSections.length) * 100 : 0;

    const handleNavigation = (section) => {
        navigateTo(section);
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <BookOpenIcon className="h-8 w-8 text-blue-500" />
                        <h1 className="ml-3 text-xl font-bold text-gray-800 dark:text-white">Continuidad y Límites</h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navSections.slice(1, 6).map((section) => (
                                <button
                                    key={section}
                                    onClick={() => handleNavigation(section)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                        currentSection === section
                                            ? 'bg-blue-500 text-white shadow-lg'
                                            : 'text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {section}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navSections.map((section) => (
                            <button
                                key={section}
                                onClick={() => handleNavigation(section)}
                                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                                    currentSection === section
                                        ? 'bg-blue-500 text-white'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
                                }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;