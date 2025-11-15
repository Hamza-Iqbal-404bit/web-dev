import { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const Login = () => setIsAuthenticated(true);
        
    const Logout = () => {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;