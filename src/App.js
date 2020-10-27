import React from "react";
import Weather from "./components/weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather cityName="Madrid" />
        <Weather cityName="Setif" />
        <Weather cityName="Berlin" />
      </div>
    </div>
  );
}

export default App