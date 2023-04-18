import React from "react";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import {Link, Route, Routes} from 'react-router-dom';
import Page from "../../../../../components/Page/Page";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



const TicketDetail = () => {
  return (
    <Page>
      <section className="insuredClientView">
      <header className='insuredClientView__header'>
          <div className='insuredClientView__header__left'>
            < MailOutlineIcon  className='insuredClientView__header__left__icon' />
            <p>Support Tickets</p>
          </div>
          <div className='insuredClientView__header__right'>
          <Link to="/admin/ApprovalFile">
          <Button color='error' variant='outlined' size='small' style={{ color: "white !important", marginLeft: "15px"}}>Return to ticket list</Button>
          </Link>
          </div>
        </header>
        < br />   < br />
      <Stack direction="row" spacing={7}>
        <div className="Ticket___messages____left">
          <TableContainer component={Paper}>
            <Table sx={{ border: 1 }} aria-label="simple table">
              <TableHead sx={{ border: 1 }}>
                <TableRow>
                  <TableCell sx={{ border: 1 }}>
                    <h1>Tickets #1</h1>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ border: 1 }} component="th" scope="row">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
       
        <br />
       
          <TableContainer component={Paper}>
            <Table sx={{ border: 1 }} aria-label="simple table">
              <TableHead sx={{ border: 1 }}>
                <TableRow>
                  <TableCell sx={{ border: 1 }}>
                    <h1>Ticket #1 / Reply</h1>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ border: 1 }} component="th" scope="row">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: 1 }} component="th" scope="row">
                    <input type="file" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            className="authentication__container__formContainer__form__loginButton_tickets"
            type="submit"
            
          >
            Reply
          </Button>
       </div>
        <div className="Ticket___detail____right">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <h3>TICKET DETAILS</h3>
            <div style={{marginTop: 20}}>
                <label>Ticket Creator:</label>
              <TextField id="outlined-size-normal" />
            </div>
            <div>
            <label>Topic:</label>
              <TextField  id="outlined-size-normal" />
            </div>
            <InputLabel htmlFor="grouped-native-select">Status:</InputLabel>
            <FormControl sx={{ m: 1, width: "25ch" }}>
              <Select
                native
                defaultValue="New"
                id="grouped-native-select"
                label="Grouping"
              >
                <option aria-label="New" label="New" value="" />
                <option value="">IN PROCESS</option>
                <option value="">REPLIED</option>
                <option value="">Close</option>
                <option value=""></option>
              </Select>
            </FormControl>
          </Box>
          <Button
            className="authentication__container__formContainer__form__loginButton_tickets"
            type="submit" 
          >
            Update Ticket
          </Button>
        </div>
        </Stack>
      </section>
    </Page>
  );
};

export default TicketDetail;
