import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Message from "./Message";

function DeleteAccountForm() {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    full_name: "",
    email: "",
    details: "",
    identity: "",
    request: "",
    status: 3,
    form_type: 0,
  });
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
      <Button style={{ borderRadius: "1rem" }} onClick={() => handleOpen()}>
      {t("Delete_account.Proceedtodelete")}
            </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="uploadClient__container__body__participation">
            <h2>{t("contactform.contactfrom_title")}</h2>
            <h1 style={{ color: "#dd3333 " }}>{t("Delete_account.Deleteaccount")}</h1>
            {message && <span style={{ color: "green" }}>{message}</span>}
            {errorMessage && (
              <span style={{ color: "red" }}>{errorMessage}</span>
            )}
            <div className="userProfileView__container__details">
              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <input
                      type="text"
                      placeholder={`${t("get24contactform.firstandlastname")}*`}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          full_name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="E-mail*"
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                    />

                  </div>
                  <div style={{ marginTop: "5px" }}>
                    <input
                      type="text"
                      placeholder={`${t("Pannel_Dashboard_Userprofile.Peselnumber")}*`}
                      name="company_pasel_number"
                      required={true}
                    />
                  </div>
                </div>
              </div>

              <div className="userProfileView__container__details__detailsBox">
                <div className="userProfileView__container__details__detailsBox__feilds__container">
                  <div>
                    <textarea
                      style={{ width: "200%" }}
                      className="textarea"
                      placeholder={`${t("contactform.texthere")}`}
                      rows={5}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className='landingPage__healthyTeeth__container'
         >
       <Message  />
     </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteAccountForm;



