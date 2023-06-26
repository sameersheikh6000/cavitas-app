import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useClientInsurance from "../../../../hooks/useClientInsurance";

function DentaCureintensivegel() {
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
              1 tube contains 25 ml of gel.
              <br />
              <br />
              DentaCure gel is an effective and natural gel against bleeding
              gums, gum inflammation and blisters in mouth.
              <br />
              <br />
              DentCure gel contains a natural active extract from fenugreek
              seeds, which for centuries has been known for their healing
              effect. Fenugreek seeds are documented as anti-inflammatory and
              effective against gum problems and irritated mucous membranes,
              which can lead to blisters in the mouth.
              <br />
              <br />
              The gel also contains hyaluronic acid, which is a substance
              already found in the human body e.g. in the oral area, eyes and
              skin. Hyaluronic acid promotes healing and soothing by forming a
              barrier, which prevents bacteria and viruses to have access to
              wounds.
            </p>
            <br />
            <h3>USAGE:</h3>
            <br />
            <p>
              The product is ready for use. Apply 1 cm of gel on the effected
              inflamed area and/or blisters in the mouth. Can be applied by
              using a toothbrush or finger. To be used 2-3 times a day
              preferably after meals.
            </p>
           
            <strong> For adults.</strong>
          
            Children above the age of 6 years old under supervision from an
            adult.<br />
            <strong>Warning:</strong> Do not use if you are allergic to some of
            the ingredients. Do not use if the product is visibly damaged.
            <br /><br />
            <h3>INGREDIENTS:</h3><br />
            <p>
              Water, Glycerin, Xylitol, Hydroxyethylcellulose, propylene Glycol,
              PEG-40 Hydrogenated Castor oil, Xylitol, Trigonella Foenum Graecum
              Extract (Fenugreek extract), Menthol, Sodium Hyaluronate,
              Potassium Sorbate, Citric Acid, Sodium Fluorid 250 ppm Fˉ,
              Potassium Acesulfame, Eucalyptus Globulus Leaf Oil, CI 42051.
              <br />
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default DentaCureintensivegel;
