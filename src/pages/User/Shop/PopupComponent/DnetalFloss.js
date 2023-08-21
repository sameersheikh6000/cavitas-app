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

export default function DentalFloss() {
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
                  1 box contains 30 meters of interdental floss.
                  <br />
                  DentaCure is an effective and natural floss against bleeding
                  gums and gingivitis.
                  <br />
                  Designed to easily slide between the teeth and at the same
                  time release fenugreek extract and fluoride to prevent gum
                  problems and caries.
                  <br />
                  DentaCure dental floss contains a naturally active extract of
                  fenugreek seeds that have been known for millennia for their
                  healing effect. The fenugreek seeds have been documented as
                  anti-inflammatory and fight the harmful bacterias that can
                  cause gum problems.
                </p>
                <br />
              </div>
              <h3 style={{ fontSize: "19px" , fontWeight:700}}>USAGE:</h3>
              <div style={{ fontSize: "14px" , fontWeight:400}}>
                <p>
                  Wrap the floss around one to two fingers on each hand to hold
                  it, and pass the floss down between the teeth, thus cleaning
                  the space between the teeth. The length of the floss between
                  each finger must be as short as possible to guide the floss in
                  the mouth.
                </p>
                Be careful not to harm the gums with the floss.
                <br />
                <br />
              </div>
              <h3 style={{ fontSize: "19px" , fontWeight:700}}>INGREDIENTS:</h3>
              <div style={{ fontSize: "14px" , fontWeight:400}}>
                <p>
                  Sodium fluoride, fenugreek seed extract.
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
