import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";
import Button from "@mui/material/Button";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();
  const submitHandler = (e) => {
    e.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  };

  function handleCheckboxChange(contactId) {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  }
  return (
    <div>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create Conversation
        </Typography>
        <form onSubmit={submitHandler}>
          {contacts.map((contact) => (
            <>
              <div style={{ marginTop: "10px" }}>
                <input
                  type="checkbox"
                  value={selectedContactIds.includes(contact.id)}
                  onChange={() => handleCheckboxChange(contact.id)}
                />
                <label>{contact.name}</label>
              </div>
            </>
          ))}
          <Button type="sumbit">Create</Button>
        </form>
      </Box>
    </div>
  );
}
