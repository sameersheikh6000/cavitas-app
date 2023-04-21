import React, { useState } from "react";
import Page from "../../../components/Page/Page";
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
        </header>
        <TicketsList />
      </section>
    </Page>
  );
};

export default SupportView;
