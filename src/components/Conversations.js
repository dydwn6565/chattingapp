import React from "react";
import { useConversations } from "../contexts/ConversationsProvider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

export default function Conversations() {
  const { conversations, selectedConversationIndex } = useConversations();

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
        {conversations.map((conversation, index) => (
          <>
            <ListItem
              button
              key={index}
              onClick={() => selectedConversationIndex(index)}
            >
              {conversation.recipients.map((r) => r.name).join(",")}
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </>
  );
}
