import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Welcome, User</h2>
            <button
                className='btn dashboard-btn'
                onClick = {() => navigate('/dashboard')}
            >
                Dashboard
            </button>
            <button
                className='btn login-btn'
                onClick = {() => navigate('/login')}
            >
                Login
            </button>
        </div>
    );
}

export default Home;