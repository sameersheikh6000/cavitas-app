import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import { useNavigate } from "react-router-dom";
import useCavitasDocs from "../../../../hooks/useCavitasDocs";
const CavitasDocs = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  const navigate = useNavigate();

  const { getCavitasDocs } = useCavitasDocs();
  const [errorMessage, setErrorMessage] = useState(null);
  const [cavitasDocs, setCavitasDocs] = useState([]);
  const [successMessage, setSuccessMessage] = useState();

  const fetchCavitasDocs = async () => {
    ;
    const response = await getCavitasDocs();
    ;
    if (response?.status < 300) {
      setCavitasDocs(response?.cavitas_documents);
    } else if (response?.status > 300) {
      setErrorMessage(response.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  useEffect(() => {
    fetchCavitasDocs();
  }, []);

  return (
    <section className="dashboard__container__content__cavitasDocs">
      <header className="dashboard__container__content__cavitasDocs__header">
        <div className="dashboard__container__content__cavitasDocs__header__iconBox">
          <TextSnippetOutlinedIcon className="dashboard__container__content__cavitasDocs__header__iconBox__icon" />
          <p>{t("Pannel_Dashboard.Cavitasdocuments")}</p>
        </div>
        <Button size="small" onClick={() => navigate(`/cavitasdocs/view/${lang === "pl" ? lang : "en"}`)}>
          {t("Pannel_Dashboard_Alldocuments.Alldocuments")}
        </Button>
      </header>
      <div className="dashboard__container__content__cavitasDocs__details">
        <table className="dashboard__container__content__cavitasDocs__details__table">
          <thead>
            <tr>
              <th>{t("Pannel_Dashboard_Alldocuments.Documenttype")}</th>
              <th>{t("Pannel_Dashboard_Alldocuments.Validfrom")}</th>
            </tr>
          </thead>
          <tbody>
            {/* {cavitasDocs?.map((row, index) => (
              <tr>
                <td>{row?.title}</td>
                <td>{row?.valid_date}</td>
              </tr>
            ))} */}
            <tr>
              <td>{t("Cavitasdocuments.card1")}</td>
              <td>{t("Cavitasdocuments.date")}</td>
            </tr>
            <tr>
              <td>{t("Cavitasdocuments.card2")}</td>
              <td>{t("Cavitasdocuments.date")}</td>
            </tr>
            <tr>
              <td>{t("Cavitasdocuments.card3")}</td>
              <td>{t("Cavitasdocuments.date")}</td>
            </tr>
            <tr>
              <td>{t("Cavitasdocuments.card4")}</td>
              <td>{t("Cavitasdocuments.date")}</td>
            </tr>
            <tr>
              <td>{t("Cavitasdocuments.card5")}</td>
              <td>{t("Cavitasdocuments.date")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CavitasDocs;
