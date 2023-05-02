import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Page from "../../../../../components/Page/Page";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import useContactForm from "../../../../../hooks/useContactForm";
import AlertMessage from "../../../../../components/SnackbarMessages/AlertMessage";
import SuccessMessage from "../../../../../components/SnackbarMessages/SuccessMessage";
import ReplyForm from "./Component/ReplyForm";
import { API_KEY } from "../../../../../config/helpers/variables";

const ContactFormDetail = () => {
  const [contact, setContact] = useState();
  const { id } = useParams();
  const { getContactFormById, updateContactFormStatus } = useContactForm();
  const [contactStatus, setContactStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [statusSuccessMessage, setStatusSuccessMessage] = useState("");
  const [statusErrorMessage, setStatusErrorMessage] = useState("");

  const getContactDetail = async () => {
    const response = await getContactFormById(id);
    if (response?.status < 300) {
      setContact(response?.contact_form);
    } else if (response.status > 300) {
      setErrorMessage(response?.message);
    }
  };

  const handleContactStatusUpdate = async () => {
    const response = await updateContactFormStatus(id, contactStatus);
    if (response?.status < 300) {
      setStatusSuccessMessage("Status Updated Successfully!");
      setTimeout(() => {
        setStatusSuccessMessage("");
      }, 3000);
      setContactStatus("");
    } else if (response?.status > 300) {
      setStatusErrorMessage(response?.message);
      setTimeout(() => {
        setStatusErrorMessage("");
      }, 3000);
    }
  };

  useEffect(() => {
    getContactDetail();
  }, []);

  return (
    <Page>
      <SuccessMessage successMessage={successMessage} />
      <AlertMessage errorMessage={errorMessage} />
      <section className="insuredClientView">
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <MailOutlineIcon className="insuredClientView__header__left__icon" />
            <p>Contact Tickets</p>
          </div>
          <div className="insuredClientView__header__right">
            <Link
              to="/admin/support-tickets"
              style={{ textDecoration: "none" }}
            >
              <Button
                color="error"
                variant="outlined"
                size="small"
                style={{ color: "white !important", marginLeft: "15px" }}
              >
                Return to ticket list
              </Button>
            </Link>
          </div>
        </header>
        <br /> <br />
        <Stack direction="row" spacing={7}>
          <div className="Ticket___messages____left">
            <TableContainer component={Paper}>
              <Table sx={{ border: 1 }} aria-label="simple table">
                <TableHead sx={{ border: 1 }}>
                  <TableRow>
                    <TableCell sx={{ border: 1 }}>
                      <h1>Tickets #{id}</h1>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ border: 1 }} component="th" scope="row">
                      <p>{contact?.description}</p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <br />

            <TableContainer component={Paper} style={{ width: 600 }}>
              <Table sx={{ border: 1 }} aria-label="simple table">
                <TableHead sx={{ border: 1 }}>
                  <TableRow>
                    <TableCell sx={{ border: 1 }}>
                      <h1>Ticket #{id} / Reply</h1>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contact?.replies?.length > 0 &&
                    contact?.replies?.map((row, index) => (
                      <>
                        <small style={{ fontSize: "12px" }}>
                          <em>
                            <b>Your Reply</b>
                          </em>
                        </small>
                        <TableRow>
                          <TableCell
                            sx={{ border: 1 }}
                            component="th"
                            scope="row"
                          >
                            <p>{row?.reply_text}</p>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            sx={{ border: 1 }}
                            component="th"
                            scope="row"
                            style={{ padding: 7 }}
                          >
                            {row?.file_path ? (
                              <small>
                                <em>
                                  Attached files:{" "}
                                  <a
                                    href={`${API_KEY}/api/v1/contact_replies/${row?.id}/download`}
                                  >
                                    {row?.file_name}
                                  </a>
                                </em>
                              </small>
                            ) : (
                              <small>
                                <em>No Attachment(s)</em>
                              </small>
                            )}
                          </TableCell>
                        </TableRow>
                        {row?.answer && (
                          <>
                            <small style={{ fontSize: "12px", color: "red" }}>
                              <em>
                                <b>User Reply</b>
                              </em>
                            </small>
                            <TableRow>
                              <TableCell
                                sx={{ border: 1 }}
                                component="th"
                                scope="row"
                              >
                                <p>{row?.answer?.answer_text}</p>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell
                                sx={{ border: 1 }}
                                component="th"
                                scope="row"
                                style={{ padding: 7 }}
                              >
                                {row?.answer?.file_path ? (
                                  <small>
                                    <em>
                                      Attached files:{" "}
                                      <a
                                        href={`${API_KEY}/api/v1/contact_reply_answers/${row?.answer?.id}/download`}
                                      >
                                        {row?.answer?.file_name}
                                      </a>
                                    </em>
                                  </small>
                                ) : (
                                  <small>
                                    <em>No Attachment(s)</em>
                                  </small>
                                )}
                              </TableCell>
                            </TableRow>
                          </>
                        )}
                      </>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <ReplyForm
              contactFormId={id}
              email={contact?.user?.email}
              getContactDetail={getContactDetail}
              setErrorMessage={setSuccessMessage}
              setSuccessMessage={setSuccessMessage}
            />
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
              <div style={{ marginTop: 20 }}>
                <label>
                  <strong>Ticket Creator:</strong>
                </label>
                <p id="outlined-size-normal">{contact?.email}</p>
              </div>
              <br />
              <div>
                <label>
                  <strong>Topic:</strong>
                </label>
                <p id="outlined-size-normal">{contact?.request}</p>
              </div>
              <br />
              <InputLabel htmlFor="grouped-native-select">
                <b style={{ color: "black" }}>Status:</b>
              </InputLabel>
              <FormControl sx={{ m: 1, width: "25ch" }}>
                <Select
                  native
                  defaultValue="New"
                  id="grouped-native-select"
                  label="Grouping"
                  onChange={(e) => setContactStatus(e.target.value)}
                >
                  <option value={0}>
                    {contact?.status == "fresh"
                      ? "NEW"
                      : contact?.status.toUpperCase()}
                  </option>
                  <option value={1}>IN PROCESS</option>
                  <option value={2}>REPLIED</option>
                  <option value={3}>Close</option>
                </Select>
              </FormControl>
            </Box>
            {statusSuccessMessage && (
              <small style={{ color: "green" }}>
                <em>{statusSuccessMessage}</em>
              </small>
            )}
            {statusErrorMessage && (
              <small style={{ color: "red" }}>
                <em>{statusErrorMessage}</em>
              </small>
            )}
            <Button
              className="authentication__container__formContainer__form__loginButton_tickets"
              type="submit"
              onClick={() => handleContactStatusUpdate()}
            >
              Update Ticket
            </Button>
          </div>
        </Stack>
      </section>
    </Page>
  );
};

export default ContactFormDetail;
