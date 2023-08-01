import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import i18n from "../../../config/helpers/i18n";
import Page from "../../../components/Page/Page";

const EmployDataForm = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);
  
  return (
    <Page>
      <div className="faq">
        <header>
          <h1 style={{ color: "#dd3333" }}>Employee Data</h1>
        </header>
      </div>
      <br />
      <section className="landingPage__valuableReadings">
        <header className="landingPage__valuableReadings__header">
          <h2>
            Accession declaration to the group Cavitas dental insurance contract
          </h2>
        </header>

        {/*Part 1  */}
        <div className="uploadClient__container">
          <div
            style={{ padding: "0px 60px" }}
            className="uploadClient__container__body"
          >
            <div className="uploadClient__container__body__generalInfo">
              <p style={{ color: "#dd3333" }}>
                CAVITAS DENTAL INSURANCE GROUP CONTRACT INFORMATION
              </p>
              <p style={{ color: "rgb(151 183 183)" }}>Employer</p>
              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                name="name_company"
              />
              <p style={{ color: "rgb(151 183 183)" }}>Insurance plan</p>
              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                name="insurance_plan"
              />
              <p style={{ fontWeight: "normal" }}>
                *The same insurance plan applies to employee and to all family
                members
              </p>
            </div>
            {/*Part 2  */}
            <br />
            <div className="uploadClient__container__body__generalInfo">
              <p style={{ color: "#dd3333" }}>DATA OF EMPLOYEE </p>
              <p style={{ color: "rgb(151 183 183)" }}>Gerenal data</p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="first name of the employ filled automatically"
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="Last name of the employ filled automatically"
                  />
                </div>
              </div>

              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                name="Pesel number of the employ filled automatically"
              />
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input type="email" name="email filled automatically" />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="Mobile phone number*" />
                </div>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>Gender</p>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" value={1} />
                <label>MAN</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" value={1} />
                <label>WOMAN</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>Address of residence</p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`Number of house/appartment*`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="Street name" />
                </div>
              </div>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder={`Postal code`} />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="City" />
                </div>
              </div>
            </div>
            <br />
            <div className="uploadClient__container__body__generalInfo">
              <p style={{ color: "#dd3333" }}>
                CAVITAS DENTAL INSURANCE PLAN AND PREMIUM{" "}
              </p>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "20%" }}>
                  <p style={{ color: "rgb(151 183 183)", paddingTop: "15px" }}>
                    Insurance plan
                  </p>
                </div>
                <div style={{ width: "50%", marginRight: "320px" }}>
                  <input
                    type="text"
                    name="Last name of the employ filled automatically"
                    placeholder="BRONZE / SILVER / GOLD"
                  />
                </div>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>Cover type</p>
              <p>Make a selection below</p>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" value={1} />
                <label>EMPLOYEE ONLY</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" value={1} />
                <label>COUPLE</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" value={1} />
                <label>FAMILY (Couple + child/ren)</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" value={1} />
                <label>SINGLE PARENT FAMILY (Employee + child/ren)</label>
              </div>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "20%" }}>
                  <p style={{ paddingTop: "15px", color: "rgb(151 183 183)" }}>
                    Monthly premium
                  </p>
                </div>
                <div style={{ width: "50%", marginRight: "320px" }}>
                  <input
                    type="text"
                    name="Last name of the employ filled automatically"
                    placeholder="XXXX"
                  />
                </div>
              </div>
            </div>
            <div className="uploadClient__container__body__generalInfo">
              <p style={{ color: "#dd3333" }}>
                DATA OF Co-insured MEMBERS OF THE EMPLOYEE
              </p>
              <p style={{ fontWeight: "bold" }}>
                To be completed only in the case of joining the insurance in the
                form of a spouse/Partner Package, Family package or a single
                parent package.
              </p>
              <p>1. Co-insured MEMBER</p>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" value={1} />
                <label>SPOUSE/PARTNER</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" value={1} />
                <label>CHILD(up to 23 years old)</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>
                General data of co-insured
              </p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First name"
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="Last name" name="Last_name" />
                </div>
              </div>

              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                name="Pesel number of the co-insured"
                placeholder="PESEL of the co-insured"
              />
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="email"
                    name="email filled automatically"
                    placeholder="E-mail of the co-insured"
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder="Mobile phone number of the co-insured"
                  />
                </div>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>Gender</p>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" value={1} />
                <label>MAN</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" value={1} />
                <label>WOMAN</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>Address of residence</p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`Number of house/appartment*`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="Street name" />
                </div>
              </div>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder={`Postal code`} />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="City" />
                </div>
              </div>
              <br />
              <p>2. Co-insured MEMBER</p>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" value={1} />
                <label>SPOUSE/PARTNER</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" value={1} />
                <label>CHILD(up to 23 years old)</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>
                General data of co-insured
              </p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First name"
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="Last name" name="Last_name" />
                </div>
              </div>

              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                name="Pesel number of the co-insured"
                placeholder="PESEL of the co-insured"
              />
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="email"
                    name="email filled automatically"
                    placeholder="E-mail of the co-insured"
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder="Mobile phone number of the co-insured"
                  />
                </div>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>Gender</p>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" value={1} />
                <label>MAN</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" value={1} />
                <label>WOMAN</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>Address of residence</p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`Number of house/appartment*`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="Street name" />
                </div>
              </div>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder={`Postal code`} />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="City" />
                </div>
              </div>
              <br />
              <p>3. Co-insured MEMBER</p>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" value={1} />
                <label>SPOUSE/PARTNER</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" value={1} />
                <label>CHILD(up to 23 years old)</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>
                General data of co-insured
              </p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First name"
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="Last name" name="Last_name" />
                </div>
              </div>

              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                name="Pesel number of the co-insured"
                placeholder="PESEL of the co-insured"
              />
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="email"
                    name="email filled automatically"
                    placeholder="E-mail of the co-insured"
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder="Mobile phone number of the co-insured"
                  />
                </div>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>Gender</p>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" value={1} />
                <label>MAN</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" value={1} />
                <label>WOMAN</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>Address of residence</p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`Number of house/appartment*`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="Street name" />
                </div>
              </div>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder={`Postal code`} />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="City" />
                </div>
              </div>
              <br />
              <p>4. Co-insured MEMBER</p>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" value={1} />
                <label>SPOUSE/PARTNER</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" value={1} />
                <label>CHILD(up to 23 years old)</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>
                General data of co-insured
              </p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First name"
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="Last name" name="Last_name" />
                </div>
              </div>

              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                name="Pesel number of the co-insured"
                placeholder="PESEL of the co-insured"
              />
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="email"
                    name="email filled automatically"
                    placeholder="E-mail of the co-insured"
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder="Mobile phone number of the co-insured"
                  />
                </div>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>Gender</p>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" value={1} />
                <label>MAN</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" value={1} />
                <label>WOMAN</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>Address of residence</p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`Number of house/appartment*`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="Street name" />
                </div>
              </div>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder={`Postal code`} />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder="City" />
                </div>
              </div>
            </div>
            <br />
            <div className="uploadClient__container__body__generalInfo">
              <p style={{ color: "#dd3333" }}>DECLARATION </p>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <p style={{ textAlign: "justify" }}>
                  I, the undersigned, declare that I want to take advantage of
                  the reservation of insurance cover for myself and my family
                  members under the group Cavitas dental insurance contract
                  concluded between my employer and insurer Hamilton DAC. I
                  acknowledge and fully understand the scope of insurance
                  coverage, including any exclusions, the specified sums
                  insured, and the applicable premium. Prior to giving my
                  consent to be cove#dd3333 by the Cavitas dental insurance
                  policy and committing to bear the cost of the insurance
                  premium I have received and read the terms and conditions of
                  the Cavitas dental insurance contract, including the insurance
                  product short information.
                </p>
                <p>
                  By submitting this declaration, I willingly agree to all the
                  terms and conditions set forth in the Cavitas dental insurance
                  contract and accept the responsibilities associated with my
                  and my family members' insurance coverage under this contract.
                </p>
              </div>
            </div>
            <div
              className="landingPage__clientDeserve__container"
              style={{ width: "auto" }}
            >
              <Button>Submit</Button>
            </div>{" "}
          </div>
        </div>
      </section>
    </Page>
  );
};

export default EmployDataForm;
