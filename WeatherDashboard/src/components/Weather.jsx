import { useState, useEffect } from 'react'
import axios from 'axios';
import './Weather.css'
function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const handleGetWeather = async () => {
        const trimCity = city.trim();
        if (!trimCity) return;
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${trimCity}&appid=${API_KEY}&units=metric`);
            setWeather(response.data);
            setError('');
        }
        catch (err) {
            setError(`Failed to fetch weather data, Please try again. Error: ${err.message}`);
            setWeather(null);
        }
    }
    useEffect(() => {
        if (!city.trim()) return;
        const timer = setTimeout(() => {
            handleGetWeather();
        }, 2000);
        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[city])
    return (
        <div className='weather-container'>
            <h2>🌤️ Weather App</h2>
            <input
                className='city-input'
                type='text'
                placeholder='Enter city name'
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            {/* <div className='weather-button-container'>
                <button
                    className='get-weather-button'
                    onClick={handleGetWeather}
                >
                    Get Weather
                </button>
            </div> */}
            {error && <p className='error-message'>{error}</p>}

            {weather && (
                <div className='weather-info-container'>
                    <h3>
                        {weather.name}, {weather.sys.country}
                    </h3>
                    <p>🌡️ Temperature: {weather.main.temp}°C</p>
                    <p>🤗 Feels like: {weather.main.feels_like}°C</p>
                    <p>🔻 Min: {weather.main.temp_min}°C | 🔺 Max: {weather.main.temp_max}°C</p>
                    <p>💧 Humidity: {weather.main.humidity}%</p>
                    <p>🌬️ Wind: {weather.wind.speed} m/s, direction {weather.wind.deg}°</p>
                    <p>🗒️ Condition: {weather.weather[0].description}</p>
                </div>
            )}

        </div>
    )
}

export default Weather