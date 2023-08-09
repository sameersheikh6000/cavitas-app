import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import i18n from "../../../config/helpers/i18n";
import Page from "../../../components/Page/Page";
import CancelIcon from '@mui/icons-material/Cancel';
import Form from "./Form";

const EmployDataForm = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const [gender, setGender] = useState("");
  const [familyType, setFamilyType] = useState("");
  const [familyMember, setFamilyMember] = useState("");
  
  // changes
  const [coInsuredMember, setCoInsuredMember] = useState([{name: '', age: ''}])
  
  const handleFormChange = (index, e) => {
    let data = [...coInsuredMember];
    data[index][e.target.name] = e.target.value;
    setCoInsuredMember(data)
  }
  
  const addFields = () => {
    let newfield = { name: '', age: '' }
    setCoInsuredMember([...coInsuredMember, newfield])
  }
  
  const submit = (e) => {
    e.preventDefault();
    console.log(coInsuredMember)
}

const removeFields = (index) => {
  let data = [...coInsuredMember];
  data.splice(index, 1)
    setCoInsuredMember(data)
}
  
//changes
  
  
  
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFamilyMemberChange = (event) => {
    setFamilyMember(event.target.value);
  };

  const handleFamilyTypeChange = (event) => {
    setFamilyType(event.target.value);
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);

  return (
    <Page>
      <div className="faq">
        <header>
          <h1 style={{ color: "#dd3333" }}>
            {t("Employdata.Employdata_title")}
          </h1>
        </header>
      </div>
      <br />
      <section className="landingPage__valuableReadings">
        <header className="landingPage__valuableReadings__header">
          <h2>{t("Employdata.Employdata_heading")}</h2>
        </header>

        {/*Part 1  */}
        <div className="uploadClient__container" style={{ marginTop: "2rem" }}>
          <div
            style={{ padding: "0px 60px" }}
            className="uploadClient__container__body"
          >
            <div className="uploadClient__container__body__generalInfo">
              <p style={{ color: "#dd3333" }}>
                {t("Employdata.Cavitas_dentalinsurance")}{" "}
              </p>
              <p style={{ color: "rgb(151 183 183)" }}>
                {" "}
                {t("Employdata.Employer")}{" "}
              </p>
              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                style={{ marginTop: "0px" }}
                name="name_company"
                placeholder={`${t("Employdata.company_name")}`}
              />
              <p style={{ color: "rgb(151 183 183)" }}>
                {" "}
                {t("Employdata.Insurance plan")}{" "}
              </p>
              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                style={{ marginTop: "0px" }}
                name="insurance_plan"
                placeholder={`${t("Employdata.Insurance plan")}`}
              />
              <p style={{ fontWeight: "normal" }}>
                * {t("Employdata.same_insurance_plan")}
              </p>
            </div>
            {/*Part 2  */}
            <br />
            <div className="uploadClient__container__body__generalInfo">
              <p style={{ color: "#dd3333" }}>{t("Employdata.Data_employ")} </p>
              <p style={{ color: "rgb(151 183 183)" }}>
                {t("Employdata.general")}
              </p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="first name of the employ filled automatically"
                    placeholder={`${t("Employdata.firstnameemploy")}`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="Last name of the employ filled automatically"
                    placeholder={`${t("Employdata.lastnameemploy")}`}
                  />
                </div>
              </div>

              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                name="Pesel number of the employ filled automatically"
                placeholder={`${t("Employdata.peselno")}`}
              />
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="email"
                    name="email filled automatically"
                    placeholder="E-mail"
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`${t("Employdata.Mobile_number")}`}
                  />
                </div>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>
                {" "}
                {t("Employdata.gender")}
              </p>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                />
                <label> {t("Employdata.man")}</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                />
                <label> {t("Employdata.woman")}</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>
                {" "}
                {t("Employdata.address_residence")}
              </p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`${t("Employdata.number_house")}`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`${t("Employdata.street")}`}
                  />
                </div>
              </div>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`${t("Employdata.postal_code")}`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder={`${t("Employdata.city")}`} />
                </div>
              </div>
            </div>
            {/* part 3 */}
            <br />
            <div className="uploadClient__container__body__generalInfo">
              <p style={{ color: "#dd3333" }}>
                {t("Employdata.dental_insurance_plan")}{" "}
              </p>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "20%" }}>
                  <p style={{ color: "rgb(151 183 183)", paddingTop: "15px" }}>
                    {t("Employdata.IP")}
                  </p>
                </div>
                <div style={{ width: "50%", marginRight: "320px" }}>
                  <input
                    type="text"
                    name="Last name of the employ filled automatically"
                    placeholder={`${t("Employdata.bronze/silver")}`}
                  />
                </div>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>
                {" "}
                {t("Employdata.cover_type")}
              </p>
              <p> {t("Employdata.selection")}</p>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="familyType"
                  value="employee"
                  checked={familyType === "employee"}
                  onChange={handleFamilyTypeChange}
                />

                <label> {t("Employdata.employ_only")}</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="familyType"
                  value="couple"
                  checked={familyType === "couple"}
                  onChange={handleFamilyTypeChange}
                />
                <label> {t("Employdata.couple")}</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="familyType"
                  value="family"
                  checked={familyType === "family"}
                  onChange={handleFamilyTypeChange}
                />
                <label> {t("Employdata.family_couple")}</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="familyType"
                  value="singleParentFamily"
                  checked={familyType === "singleParentFamily"}
                  onChange={handleFamilyTypeChange}
                />
                <label> {t("Employdata.single_parent")}</label>
              </div>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "20%" }}>
                  <p style={{ paddingTop: "15px", color: "rgb(151 183 183)" }}>
                    {t("Employdata.monthly_premium")}
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
            <br />
            {/* Part 4 */}
            {/* <div className="uploadClient__container__body__generalInfo">
              <p style={{ color: "#dd3333" }}>
                {t("Employdata.Data_coinsured")}
              </p>
              <p style={{ fontWeight: "bold" }}>
                {t("Employdata.Data_coinsured_heading")}
              </p>
              <p> 1. {t("Employdata.coinsured_member")}</p>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="familyMember"
                  value="spousePartner"
                  checked={familyMember === "spousePartner"}
                  onChange={handleFamilyMemberChange}
                />
                <label> {t("Employdata.supose")}</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="familyMember"
                  value="childUpTo23"
                  checked={familyMember === "childUpTo23"}
                  onChange={handleFamilyMemberChange}
                />
                <label> {t("Employdata.child")}</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>
                {t("Employdata.general_data")}
              </p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="first_name"
                    placeholder={`${t("Employdata.first_name")}`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`${t("Employdata.last_name")}`}
                    name="Last_name"
                  />
                </div>
              </div>

              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                name="Pesel number of the co-insured"
                placeholder={`${t("Employdata.pesel")}`}
              />
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="email"
                    name="email filled automatically"
                    placeholder={`${t("Employdata.email")}`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`${t("Employdata.mobile")}`}
                  />
                </div>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>
                {" "}
                {t("Employdata.gender")}
              </p>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="man" />
                <label>{t("Employdata.man")}</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input type="radio" name="woman" />
                <label>{t("Employdata.woman")}</label>
              </div>
              <p style={{ color: "rgb(151 183 183)" }}>
                {" "}
                {t("Employdata.address_residence")}
              </p>

              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`${t("Employdata.number_house")}`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`${t("Employdata.street")}`}
                  />
                </div>
              </div>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    placeholder={`${t("Employdata.postal_code")}`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input type="text" placeholder={`${t("Employdata.city")}`} />
                </div>
              </div>
              <br />
            </div> */}
            <div>
              {coInsuredMember.map((input, index) => {
                return (
                  <div key={index}>
                    <div className="uploadClient__container__body__generalInfo">
                      <p style={{ color: "#dd3333" }}>
                        {t("Employdata.Data_coinsured")}
                      </p>
                      <p style={{ fontWeight: "bold" }}>
                        {t("Employdata.Data_coinsured_heading")}
                      </p>
                      <p> {index + 1}. {t("Employdata.coinsured_member")}</p>
                      <div className="uploadClient__container__body__participation__head">
                        <input
                          type="radio"
                          name="familyMember"
                          value="spousePartner"
                          checked={familyMember === "spousePartner"}
                          onChange={handleFamilyMemberChange}
                        />
                        <label> {t("Employdata.supose")}</label>
                      </div>
                      <div className="uploadClient__container__body__participation__head">
                        <input
                          type="radio"
                          name="familyMember"
                          value="childUpTo23"
                          checked={familyMember === "childUpTo23"}
                          onChange={handleFamilyMemberChange}
                        />
                        <label> {t("Employdata.child")}</label>
                      </div>
                      <p style={{ color: "rgb(151 183 183)" }}>
                        {t("Employdata.general_data")}
                      </p>

                      <div className="userProfileView__container__details__detailsBox__feilds__container">
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            name="first_name"
                            placeholder={`${t("Employdata.first_name")}`}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            placeholder={`${t("Employdata.last_name")}`}
                            name="Last_name"
                          />
                        </div>
                      </div>

                      <input
                        className="uploadClient__container__body__generalInfo__input"
                        type="text"
                        name="Pesel number of the co-insured"
                        placeholder={`${t("Employdata.pesel")}`}
                      />
                      <div className="userProfileView__container__details__detailsBox__feilds__container">
                        <div style={{ width: "49%" }}>
                          <input
                            type="email"
                            name="email filled automatically"
                            placeholder={`${t("Employdata.email")}`}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            placeholder={`${t("Employdata.mobile")}`}
                          />
                        </div>
                      </div>
                      <p style={{ color: "rgb(151 183 183)" }}>
                        {" "}
                        {t("Employdata.gender")}
                      </p>
                      <div className="uploadClient__container__body__participation__head">
                        <input type="radio" name="man" />
                        <label>{t("Employdata.man")}</label>
                      </div>
                      <div className="uploadClient__container__body__participation__head">
                        <input type="radio" name="woman" />
                        <label>{t("Employdata.woman")}</label>
                      </div>
                      <p style={{ color: "rgb(151 183 183)" }}>
                        {" "}
                        {t("Employdata.address_residence")}
                      </p>

                      <div className="userProfileView__container__details__detailsBox__feilds__container">
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            placeholder={`${t("Employdata.number_house")}`}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            placeholder={`${t("Employdata.street")}`}
                          />
                        </div>
                      </div>
                      <div className="userProfileView__container__details__detailsBox__feilds__container">
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            placeholder={`${t("Employdata.postal_code")}`}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input type="text" placeholder={`${t("Employdata.city")}`} />
                        </div>
                      </div>
                      <br />
                      {!(index === 0) && <button onClick={() => removeFields(index)}>Remove</button> }
                    </div>
                  </div>
                )
              })}
                  <button onClick={submit}>Submit</button>
                <button onClick={addFields}>{coInsuredMember.length > 0 ? 'Add More..' : 'Add Co-Insured Member..' }</button>
              </div>
            {/* <div>
              <div
                className="landingPage__clientDeserve__container"
                style={{ alignItems: "start", display: "inline" }}
              >
                {showAddButton && (
                  <button
                    
                    onClick={handleAddMore}
                  >
                    Add more
                  </button>
                )}
              </div>

              {forms.map((form, index) => (
                <Form key={index} index={index} onDelete={() => handleDelete(index)} />
              ))}
            </div> */}
            <br />
            <div className="uploadClient__container__body__generalInfo">
              <p style={{ color: "#dd3333" }}> {t("Employdata.declaration")}</p>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <p style={{ textAlign: "justify" }}>
                  {t("Employdata.declaration_para1")}
                </p>
                <p>{t("Employdata.declaration_para2")}</p>
              </div>
            </div>
            <div
              className="landingPage__clientDeserve__container"
              style={{ width: "auto" }}
            >
              <Button> {t("Employdata.submit")}</Button>
            </div>{" "}
          </div>
        </div>
      </section>
    </Page>
  );
};

export default EmployDataForm;

