import React, { useState } from "react";
import Page from "../../../components/Page/Page";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TicketsList from "./TicketingSystemComponent/MySupportTickets/TicketsList";

const SupportView = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Page>
      <section className="supportView">
        <header className="supportView__header">
          <div className="supportView__header__iconBox">
            <EmailOutlinedIcon className="supportView__header__iconBox__icon" />
            <p>SUPPORT TICKETS</p>
          </div>
          <div className="insuredClientView__header__right">
            <Link to="/SubmitNewTickets">
            <Button
                color="error"
                variant="outlined"
                size="small"
                style={{
                  color: "white !important",
                  marginLeft: "15px",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  textTransform: "none",
                }}
              >
                Submit New Ticket
              </Button>
            </Link>
          </div>
        </header>
        <TicketsList />
      </section>
    </Page>
  );
};

export default SupportView;
