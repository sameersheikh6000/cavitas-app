import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Padding } from "@mui/icons-material";

function Message() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  return (
    <div>
      <Button
        style={{
          marginLeft: "250px",
          borderRadius: "1rem",
          marginTop: "0px",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginTop: "0px",
        }}
        onClick={() => handleOpen()}
      >
        {t("Uploadinsuredperson.Submitform")}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
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
            {/* <Button
              style={{  borderRadius: "1rem", marginRight:"406", marginTop:"1.5rem" }}
              className="authentication__container__formContainer__form__loginButton_Form"
              type="submit"
            >
              Submit
            </Button> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Message;
