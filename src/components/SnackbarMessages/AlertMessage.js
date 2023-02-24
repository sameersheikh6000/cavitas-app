import React, { useState } from 'react';
import { Snackbar } from "@mui/material"
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertMessage = ({ errorMessage }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <>
      {errorMessage &&
        <Snackbar autoHideDuration={10000} open={open} message={errorMessage} onClose={handleClose}>
          <Alert severity="error" sx={{ width: '100%' }} onClose={handleClose}>
            {errorMessage}
          </Alert>
        </Snackbar>
      }
    </>
  );
}

export default AlertMessage;
