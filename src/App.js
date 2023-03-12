import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tampa" />

        <footer>
          👩🏻‍💻{" "}
          <a
            href="https://github.com/bnardi99/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Brenda Nardi
          <div>
            ⛅ Using the{" "}
            <a
              href="https://openweathermap.org/current"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeather API
            </a>
            <div>
              🌐 Hosted on{" "}
              <a
                href="https://react-weather-app-bn.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlify
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
