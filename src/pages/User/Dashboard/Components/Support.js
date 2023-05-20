import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useNavigate } from "react-router-dom";
import useClientInsurance from "../../../../hooks/useClientInsurance";
import AlertMessage from "../../../../components/SnackbarMessages/AlertMessage";
const Support = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, []);
  const { getAllClientInsurance } = useClientInsurance();
  const navigate = useNavigate();
  const [clientInfos, setClientInfos] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const getAllClientInfos = async () => {
    const response = await getAllClientInsurance();
    debugger;
    if (response.status < 300) {
      console.log(response);
      setClientInfos(response?.client_infos);
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  };
  useEffect(() => {
    getAllClientInfos();
  }, []);

  return (
    <>
      <AlertMessage errorMessage={errorMessage} />
      <section className="dashboard__container__content__support">
        <header className="dashboard__container__content__support__header">
          <div className="dashboard__container__content__support__header__iconBox">
            <EmailOutlinedIcon className="dashboard__container__content__support__header__iconBox__icon" />
            <p>{t("Pannel_Dashboard_Supporttickets.Supporttitle")}</p>
          </div>
          <Button size="small" onClick={() => navigate("/support/view")}>
            {t("Pannel_Dashboard_insuredperson.View")}
          </Button>
        </header>
        {clientInfos.length > 0 ? (
          <div className="dashboard__container__content__support__details">
            <table className="dashboard__container__content__support__details__table">
              <thead>
                <tr>
                  <th>{t("Pannel_Dashboard_Supporttickets.Ticketnumber")}</th>
                  <th>{t("Pannel_Dashboard_Supporttickets.Status")}</th>
                  <th>{t("Pannel_Dashboard_Supporttickets.Lastupdate")}</th>
                  <th>{t("Pannel_Dashboard_Supporttickets.Openmessage")}</th>
                </tr>
              </thead>
            </table>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                marginTop: "10%",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {t("Pannel_Dashboard_Supporttickets.Noticket")}
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Support;
