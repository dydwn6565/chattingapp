import React, { useRef } from "react";
import { useContacts } from "../contexts/ContactsProvider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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

export default function NewContactModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContacts } = useContacts();

  function handleSubmit(e) {
    e.preventDefault();

    createContacts(idRef.current.value, nameRef.current.value);
    closeModal();
  }
  return (
    <div>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create Contact
        </Typography>
        <form onSubmit={handleSubmit}>
          <label>Id</label>
          <input type="text" ref={idRef} />
          <label>Name</label>
          <input type="text" ref={nameRef} />
          <Button type="submit">Create</Button>
        </form>
      </Box>
    </div>
  );
}
