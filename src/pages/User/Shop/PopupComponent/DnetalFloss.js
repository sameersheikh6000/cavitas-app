import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useClientInsurance from "../../../../hooks/useClientInsurance";

function DentalFloss() {
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
              1 box contains 30 meters of interdental floss.
              <br />
            
              DentaCure is an effective and natural floss against bleeding gums
              and gingivitis.
              <br />
            
              Designed to easily slide between the teeth and at the same time
              release fenugreek extract and fluoride to prevent gum problems and
              caries.
              <br />
        
              DentaCure dental floss contains a naturally active extract of
              fenugreek seeds that have been known for millennia for their
              healing effect. The fenugreek seeds have been documented as
              anti-inflammatory and fight the harmful bacterias that can cause
              gum problems.
            </p>
            <br />
         </div>
            <h3>USAGE:</h3>
            <div  style={{fontSize:"14px"}}>
            <p>
              Wrap the floss around one to two fingers on each hand to hold it,
              and pass the floss down between the teeth, thus cleaning the space
              between the teeth. The length of the floss between each finger
              must be as short as possible to guide the floss in the mouth.
            </p>
           
            Be careful not to harm the gums with the floss.
            <br />
            <br />
          </div>
            <h3>INGREDIENTS:</h3>
            <div  style={{fontSize:"14px"}}>
            <p>
              Sodium fluoride, fenugreek seed extract.
              <br />
            </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default DentalFloss;
