import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTranslation } from "react-i18next";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Page from "../../../components/Page/Page";
import DentaCuretoothpaste from "./PopupComponent/DentaCuretoothpaste";
import DentaCureMouthWash from "./PopupComponent/DentaCureMouthWash";
import DentaCureintensivegel from "./PopupComponent/DentaCureintensivegel";
import DentalFloss from "./PopupComponent/DnetalFloss";
import Allkit from "./PopupComponent/Allkit"

const Shop = () => {
  return (
    <Page>
      <section className="landingPage">
        <section className="landingPage__smartInsurance">
          <div className="landingPage__healthyTeeth__container">
            <h1
              style={{
                color: "#5c8894",
                padding:"30px",
                textTransform:"none"
              }}
            >
              Shop for natural oral care products that <br />
              bring effect!
            </h1>
          </div>
          <div className="landingPage__smartInsurance__container">
            <div className="landingPage__smartInsurance__container__details">
              <div className="Shop__mainpage">
                <p>
                  We bring you a range of DentaCure products that are proven to
                  be effective in cases like:
                </p>
                <ul style={{ margin: "10px", marginLeft: "30px", fontWeight:"normal" }}>
                  <li>Bleeding gums</li>
                  <li>Gingivitis</li>
                  <li>Tartar</li>
                  <li>Blisters in the mouth</li>
                  <li>Gum pain</li>
                </ul>
                <p>
                  DentaCure products help to prevent and treat gingivitis which
                  for many, if not treated, develops into periodontitis.
                </p>
              </div>
            </div>
            <div className="landingPage__smartInsurance__container__picture">
              <img
                src={require("../../../assets/Shop Home 09.52.49.png")}
                alt=""
              />
            </div>
          </div>
        </section>
      </section>

      {/* No # 00 */}

      <section className="landingPage__howItwork">
        <div className="landingPage__howItwork__container">
          <div
            className="landingPage__howItwork__container__picture"
            style={{ width: "50%", marginTop: "-100px" }}
          >
            <img
              style={{ height: "60%", width: "60%" }}
              src={require("../../../assets/no 1.png")}
              alt=""
            />
          </div>

          <div
            className="landingPage__howItwork__container__details"
            style={{ width: "50%" }}
          >
            <h3
              className="landingPage__howItwork__container__details__heading"
              style={{
                fontSize: "2.2rem",
                marginBottom: "10px",
                fontWeight: "500",
                display:"inline-flex"
              }}
            >
              DentaCure toothpaste, 75 ml  <DentaCuretoothpaste/>
             
            </h3>
            <p className="Shop__mainpage"
             style={{ fontWeight: "normal" }}

             >
              <ul style={{ margin: "10px", marginLeft: "30px" }}>
                <li>Mild mint taste</li>
                <li>Effective against bleeding gums</li>
                <li>Reduces gum inflammation</li>
                <li>Diminish tartar</li>
                <li>Contains fluoride against caries</li>
                <li>Free of SLS</li>
                <li>Free of unwanted chemicals</li>
                <li>Clinically tested</li>
              </ul>
              <div className="landingPage__allCare__container__details__imageContainer">
                <div className="Shop__price">
                  <h1>€9.00</h1>
                </div>
                <div className="Shop__Button">
                  <ShoppingCartIcon
                    style={{
                      marginLeft: "5px",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                  <span style={{ padding: "10px", cursor: "pointer" }}>
                    {" "}
                    COMING SOON
                  </span>
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>

      {/* No # 01 */}

      <section className="landingPage__howItwork">
        <div className="landingPage__howItwork__container">
          <div
            className="landingPage__howItwork__container__picture"
            style={{ width: "50%", marginTop: "-100px" }}
          >
            <img
              style={{ height: "35%", width: "33%" }}
              src={require("../../../assets/Mouth wash.png")}
              alt=""
            />
          </div>

          <div
            className="landingPage__howItwork__container__details"
            style={{ width: "50%" }}
          >
            <h3
              className="landingPage__howItwork__container__details__heading"
              style={{
                fontSize: "2.2rem",
                marginBottom: "10px",
                fontWeight: "500",
                display:"inline-flex"
              }}
            >
              DentaCure mouthwash, 480 ml
              {/* <AddCircleIcon
                style={{
                  color: "#dd3333",
                  fontSize: "55px",
                  cursor: "pointer",
                }}
              /> */}
              <DentaCureMouthWash />
            </h3>
            <p className="Shop__mainpage" 
            
            style={{ fontWeight: "normal" }}
            >
              <ul style={{ margin: "10px", marginLeft: "30px" }}>
                <li>Mild mint taste and fresh breath</li>
                <li>Anti inflammatory</li>
                <li>With an extract from fenugreek seeds</li>
                <li>Contains fluoride (1450 ppm)</li>
                <li>Gentle on mucous membranes</li>
                <li>Contains no alcohol</li>
                <li>Shake before use to distribute the active ingredient</li>
              </ul>
              <div className="landingPage__allCare__container__details__imageContainer">
                <div className="Shop__price">
                  <h1>€9.00</h1>
                </div>
                <div className="Shop__Button">
                  <ShoppingCartIcon
                    style={{
                      marginLeft: "5px",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                  <span style={{ padding: "10px", cursor: "pointer" }}>
                    {" "}
                    COMING SOON
                  </span>
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>

      {/* No # 02 */}

      <section className="landingPage__howItwork">
        <div className="landingPage__howItwork__container">
          <div
            className="landingPage__howItwork__container__picture"
            style={{ width: "50%", marginTop: "-100px" }}
          >
            <img
              style={{ height: "50%", width: "50%" }}
              src={require("../../../assets/No 2.png")}
              alt=""
            />
          </div>

          <div
            className="landingPage__howItwork__container__details"
            style={{ width: "50%" }}
          >
            <h3
              className="landingPage__howItwork__container__details__heading"
              style={{
                fontSize: "2.2rem",
                marginBottom: "10px",
                fontWeight: "500",
                display:"inline-flex"

              }}
            >
              DentaCure intensive gel, 25 ml
              {/* <AddCircleIcon
                style={{
                  color: "#dd3333",
                  fontSize: "55px",
                  cursor: "pointer",
                }}
              /> */}
              <DentaCureintensivegel />
            </h3>
            <p className="Shop__mainpage" 
            
            style={{ fontWeight: "normal" }}
            >
              <ul style={{ margin: "10px", marginLeft: "30px" }}>
                <li>Mild mint taste</li>
                <li>Anti inflmmatory</li>
                <li>With an extract from fenugreek seeds</li>
                <li>With hyaluronic acid for a soothing effect</li>
                <li>Contains fluoride (250 ppm)</li>
                <li>Gentle on mucous membranes</li>
                <li>Contains no alcohol</li>
              </ul>
              <div className="landingPage__allCare__container__details__imageContainer">
                <div className="Shop__price">
                  <h1>€9.00</h1>
                </div>
                <div className="Shop__Button">
                  <ShoppingCartIcon
                    style={{
                      marginLeft: "5px",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                  <span style={{ padding: "10px", cursor: "pointer" }}>
                    {" "}
                    COMING SOON
                  </span>
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>

      {/* No # 03 */}

      <section className="landingPage__howItwork">
        <div className="landingPage__howItwork__container">
          <div
            className="landingPage__howItwork__container__picture"
            style={{ width: "50%", marginTop: "-100px" }}
          >
            <img
              style={{ height: "50%", width: "50%" }}
              src={require("../../../assets/Floss.png")}
              alt=""
            />
          </div>

          <div
            className="landingPage__howItwork__container__details"
            style={{ width: "50%" }}
          >
            <h3
              className="landingPage__howItwork__container__details__heading"
              style={{
                fontSize: "2.2rem",
                marginBottom: "10px",
                fontWeight: "500",
                display:"inline-flex"
              }}
            >
              DentaCure dental floss, 30 m
              {/* <AddCircleIcon
                style={{
                  color: "#dd3333",
                  fontSize: "55px",
                  cursor: "pointer",
                }}
              /> */}
              <DentalFloss />
            </h3>
            <p className="Shop__mainpage" 
            
            style={{ fontWeight: "normal" }}
          >              <ul style={{ margin: "10px", marginLeft: "30px" }}>
                <li>Effective against bleeding gums and gingivitis</li>
                <li>For daily cleaning between teeth</li>
                <li>Anti inflammatory</li>
                <li>Contains no alcohol</li>
              </ul>
              <div className="landingPage__allCare__container__details__imageContainer">
                <div className="Shop__price">
                  <h1>€9.00</h1>
                </div>
                <div className="Shop__Button">
                  <ShoppingCartIcon
                    style={{
                      marginLeft: "5px",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                  <span style={{ padding: "10px", cursor: "pointer" }}>
                    {" "}
                    COMING SOON
                  </span>
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>

      {/* No # 04 */}

      <section className="landingPage__howItwork">
        <div className="landingPage__howItwork__container">
          <div
            className="landingPage__howItwork__container__picture"
            style={{ width: "50%", marginTop: "-100px" }}
          >
            <img
              style={{ height: "60%", width: "60%" }}
              src={require("../../../assets/DentaCure all products.png")}
              alt=""
            />
          </div>

          <div
            className="landingPage__howItwork__container__details"
            style={{ width: "50%" }}
          >
            <h3
              className="landingPage__howItwork__container__details__heading"
              style={{
                fontSize: "2.2rem",
                marginBottom: "10px",
                fontWeight: "500",
                display:"inline-flex"

              }}
            >
              Kit "Together is better"
              {/* <AddCircleIcon
                style={{
                  color: "#dd3333",
                  fontSize: "55px",
                  cursor: "pointer",
                }}
              /> */}
              <Allkit />
            </h3>
            <p className="Shop__mainpage" 

            style={{ fontWeight: "normal" }}
            >              <ul style={{ margin: "10px", marginLeft: "30px" }}>
                <li>
                  All DentaCure products for effective and natural floss against
                  bleeding gums and gingivitis.
                </li>
              </ul>
              <div className="landingPage__allCare__container__details__imageContainer">
                <div className="Shop__price">
                  <h1>€9.00</h1>
                </div>
                <div className="Shop__Button">
                  <ShoppingCartIcon
                    style={{
                      marginLeft: "5px",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                  <span style={{ padding: "10px", cursor: "pointer" }}>
                    {" "}
                    COMING SOON
                  </span>
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Shop;
