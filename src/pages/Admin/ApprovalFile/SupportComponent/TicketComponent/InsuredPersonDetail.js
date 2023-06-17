import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Page from "../../../../../components/Page/Page";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AlertMessage from "../../../../../components/SnackbarMessages/AlertMessage";
import SuccessMessage from "../../../../../components/SnackbarMessages/SuccessMessage";
import { API_KEY } from "../../../../../config/helpers/variables";
import useClientInsurance from "../../../../../hooks/useClientInsurance";
import InsuredClientReplyForm from "./Component/InsuredClientReplyForm";

const InsuredPersonDetail = () => {
  const [clientInfo, setClientInfo] = useState();
  const { id } = useParams();
  const [clientInfoStatus, setClientInfoStatus] = useState('')
  const { getClientInfoById, updateClientInfoTicketStatusAdmin } = useClientInsurance();
  const [statusSuccessMessage, setStatusSuccessMessage] = useState("");
  const [statusErrorMessage, setStatusErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getClientInsuranceDetail = async () => {
    const response = await getClientInfoById(id);
    if (response?.status < 300) {
        setClientInfo(response?.client_info);
    } else if (response.status > 300) {
      setErrorMessage(response?.message);
    }
  };

  const handleClientInfoStatusUpdate = async () => {
    const response = await updateClientInfoTicketStatusAdmin(id, clientInfoStatus);
    if (response?.status < 300) {
      setStatusSuccessMessage("Status Updated Successfully!");
      setTimeout(() => {
        setStatusSuccessMessage("");
      }, 3000);
      setClientInfoStatus("");
    } else if (response?.status > 300) {
      setStatusErrorMessage(response?.message);
      setTimeout(() => {
        setStatusErrorMessage("");
      }, 3000);
    }
  };

  useEffect(() => {
    getClientInsuranceDetail();
  }, []);

  return (
    <Page>
      <SuccessMessage successMessage={successMessage} />
      <AlertMessage errorMessage={errorMessage} />
      <section className="insuredClientView">
        <header className="insuredClientView__header">
          <div className="insuredClientView__header__left">
            <MailOutlineIcon className="insuredClientView__header__left__icon" />
            <p>SUPPORT TICKETS</p>
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
                      <p>{clientInfo?.details}</p>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell
                        sx={{ border: 1 }}
                        component="th"
                        scope="row"
                        style={{ padding: 7 }}
                      >
                        {clientInfo?.file?.url ? (
                          <small>
                            <em>
                              Attached files:{" "}
                              <a
                                href={`${API_KEY}/api/v1/client_infos/${clientInfo?.id}/download_file`}
                              >
                                {clientInfo?.file.filename}
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
                  {clientInfo?.replies?.length > 0 &&
                    clientInfo?.replies?.map((row, index) => (
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
                                    href={`${API_KEY}/api/v1/client_info_replies/${row?.id}/download`}
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
            <InsuredClientReplyForm
              clientInfoId={id}
              email={clientInfo?.user?.email}
              getClientInsuranceDetail={getClientInsuranceDetail}
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
                  <strong style={{textTransform: "uppercase"}}>Ticket Creator:</strong>
                </label>
                <p id="outlined-size-normal">{clientInfo?.user?.email}</p>
                <label>
                  <strong>Ticket Creator Name:</strong>
                </label>
                <p id="outlined-size-normal">{clientInfo?.user?.name}</p>
              { clientInfo?.form_type === 'insured client file' &&
                <>
                  <label>
                    <strong>Client Name:</strong>
                  </label>
                  <p id="outlined-size-normal">{clientInfo?.corporate_client_name}</p>

                  <label>
                    <strong>No. of Employees:</strong>
                  </label>
                  <p id="outlined-size-normal">{clientInfo?.number_of_employees_in_company}</p>

                  <label>
                    <strong>Participation Mode:</strong>
                  </label>
                  <p id="outlined-size-normal">{clientInfo?.participation_mode}</p>

                  <label>
                    <strong>Mandatory Employees:</strong>
                  </label>
                  <p id="outlined-size-normal">{clientInfo?.mandatory_number_of_employees}</p>

                  <label>
                    <strong>Voluntary Employees:</strong>
                  </label>
                  <p id="outlined-size-normal">{clientInfo?.voluntary_number_of_employees}</p>

                  <label>
                    <strong>Employee Family Info:</strong>
                  </label>
                  <p id="outlined-size-normal">{clientInfo?.employees_family_info}</p>

                  <label>
                    <strong>Insurance Payment Type:</strong>
                  </label>
                  <p id="outlined-size-normal">{clientInfo?.insurance_payment_type}</p>

                  <label>
                    <strong>Broker Reference:</strong>
                  </label>
                  <p id="outlined-size-normal">{clientInfo?.broker_reference}</p>

                  <label>
                    <strong>Broker Name:</strong>
                  </label>
                  <p id="outlined-size-normal">{clientInfo?.referenced_broker_name}</p>
                </>
                }
              </div>
              <br />
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
                  onChange={(e) => setClientInfoStatus(e.target.value)}
                >
                  <p >
                    {clientInfo?.status === "fresh"
                      ? "NEW"
                      : clientInfo?.status.toUpperCase()}
                  </p>
                  <option value={4}>IN PROCESS</option>
                  <option value={5}>REPLIED</option>
                  <option value={6}>CLOSE</option>
                </Select>
              </FormControl>
            </Box>
            <p>
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
            </p>
            <Button
              className="authentication__container__formContainer__form__loginButton_tickets"
              type="submit"
              onClick={() => handleClientInfoStatusUpdate()}
            >
              Update Ticket
            </Button>
          </div>
        </Stack>
      </section>
    </Page>
  );
};

export default InsuredPersonDetail;
