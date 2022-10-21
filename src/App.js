import logo from "./logo.svg";
import "./App.css";
import { useFlag } from "@unleash/proxy-client-react";

function App() {
  const enabled = useFlag("s2s-toggle");
  return (
    <div className="App">
      <header className="App-header">
        {enabled ? (
          <h1>S2S toggle enabled</h1>
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
      </header>
    </div>
  );
}

export default App;
