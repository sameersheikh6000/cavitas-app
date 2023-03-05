import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  outline: "none",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};

export default function InsuredClientRejectModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button color='error' variant='contained' size='small' onClick={handleOpen}>Reject</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: "600", fontSize: ".9rem", fontFamily: "poppins" }}>
            Rejection message
          </Typography>
          <input type="text" placeholder='Message' style={{ width: "100%", marginTop: ".5rem", borderRadius: ".5rem", padding: ".5rem 1rem", outline: "none", border: "2px solid lightgray" }} />
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: ".5rem" }}>
            <Button variant='contained' style={{ marginRight: ".5rem", backgroundColor: "gray" }} size='small' onClick={handleClose}>Cancel</Button>
            <Button variant='contained' size='small'>Submit</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
