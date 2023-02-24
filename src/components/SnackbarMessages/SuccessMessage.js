import React, { useState } from 'react';
import { Snackbar } from "@mui/material"
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SuccessMessage = ({ successMessage }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <>
      {successMessage &&
        <Snackbar autoHideDuration={10000} open={open} message={successMessage} onClose={handleClose} >
          <Alert severity="success" sx={{ width: '100%' }} onClose={handleClose} maxSnack={3}>
            {successMessage}
          </Alert>
        </Snackbar>
      }
    </>
  );
}

export default SuccessMessage;
