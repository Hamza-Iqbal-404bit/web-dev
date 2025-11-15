import { useTheme } from '../contexts/ThemeContext';
import './Home.css';

function Home() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <h1>{theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default Home;