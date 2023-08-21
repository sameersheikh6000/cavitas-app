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

export default function DentaCuretoothpaste() {
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
              <h3 style={{ fontSize: "19px" , fontWeight:700}}>DESCRIPTION:</h3>
              <div style={{ fontSize: "14px" , fontWeight:400}}>
                <p>
                  1 tube contains 75 ml of toothpaste
                  <br />
                  DentaCure is an effective and natural toothpaste to help fight
                  bleeding gums and gum inflammation.
                  <br />
                  DentaCure contains a naturally active extract of fenugreek
                  seeds, which through millennia has been known for its healing
                  effect.
                  <br />
                  Fenugreek seeds are documented anti-inflammatory and combat
                  the harmful bacteria that can cause gum problems.
                </p>
              </div>
              <br />

              <h3 style={{ fontSize: "19px" , fontWeight:700}}>INGREDIENTS:</h3>
              <div style={{ fontSize: "14px" , fontWeight:400}}>
                <p>
                  Water, hydrated silica, Sorbitol, Propylen Glycol, Sodium C
                  14-16, Olefin Sulfonat.Aroma, Trigonella Foenum Graecum
                  (Fenugreek) extract, Cellulose gum, Sodium flour, Sodium
                  saccharin, CI 77891. Natriumfluoride (1450 ppm F)
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
