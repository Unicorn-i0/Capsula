import React from 'react';
import { TrashIcon } from './icons/Icons.js';

const DeleteDataButton = ({ onReset }) => {
    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que quieres borrar todos tus datos? Esta acción es irreversible y reiniciará tu progreso.')) {
            onReset();
        }
    };

    return (
        <button
            onClick={handleDelete}
            title="Borrar todos los datos"
            className="fixed bottom-24 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition transform hover:scale-110"
        >
            <TrashIcon className="h-6 w-6" />
        </button>
    );
};

export default DeleteDataButton;