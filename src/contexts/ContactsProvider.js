import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContactContext = React.createContext();

export function useContacts() {
  return useContext(ContactContext);
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  function createContacts({ id, name }) {
    setContacts((preveContact) => {
      return [...preveContact, { id, name }];
    });
  }
  return (
    <ContactContext.Provider value={{ contacts, createContacts }}>
      {children}
    </ContactContext.Provider>
  );
}
