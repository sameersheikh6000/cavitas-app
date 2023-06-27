import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useClientInsurance from "../../../../hooks/useClientInsurance";

function Allkit() {
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: 10,
    borderColor: "none",
    transform: "translate(-50%, -50%)",
    width: 750,
    bgcolor: "#edf4f4",
    boxShadow: 14,
    p: 4,
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  //   useEffect(() => {
  //     const currentUrl = window.location.href;
  //     let lang = currentUrl.split("/").pop();
  //     lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  //   }, [])

  return (
    <div>
      <AddCircleIcon
        style={{
          color: "#dd3333",
          fontSize: "55px",
          marginTop: "-15px",
          cursor: "pointer",
        }}
        onClick={() => handleOpen()}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableBackdropClick
      >
        <Box sx={style}>
          <AddCircleIcon
            style={{
              color: "#dd3333",
              fontSize: "55px",
              marginTop: "-40px",
              marginLeft: "-40px",
            }}
          />
          <div className="uploadClient__container__body__participation">
            <h3>DESCRIPTION:</h3>
            <div  style={{fontSize:"14px"}}>
            <p>
              Kit of all DentaCure products contains:
              <br />
              <br />
              1 tube contains 75 ml of toothpaste.
              <br />
              1 bottle contains 480 ml of mouthwash.
              <br />
              1 tube contains 25 ml of gel.
              <br />1 box contains 30 meters of interdental floss.
            </p>
            </div>
         
            <br />
            <h3>USAGE:</h3>            <div  style={{fontSize:"14px"}}>

            <p>Find usage described under each product separately.</p></div>
            <br />
            <h3>INGREDIENTS:</h3>
            <div  style={{fontSize:"14px"}}>

            <p>
              Find ingredients described under each product separately.
              <br />
            </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Allkit;
