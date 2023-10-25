import './App.css';
import Weather from "./weather";

function App() {
  return (
    <div className="project">
          <Weather />
          <div className="link">
            <p>This project was coded by Leire Valencia 🌙 and is 
              <a href="https://github.com/leirevalencia/weather-react" target="_blank" rel="noreferrer"> open-source on GitHub 🐱</a>
            </p>
          </div>
    </div>
  );
}

export default App;
