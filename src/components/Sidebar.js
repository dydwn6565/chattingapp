import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import "./Sidebar.css";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
  const [value, setValue] = React.useState(0);
  const [activekey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activekey === CONVERSATIONS_KEY;
  function closeModal() {
    setModalOpen(false);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="side_bar">
      <Box
        sx={{ width: "200px" }}
        activekey={activekey}
        onSelect={setActiveKey}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              onClick={() => setActiveKey(CONVERSATIONS_KEY)}
              label="Item One"
              {...a11yProps(0)}
            />
            <Tab
              onClick={() => setActiveKey(CONTACTS_KEY)}
              label="Item Two"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <div className="sidebar_box">
          <TabPanel value={value} index={0}>
            <Conversations />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Contacts />
          </TabPanel>
        </div>
        <div className="sidebar_id">
          Your Id:
          <span>{id}</span>
        </div>
        <Button
          className="sidebar_new_button"
          variant="contained"
          onClick={() => setModalOpen(true)}
        >
          New {conversationsOpen ? "Conversation" : "Contact"}
        </Button>
        <Modal
          open={modalOpen}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {conversationsOpen ? (
            <NewConversationModal closeModal={closeModal} />
          ) : (
            <NewContactModal cloaseModal={closeModal} />
          )}
          {/* <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box> */}
        </Modal>
      </Box>
    </div>
  );
}
