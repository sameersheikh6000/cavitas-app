import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Message from "./Message";
import { useNavigate } from "react-router-dom";
import useClientInsurance from "../../../../hooks/useClientInsurance";
import AlertMessage from "../../../../components/SnackbarMessages/AlertMessage";

function DeleteAccountForm() {
  const navigate = useNavigate();
  const { deleteAccountRequest } = useClientInsurance();
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [openMessageModal, setOpenMessageModal] =  useState(false);
  const [deleteAccountForm, setDeleteAccountForm] = useState({
    full_name: "",
    email: "",
    details: "",
    status: 3,
    form_type: 4,
    pesel_number: 0,
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

  const openAfterDeleteMessageModal = () => setOpenMessageModal(true);
  const closeAfterDeleteMessageModal = () => setOpenMessageModal(false);

  const handleSubmit = async () => {
    const response = await deleteAccountRequest(deleteAccountForm)
    if(response?.status < 300) {
      openAfterDeleteMessageModal()
      setTimeout(() => {
        closeAfterDeleteMessageModal();
        handleClose()
      }, 5000);
    }
    else if(response?.status > 300) {
      setErrorMessage(response?.message)
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  }

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  return (
    <div>
      <AlertMessage errorMessage={errorMessage}/>
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
                        setDeleteAccountForm({
                          ...deleteAccountForm,
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
                        setDeleteAccountForm({
                          ...deleteAccountForm,
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
                      onChange={(e) =>
                        setDeleteAccountForm({
                          ...deleteAccountForm,
                          pesel_number: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setDeleteAccountForm({
                          ...deleteAccountForm,
                          details: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className='landingPage__healthyTeeth__container'
         >
       <Button
        style={{
          marginLeft: "250px",
          borderRadius: "1rem",
          marginTop: "0px",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginTop: "0px",
        }}
        onClick={() => handleSubmit()}
       >
        {t("Uploadinsuredperson.Submitform")}
       </Button>
       <Message  openMessageModal={openMessageModal} closeAfterDeleteMessageModal={closeAfterDeleteMessageModal}/>
     </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteAccountForm;



