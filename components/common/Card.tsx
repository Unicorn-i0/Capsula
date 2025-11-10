import React from 'react';

const Card = ({ children, className = '' }) => {
    return (
        <div
            className={`bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;