import React, { useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function DentaCureMouthWash() {
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
            <div style={{fontSize:"14px"}}>
            <p >
              1 bottle contains 480 ml of mouthwash.
              <br />
              DentaCure is an effective and natural mouthwash against bleeding
              gums and gum infection.
              <br />
              DentaCure mouthwash contains the active natural extract from
              fenugreek seeds, which throughout thousands of years has been
              known for their healing effect. Fenugreek seeds are documented
              anti inflammatory and fight the harmful bacterias, which can cause
              gum problems.
              <br />
              DentaCure mouthwash has a gentle taste and brings you healthy oral
              hygiene and fresh breath, and is effective against bleeding gums
              and gum infection.
            </p>
            </div>
            <br />
            <h3>USAGE:</h3>
            <div style={{fontSize:"14px"}}>
            <p>
              The product is ready for use. To be used morning and evening after
              toothbrushing. Shake before use to distribute the active
              ingredients. Rinse your mouth with 10ml for 30 seconds. Do not
              swallow the fluid. For best effect do not rinse with water after
              use.
            </p>
            <strong> Adults:</strong> 10ml. pr use. Do not swallow. <br />{" "}
            <strong>Children between the age of 6 and 12 years old:</strong> use
            only half a dose and under supervision from an adult. <br />
            Keep out of reach for children below 6 years old
            <br />
            <br />
            </div>
            <h3>INGREDIENTS:</h3>
         <div style={{fontSize:"14px"}}>
            <p>
              Water, Glycerin, PEG-40 Hydrogenated Castor oil, Xylitol, Sodium
              Benzoate, Aroma, Trigonella Foenum Graecum Extract, L-Menthol,
              Citric Acid, Sodium Fluorid 250 ppm Fˉ, Sodium Saccharine,
              Eucalyptus Globulus Leaf Oil, CI 42051. Without alcohol.
              <br />
            </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default DentaCureMouthWash;
