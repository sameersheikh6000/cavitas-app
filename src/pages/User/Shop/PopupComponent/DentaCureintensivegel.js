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

export default function DentaCureintensivegel() {
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
                  1 tube contains 25 ml of gel.
                  <br />
                  DentaCure gel is an effective and natural gel against bleeding
                  gums, gum inflammation and blisters in mouth.
                  <br />
                  DentCure gel contains a natural active extract from fenugreek
                  seeds, which for centuries has been known for their healing
                  effect. Fenugreek seeds are documented as anti-inflammatory
                  and effective against gum problems and irritated mucous
                  membranes, which can lead to blisters in the mouth.
                  <br />
                  The gel also contains hyaluronic acid, which is a substance
                  already found in the human body e.g. in the oral area, eyes
                  and skin. Hyaluronic acid promotes healing and soothing by
                  forming a barrier, which prevents bacteria and viruses to have
                  access to wounds.
                </p>
                <br />
              </div>
              <h3>USAGE:</h3>
              <div style={{ fontSize: "14px" }}>
                <p>
                  The product is ready for use. Apply 1 cm of gel on the
                  effected inflamed area and/or blisters in the mouth. Can be
                  applied by using a toothbrush or finger. To be used 2-3 times
                  a day preferably after meals.
                </p>
                <strong> For adults.</strong>
                Children above the age of 6 years old under supervision from an
                adult.
                <br />
                <strong>Warning:</strong> Do not use if you are allergic to some
                of the ingredients. Do not use if the product is visibly
                damaged.
                <br />
                <br />
              </div>
              <h3>INGREDIENTS:</h3>
              <div style={{ fontSize: "14px" }}>
                <p>
                  Water, Glycerin, Xylitol, Hydroxyethylcellulose, propylene
                  Glycol, PEG-40 Hydrogenated Castor oil, Xylitol, Trigonella
                  Foenum Graecum Extract (Fenugreek extract), Menthol, Sodium
                  Hyaluronate, Potassium Sorbate, Citric Acid, Sodium Fluorid
                  250 ppm Fˉ, Potassium Acesulfame, Eucalyptus Globulus Leaf
                  Oil, CI 42051.
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
