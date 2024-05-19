import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);

    const register = async (email, password) => {
        // Simulando una llamada a un servicio de registro
        try {
            // Aquí iría la lógica para registrar el usuario, por ejemplo:
            // await someRegisterService(email, password);
            console.log('Registering user:', email);
            console.log('password:', password);
            setIsAuthenticated(true);
        } catch (error) {
            // Manejar el error de registro
            console.error('Error registering user:', error);
            throw new Error('Error registrando usuario');
        }
    };

    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};