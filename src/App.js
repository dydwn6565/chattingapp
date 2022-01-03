import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import UseLocalStorage from "./hooks/UseLocalStorage";

function App() {
  // const [id, setId] = UseLocalStorage();
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
