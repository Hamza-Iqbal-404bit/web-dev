import { ThemeProvider } from './providers/ThemeProvider';
import Home from './components/Home';
import './App.css'

function App() {
  

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
