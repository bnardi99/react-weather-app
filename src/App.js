import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tampa" />
        <footer>
          This project was coded by Brenda Nardi and is {""}
          <a
            href="https://github.com/bnardi99/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
