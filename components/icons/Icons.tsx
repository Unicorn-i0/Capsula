import React from 'react';

export const MenuIcon = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export const XIcon = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const BookOpenIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
    </svg>
);

export const ChatIcon = ({ className }) => (
     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
);

export const TrashIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
);

export const CheckCircleIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
);

export const XCircleIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
);

export const ArrowRightIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
);

export const AnimatedGraphIcon = ({ className }) => (
    <svg viewBox="0 0 200 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <style>
            {`
            .path {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw 5s ease-in-out forwards;
            }
            @keyframes draw {
                to {
                    stroke-dashoffset: 0;
                }
            }
            .dot {
                animation: move 5s ease-in-out forwards;
            }
            @keyframes move {
                from { motion-offset: 0%; }
                to { motion-offset: 100%; }
            }
            `}
        </style>
        {/* Axes */}
        <line x1="10" y1="90" x2="190" y2="90" stroke="currentColor" strokeWidth="1"/>
        <line x1="20" y1="10" x2="20" y2="95" stroke="currentColor" strokeWidth="1"/>
        
        {/* Asymptote */}
        <line x1="100" y1="10" x2="100" y2="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4"/>
        <text x="102" y="20" fontSize="8" fill="currentColor">c</text>

        {/* Function Curve */}
        <path id="curve" d="M30,80 C 50,20, 80,20, 95,40" stroke="#3498db" fill="none" strokeWidth="2" className="path" />
        <path d="M105,60 C 120,80, 150,80, 170,50" stroke="#3498db" fill="none" strokeWidth="2" className="path" style={{animationDelay: '1s'}} />
        
        {/* Approaching Point */}
        <circle r="3" fill="#e74c3c">
           <animateMotion dur="5s" repeatCount="1" fill="freeze" path="M30,80 C 50,20, 80,20, 95,40" />
        </circle>
        
        {/* Limit Point */}
        <circle cx="100" cy="45" r="3" stroke="#e74c3c" strokeWidth="1" fill="white" />
        <line x1="100" y1="45" x2="110" y2="45" stroke="#e74c3c" strokeWidth="0.5" strokeDasharray="2"/>
        <text x="112" y="48" fontSize="8" fill="#e74c3c">L</text>
    </svg>
);