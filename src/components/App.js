import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import { ContactsProvider } from "../contexts/ContactsProvider";
function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  );

  return (
    <div className="App">
      {id ? dashboard : <Login setId={setId} />}
      {/* <Login setId={setId} /> */}
    </div>
  );
}

export default App;
