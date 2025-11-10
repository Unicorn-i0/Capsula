import React from 'react';

const SectionWrapper = ({ title, children }) => {
    return (
        <section className="animate-fade-in-up space-y-8">
            <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 pb-2">
                {title}
            </h2>
            {children}
        </section>
    );
};

export default SectionWrapper;