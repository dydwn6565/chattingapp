import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");

  return (
    <div className="App">
      {id ? <Dashboard id={id} /> : <Login setId={setId} />}
      {/* <Login setId={setId} /> */}
    </div>
  );
}

export default App;
