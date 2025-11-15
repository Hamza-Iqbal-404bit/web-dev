import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
function Dashboard() {
    const { Logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await Logout();
        navigate('/');
    }
    return (
        <div>
            <div className='navbar-container'>
                <h2>Dashboard</h2>
                <button 
                    className='logout-btn'
                    onClick = {handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Dashboard;