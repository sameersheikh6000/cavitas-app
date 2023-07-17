import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Message = ({openMessageModal, closeAfterDeleteMessageModal}) => {
  const currentUrl = window.location.href;
  let lang = currentUrl.split("/").pop();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 750,
    borderRadius: 10,
    bgcolor: "#edf4f4",
    boxShadow: 14,
    p: 4,
  };


  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  return (
    <div>
      <Modal
        open={openMessageModal}
        onClose={closeAfterDeleteMessageModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="uploadClient__container__body__participation"
            style={{
              fontSize: "13px",
              alignItems: "center",
              padding: "40px",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          >
            <h2>{t("Delete_account.Message_1")}</h2>
            <div
              style={{
                fontSize: "15px",
                alignItems: "center",
                padding: "12px",
                marginTop: "1rem",
                borderRadius: "35px",
                border: "1px solid black",
              }}
            >
              <p>{t("Delete_account.Message_2")}</p>
              <br />
              <p>{t("Delete_account.Message_3")}</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                width: "100%",
              }}
            >
              <Button
                style={{
                  borderRadius: "1rem",
                  marginTop: "10px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
                className="authentication__container__formContainer__form__loginButton_Form"
                type="submit"
                onClick={() => navigate(`/member-signin/${lang === 'pl' ? 'pl' : 'en'}`)}
              >
                {t("Member.Member_landingPage_btn1")}
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Message;
