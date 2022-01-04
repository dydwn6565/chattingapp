import React from "react";
import { useContacts } from "../contexts/ContactsProvider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
export default function Contacts() {
  const { contacts } = useContacts();
  return (
    <>
      <List
        style={{ marginTop: "-20px" }}
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {contacts.map((contact) => (
          <>
            <ListItem key={contact.id}>{contact.name}</ListItem>
            <Divider />
          </>
        ))}
      </List>
    </>
  );
}
