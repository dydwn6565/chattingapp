import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
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
