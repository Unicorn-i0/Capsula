import React, { useState } from 'react';
import Button from '../common/Button.js';
import Card from '../common/Card.js';

// Fix: Define an interface for form errors to provide strong typing.
interface FormErrors {
    name?: string;
    email?: string;
}

const LoginForm = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rut, setRut] = useState('');
    // Fix: Use the FormErrors interface for the errors state.
    const [errors, setErrors] = useState<FormErrors>({});

    const validate = () => {
        // Fix: Explicitly type newErrors to allow adding name and email properties.
        const newErrors: FormErrors = {};
        if (!name.trim()) {
            newErrors.name = 'El nombre completo es requerido.';
        }
        if (!email.trim()) {
            newErrors.email = 'El correo electrónico es requerido.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'El correo electrónico no es válido.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onLogin({ name, email, rut });
        }
    };

    const getInputClass = (field) => {
        let baseClass = "w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 transition-colors";
        if (errors[field]) {
            return `${baseClass} border-red-500 focus:ring-red-500`;
        }
        return `${baseClass} border-gray-300 dark:border-gray-600 focus:ring-blue-500`;
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-md animate-fade-in-up">
                <h2 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    Bienvenido/a
                </h2>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                    Ingresa tus datos para generar tu certificado de aprobación al finalizar.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre Completo</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={getInputClass('name')}
                            placeholder="Ej: Ana Pérez"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={getInputClass('email')}
                            placeholder="ana.perez@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="rut" className="block text-sm font-medium mb-1">RUT (Opcional)</label>
                        <input
                            type="text"
                            id="rut"
                            value={rut}
                            onChange={(e) => setRut(e.target.value)}
                            className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="12.345.678-9"
                        />
                    </div>
                    <div className="pt-4">
                        <Button type="submit" className="w-full flex items-center justify-center">
                            Ingresar
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default LoginForm;