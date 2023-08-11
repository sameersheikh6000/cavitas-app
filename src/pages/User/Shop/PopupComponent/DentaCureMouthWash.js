import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    borderRadius: "25px", // Apply the border radius style
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DentaCureMouthWash() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AddCircleIcon
        style={{
          color: "#dd3333",
          fontSize: "55px",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      />
      <BootstrapDialog
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: { background: "none", boxShadow: "none", maxWidth: "none" },
        }}
      >
        <DialogContent
          dividers
          sx={{
            backgroundColor: "#edf4f4",
            boxShadow: 4,
            padding: "4px",
            position: "relative",
            width: 750, // Default width for larger screens
            "@media (max-width: 360px)": {
              width: "100%", // Adjust width for mobile responsive
            },
          }}
          id="popup_manu"
        >
          <Box>
            <AddCircleIcon
              style={{
                color: "#dd3333",
                fontSize: "55px",
                marginTop: "-28px",
                marginLeft: "-30px",
                position: "fixed",
              }}
              onClick={handleClose}
            />
            <Typography gutterBottom style={{ padding: "20px" }}>
              <h3>DESCRIPTION:</h3>
              <div style={{ fontSize: "14px" }}>
                <p>
                  1 bottle contains 480 ml of mouthwash.
                  <br />
                  DentaCure is an effective and natural mouthwash against
                  bleeding gums and gum infection.
                  <br />
                  DentaCure mouthwash contains the active natural extract from
                  fenugreek seeds, which throughout thousands of years has been
                  known for their healing effect. Fenugreek seeds are documented
                  anti inflammatory and fight the harmful bacterias, which can
                  cause gum problems.
                  <br />
                  DentaCure mouthwash has a gentle taste and brings you healthy
                  oral hygiene and fresh breath, and is effective against
                  bleeding gums and gum infection.
                </p>
              </div>
              <br />
              <h3>USAGE:</h3>
              <div style={{ fontSize: "14px" }}>
                <p>
                  The product is ready for use. To be used morning and evening
                  after toothbrushing. Shake before use to distribute the active
                  ingredients. Rinse your mouth with 10ml for 30 seconds. Do not
                  swallow the fluid. For best effect do not rinse with water
                  after use.
                </p>
                <strong> Adults:</strong> 10ml. pr use. Do not swallow. <br />{" "}
                <strong>Children between the age of 6 and 12 years old:</strong>{" "}
                use only half a dose and under supervision from an adult. <br />
                Keep out of reach for children below 6 years old
                <br />
                <br />
              </div>
              <h3>INGREDIENTS:</h3>
              <div style={{ fontSize: "14px" }}>
                <p>
                  Water, Glycerin, PEG-40 Hydrogenated Castor oil, Xylitol,
                  Sodium Benzoate, Aroma, Trigonella Foenum Graecum Extract,
                  L-Menthol, Citric Acid, Sodium Fluorid 250 ppm Fˉ, Sodium
                  Saccharine, Eucalyptus Globulus Leaf Oil, CI 42051. Without
                  alcohol.
                  <br />
                </p>
              </div>
            </Typography>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
