import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
function Login() {
    const { Login } = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        Login();
        navigate('/dashboard');
    }
    return (
        <div>
            <h2>Login Page</h2>
            <button
                onClick = {handleLogin}
            >
                Log In
            </button>
        </div>
    );
}

export default Login;