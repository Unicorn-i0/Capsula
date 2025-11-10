import React from 'react';
import { ChatIcon } from './icons/Icons.js';

const Chatbot = () => {
    return (
        <button
            title="Abrir chatbot de ayuda"
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition transform hover:scale-110"
        >
            <ChatIcon className="h-8 w-8" />
        </button>
    );
};

export default Chatbot;