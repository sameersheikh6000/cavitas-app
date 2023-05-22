import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../config/helpers/i18n';
import Page from "../../../components/Page/Page";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TicketsList from "./TicketingSystemComponent/MySupportTickets/TicketsList";

const SupportView = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
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
            <p>{t("Pannel_Dashboard_Supporttickets.Supporttitle")}</p>
          </div>
          <div className="insuredClientView__header__right">
          <Link to={`/SubmitNewTickets/${lang == "pl" ? "pl" : "en"}`}>
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
                  {t("MysupportTickets.Submitnewticket")}
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
