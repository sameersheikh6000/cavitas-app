import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../../config/helpers/i18n";
import GetQuoteCavitas from "../../BrokerFormComponent/GetQuoteCavitas";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const SilverPlan = () => {
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
              <TableHead>
                <TableRow style={{ border: "none" }}>
                  <TableCell
                    style={{
                      border: "none",
                      width: "52%",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    <h2 style={titleStyle}>{t("3_Plan.Silverplan")}*</h2>
                  </TableCell>

                  <TableCell
                    style={{
                      border: "none",
                      width: "16%",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                    align="center"
                  >
                    <h2 style={titleStyle}>{t("3_Plan.3_Plan_Year1")}</h2>
                  </TableCell>
                  <TableCell
                    style={{
                      border: "none",
                      width: "16%",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                    align="center"
                  >
                    <h2 style={titleStyle}>{t("3_Plan.3_Plan_Year2")}</h2>
                  </TableCell>

                  <TableCell
                    style={{
                      border: "none",
                      width: "16%",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                    align="center"
                  >
                    <h2 style={titleStyle}>{t("3_Plan.3_Plan_Year3")}</h2>
                  </TableCell>
                </TableRow>
              </TableHead>
              <br />
              <TableHead  style={tableContainerStyle}>
                <TableRow>
                  <TableCell style={{ border: "none" }}>
                    <h4>{t("3_Plan.3_Plan_Regular")}</h4>
                  </TableCell>
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>3443 PLN </h4>
                  </TableCell>
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>4253 PLN</h4>
                  </TableCell>
                  <TableCell style={{ border: "none" }} align="center">
                    <h4>6458 PLN</h4>
                  </TableCell>
                </TableRow>
              </TableHead>
              <br />
              <TableHead >
                <TableRow style={tableContainerheaderStyle}>
                  <TableCell style={{ fontSize: "15px", fontWeight: "bold" }}>
                    <p>{t("3_Plan.3_Plan_G1_title")}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      900 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      900 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      900 PLN
                    </p>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
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
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
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
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
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
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
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
                      180 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      180 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      180 PLN
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
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
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
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
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
                      1238 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      1598 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      2003 PLN
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
                    {" "}
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      {t("3_Plan.3_Plan_G4")}{" "}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      1125 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      1575 PLN
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      3375 PLN
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
                      {t("3_Plan.3_Plan_G4_5")}{" "}
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
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
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
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
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
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow style={{ borderBottom: "2px solid #abcbcb"}}> 
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
                      <RemoveCircleOutlineIcon className="landingPage__howItwork__container__details__detailsContainer__box__icon" />
                    </p>
                  </TableCell>
                </TableRow>
              </TableBody>
              <br />
              <TableHead  style={tableContainerStyle}>
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
              <TableHead  style={tableContainerStyle}>
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
            <div>
          <p
            className="landingPage__valuableReadings__container__cardsBox__card__desc"
            style={{ fontSize: "14px", fontWeight: 400 }}
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
          </TableContainer>
        </div>
        
      </div>
      <div className="landingPage__clientDeserve__container">
        <GetQuoteCavitas />
      </div>
      <br />
      <br />
    </div>
  );
};

export default SilverPlan;