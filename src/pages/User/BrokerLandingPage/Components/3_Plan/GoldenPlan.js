import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../../config/helpers/i18n";
import GetQuoteCavitas from "../../BrokerFormComponent/GetQuoteCavitas";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Paper from "@mui/material/Paper";
import { Table, TableHead, TableRow, TableCell } from "@material-ui/core";
const GoldPlan = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);

  const tableContainerparaStyle = {
    borderBottom: "2px solid #abcbcb",
    margintop: "10px",
  };
  const tableContainerStyle = {
    borderRadius: "25px",
    border: "2px solid #dd3333",
    minWidth: "100%",
    overflowX: "scroll",
    overflowY: "hidden",
    marginTop: "10px",
    marginBottom: "20px",
    backgroundColor: "#abcbcb",
    scrollbarWidth: "20%", // Adjust the value as needed
    scrollbarColor: "red", // Set the desired scrollbar color
  };
  const tableContainerheaderStyle = {
    borderTop: "2px solid #dd3333",
    borderBottom: "2px solid #dd3333",
    margintop: "10px",
  };
  const titleStyle = {
    color: "#dd3333",
    fontSize: "23px",
    border: "none",
    fontWeight: "bolder",
  };
  return (
    <div>
      {/* plan 1      */}

      <div className="landingPage__coverWorks__container">
        <div className="landingPage__coverWorks__container__cards">
          <TableContainer style={{ marginBottom: "20px" }}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead component={Paper}>
                <TableRow style={{ border: "none" }}>
                  <TableCell style={{ border: "none", width: "52%" }}>
                    <h2 style={titleStyle}>{t("3_Plan.Goldenplan")}</h2>
                  </TableCell>

                  <TableCell
                    style={{ border: "none", width: "16%" }}
                    align="center"
                  >
                    <h2 style={titleStyle}>{t("3_Plan.3_Plan_Year1")}</h2>
                  </TableCell>
                  <TableCell
                    style={{ border: "none", width: "16%" }}
                    align="center"
                  >
                    <h2 style={titleStyle}>{t("3_Plan.3_Plan_Year2")}</h2>
                  </TableCell>

                  <TableCell
                    style={{ border: "none", width: "16%" }}
                    align="center"
                  >
                    <h2 style={titleStyle}>{t("3_Plan.3_Plan_Year3")}</h2>
                  </TableCell>
                </TableRow>
              </TableHead>
              <br />
              <TableHead component={Paper} style={tableContainerStyle}>
                <TableRow>
                  <TableCell style={{ border: "none" }}>
                    <h4>{t("3_Plan.3_Plan_Regular")}</h4>
                  </TableCell>{" "}
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>4275 PLN</h4>
                  </TableCell>
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>5624 PLN</h4>
                  </TableCell>
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>9000 PLN</h4>
                  </TableCell>
                </TableRow>
              </TableHead>
              <br />
              <TableHead component={Paper}>
                <TableRow style={tableContainerheaderStyle}>
                  <TableCell style={{ fontSize: "15px", fontWeight: "bold" }}>
                    <p>{t("3_Plan.3_Plan_G1_title")}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      1260 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      1260 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      1260 PLN
                    </p>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody component={Paper}>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "15px" }}
                  >
                    <p> {t("3_Plan.3_Plan_G1_1")}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "15px" }}
                  >
                    <p> {t("3_Plan.3_Plan_G1_2")}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "15px" }}
                  >
                    <p> {t("3_Plan.3_Plan_G1_3")}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>{" "}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "15px" }}
                  >
                    <p> {t("3_Plan.3_Plan_G1_4")}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>{" "}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "15px" }}
                  >
                    <p> {t("3_Plan.3_Plan_G1_5")}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>{" "}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "15px" }}
                  >
                    <p> {t("3_Plan.3_Plan_G1_6")}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>{" "}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "15px" }}
                  >
                    <p> {t("3_Plan.3_Plan_G1_7")}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                {/* Group 2 */}
                <TableRow style={tableContainerheaderStyle}>
                  <TableCell style={{ fontSize: "15px", fontWeight: "bold" }}>
                    {" "}
                    <p> {t("3_Plan.3_Plan_G2_title")}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      225 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      225 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      225 PLN
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G2_1")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G2_2")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p> {t("3_Plan.3_Plan_G2_3")}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {t("3_Plan.3_Plan_G2_4")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                {/* Group 3 */}
                <TableRow style={tableContainerheaderStyle}>
                  <TableCell style={{ fontSize: "15px", fontWeight: "bold" }}>
                    {" "}
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G3")}{" "}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      1350 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      1800 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      2250 PLN
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G3_1")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G3_2")}{" "}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G3_3")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G3_4")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                {/* Group 4 */}
                <TableRow style={tableContainerheaderStyle}>
                  <TableCell style={{ fontSize: "15px", fontWeight: "bold" }}>
                    {t("3_Plan.3_Plan_G4")}{" "}
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      1440 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      2340 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      5265 PLN
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4_1")}{" "}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4_2")}{" "}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4_3")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4_4")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4_5")}{" "}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4_6")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4_7")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4_8")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4_9")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={tableContainerparaStyle}
                >
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4_10")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4_11")}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px" }}>
                      <CheckCircleIcon
                        style={{ color: "#5c8894" }}
                        className="landingPage__howItwork__container__details__detailsContainer__box__icon"
                      />
                    </p>
                  </TableCell>
                </TableRow>
              </TableBody>
              <br />
              <TableHead component={Paper} style={tableContainerStyle}>
                <TableRow>
                  <TableCell style={{ border: "none" }}>
                    <h4>{t("3_Plan.B1")}</h4>
                  </TableCell>
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>4275 PLN</h4>
                  </TableCell>
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>5625 PLN</h4>
                  </TableCell>
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>9000 PLN</h4>
                  </TableCell>
                </TableRow>
              </TableHead>
              <br />
              <TableHead component={Paper} style={tableContainerStyle}>
                <TableRow>
                  <TableCell style={{ border: "none" }}>
                    <h4>{t("3_Plan.B2")}</h4>
                  </TableCell>
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>22 500 PLN </h4>
                  </TableCell>
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>45 000 PLN </h4>
                  </TableCell>
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>67 500 PLN</h4>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </div>
        <div>
          <p
            className="landingPage__valuableReadings__container__cardsBox__card__desc"
            style={{ fontSize: "15px" }}
          >
            {t("3_Plan.B_p1")}
          </p>
          {/* <p
              className="landingPage__valuableReadings__container__cardsBox__card__desc"
              style={{ fontSize: "15px" }}
            >
              {t("3_Plan.B_p2")}
            </p> */}
        </div>
      </div>
      <div className="landingPage__clientDeserve__container">
        <GetQuoteCavitas />
      </div>
      <br />
    </div>
  );
};

export default GoldPlan;
