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

export default function Allkit() {
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
              <h3>USAGE:</h3>{" "}
              <div style={{ fontSize: "14px" }}>
                <p>Find usage described under each product separately.</p>
              </div>
              <br />
              <h3>INGREDIENTS:</h3>
              <div style={{ fontSize: "14px" }}>
                <p>
                  Find ingredients described under each product separately.
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
