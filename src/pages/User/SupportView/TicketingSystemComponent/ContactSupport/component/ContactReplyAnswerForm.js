import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../../../config/helpers/i18n';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useReplyForm from "../../../../../../hooks/useReplyForm";
import { USER_STORAGE_KEY } from "../../../../../../config/helpers/variables";

function ContactReplyAnswerForm({

  contact_reply,
  setErrorMessage,
  setSuccessMessage,
}) {
  // const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  // const { createContactReplyAnswer } = useReplyForm();
  // const [contactReplyAnswer, setContactReplyAnswer] = useState({
  //   answer_text: "",
  //   contact_reply_id: contact_reply?.id,
  //   attachment: "",
  //   answeree: user?.data?.email,
  // });
  // const currentUrl = window.location.href;
  // const lang = currentUrl.split("/").pop();
  // const { t } = useTranslation();

  // useEffect(() => {
  //   const currentUrl = window.location.href;
  //   let lang = currentUrl.split("/").pop();
  //   lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  // }, [])
  // const [open, setOpen] = useState(false);
  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 600,
  //   borderRadius: 5,
  //   bgcolor: "#edf4f4",
  //   // border: '2px solid #000',
  //   boxShadow: 14,
  //   p: 4,
  // };

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const handleSubmit = async () => {
  //   const response = await createContactReplyAnswer(contactReplyAnswer);
  //   ;
  //   if (response?.status < 300) {
  //     setSuccessMessage("Answer Submitted!");

  //     handleClose();
  //   } else if (response?.status > 300) {
  //     setErrorMessage(response?.message);
  //   }
  // };

  // return (
  //   <div>
  //     <Button
  //       color="error"
  //       variant="outlined"
  //       size="small"
  //       style={{ color: "white !important", margin: "5px", width: "auto", fontSize: "12px" }}
  //       onClick={() => handleOpen()}
  //     >
  //                      {t("Replypannel.Answer")}:
  //     </Button>
  //     <Modal
  //       open={open}
  //       onClose={handleClose}
  //       aria-labelledby="modal-modal-title"
  //       aria-describedby="modal-modal-description"
  //     >
  //       <Box sx={style}>
  //         <div className="uploadClient__container__body__participation">
  //         <h3> {t("Replypannel.Writeanswer")}: </h3>
  //           <textarea
  //             onChange={(e) =>
  //               setContactReplyAnswer({
  //                 ...contactReplyAnswer,
  //                 answer_text: e.target.value,
  //               })
  //             }
  //             placeholder="Reply ..."
  //             style={{
  //               margin: "8px",
  //               padding: "5px",
  //               width: "100%",
  //               background: "none",
  //               borderRadius: "15px",
  //             }}
  //           ></textarea>
  //           <label>
  //             <small> {t("Replypannel.Attachement")}:</small>
  //           </label>
  //           <input
  //             type="file"
  //             onChange={(e) =>
  //               setContactReplyAnswer({
  //                 ...contactReplyAnswer,
  //                 attachment: e.target.files[0],
  //               })
  //             }
  //           />
  //           <div className="uploadClient__container__body__participation_delete_user_button_container">
  //             <Button
  //               color="error"
  //               variant="contained"
  //               size="small"
  //               style={{ color: "white" }}
  //               onClick={() => handleSubmit()}
  //             >
  //              {t("Replypannel.Send")}
  //             </Button>
  //             <Button
  //               color="success"
  //               variant="outlined"
  //               size="small"
  //               style={{ color: "black" }}
  //               onClick={() => handleClose()}
  //             >
  //              {t("Replypannel.Cancel")}
  //             </Button>
  //           </div>
  //         </div>
  //       </Box>
  //     </Modal>
  //   </div>
  // );
}

export default ContactReplyAnswerForm;
