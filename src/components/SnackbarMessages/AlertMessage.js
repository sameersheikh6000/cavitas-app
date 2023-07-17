import React, { useEffect, useState } from 'react';
import { Snackbar } from "@mui/material"
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertMessage = ({ errorMessage }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (errorMessage) {
      setMessage(errorMessage)
      setOpen(true);
    }
  }, [errorMessage]);

  return (
    <>
      {errorMessage &&
        <Snackbar autoHideDuration={10000} open={open} onClose={handleClose}>
          <Alert severity="error" sx={{ width: '100%' }} onClose={handleClose}>
            {message}
          </Alert>
        </Snackbar>
      }
    </>
  );
}

export default AlertMessage;
