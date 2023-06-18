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
import AlertMessage from "../../../../../components/SnackbarMessages/AlertMessage";
import SuccessMessage from "../../../../../components/SnackbarMessages/SuccessMessage";
import useQuoteForm from "../../../../../hooks/useQuoteForm";
import QuoteReplyForm from "./Component/QuoteReplyForm";
import { API_KEY } from "../../../../../config/helpers/variables";

function QuoteFormDetail() {
  const [quoteFormDetail, setQuoteFormDetail] = useState();
  const { id } = useParams();
  const { getQuoteDetail, updateQuoteFormStatus } = useQuoteForm();
  const [quoteStatus, setQuoteStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [statusSuccessMessage, setStatusSuccessMessage] = useState("");
  const [statusErrorMessage, setStatusErrorMessage] = useState("");

  const getQuoteFormDetail = async () => {
    ;
    const response = await getQuoteDetail(id);
    if (response?.status < 300) {
      setQuoteFormDetail(response?.quote_form);
    } else if (response.status > 300) {
      setErrorMessage(response?.message);

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleQuoteStatusUpdate = async () => {
    ;
    const response = await updateQuoteFormStatus(id, quoteStatus);
    if (response?.status < 300) {
      setStatusSuccessMessage("Status Updated Successfully!");
      setTimeout(() => {
        setStatusSuccessMessage("");
      }, 3000);
      setQuoteStatus("");
    } else if (response?.status > 300) {
      setStatusErrorMessage(response?.message);
      setTimeout(() => {
        setStatusErrorMessage("");
      }, 3000);
    }
  };

  useEffect(() => {
    getQuoteFormDetail();
  }, []);

  return (
    <Page>
      <AlertMessage errorMessage={errorMessage} />
      <section className="insuredClientView">
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <MailOutlineIcon className="insuredClientView__header__left__icon" />
            <p>Support Tickets</p>
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
                      <p>{quoteFormDetail?.description}</p>
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
                  {quoteFormDetail?.replies?.length > 0 &&
                    quoteFormDetail?.replies?.map((row, index) => (
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
                                    href={`${API_KEY}/api/v1/quote_replies/${row?.id}/download`}
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
                                        href={`${API_KEY}/api/v1/quote_reply_answers/${row?.answer?.id}/download`}
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
            <QuoteReplyForm
              quoteFormId={id}
              email={quoteFormDetail?.user?.email}
              getQuoteFormDetail={getQuoteFormDetail}
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
                <p id="outlined-size-normal">{quoteFormDetail?.email}</p>
              </div>
              <br />
              {/* <div>
                <label>
                  <strong>Topic:</strong>
                </label>
                <p id="outlined-size-normal">{quoteFormDetail?.identity}</p>
              </div> */}
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
                  onChange={(e) => setQuoteStatus(e.target.value)}
                >
                  <option value={0}>
                    {quoteFormDetail?.status === "fresh"
                      ? "NEW"
                      : quoteFormDetail?.status.toUpperCase()}
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
              onClick={() => handleQuoteStatusUpdate()}
            >
              Update Ticket
            </Button>
          </div>
        </Stack>
      </section>
    </Page>
  );
}

export default QuoteFormDetail;
