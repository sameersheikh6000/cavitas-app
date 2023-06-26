import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useClientInsurance from "../../../../hooks/useClientInsurance";

function DentaCuretoothpaste() {
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
            <br />
            <p>
              1 tube contains 75 ml of toothpaste
              <br />
              <br />
              DentaCure is an effective and natural toothpaste to help fight
              bleeding gums and gum inflammation.
              <br />
              DentaCure contains a naturally active extract of fenugreek seeds,
              which through millennia has been known for its healing effect.
              <br />
              Fenugreek seeds are documented anti-inflammatory and combat the
              harmful bacteria that can cause gum problems.
            </p>
            <br />
            <br />

            <h3>INGREDIENTS:</h3>
            <br />
            <p>
              Water, hydrated silica, Sorbitol, Propylen Glycol, Sodium C 14-16,
              Olefin Sulfonat.Aroma, Trigonella Foenum Graecum (Fenugreek)
              extract, Cellulose gum, Sodium flour, Sodium saccharin, CI 77891.
              Natriumfluoride (1450 ppm F)
              <br />
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default DentaCuretoothpaste;
