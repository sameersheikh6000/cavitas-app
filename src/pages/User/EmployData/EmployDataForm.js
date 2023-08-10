import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import i18n from "../../../config/helpers/i18n";
import Page from "../../../components/Page/Page";
import { useLocation } from "react-router-dom";
import useEmployData from "../../../hooks/useEmployData";
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';

const EmployDataForm = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split('/').pop().split('?')[0]
  const { t } = useTranslation();
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const { getEmployDataByEmail } = useEmployData();
  
  //States
  const [errorMessage, setErrorMessage] = useState('');
  const [gender, setGender] = useState("");
  const [familyType, setFamilyType] = useState("");
  const [familyMember, setFamilyMember] = useState("");
  const [insuredClientData, setInsuredClientData] = useState({})
  const [employData, setEmployData] = useState({
    company_name: "",
    insurance_plan: "",
    first_name: "",
    last_name: "",
    pesel_number: "",
    email: "",
    phone_number: "",
    gender: "",
    house_number: "",
    street_name: "",
    postal_code: "",
    city: ""
  })
  
  const [coInsuredMember, setCoInsuredMember] = useState([
    { 
      relation: "", 
      first_name: "" ,
      last_name: "",
      pesel_number: "",
      email: "",
      phone_number: "",
      gender: 0,
      house_number: "",
      street_name: "",
      postal_code: "",
      city: ""
    },
  ]);
  
  //Methods
  const addFields = () => {
    let newCoInsuredMember = { 
      relation: "", 
      first_name: "" ,
      last_name: "",
      pesel_number: "",
      email: "",
      phone_number: "",
      gender: 0,
      house_number: "",
      street_name: "",
      postal_code: "",
      city: "" 
    };
    setCoInsuredMember([...coInsuredMember, newCoInsuredMember]);
  };

  const submit = (e) => {
    e.preventDefault();
  };

  const removeFields = (index) => {
    let data = [...coInsuredMember];
    data.splice(index, 1);
    setCoInsuredMember(data);
  };
  
  const handleCoInsuredMemberChange = (index, e) => {
    let data = [...coInsuredMember];
    data[index][e.target.name] = e.target.value;
}

  const handleEmployDataChange = (e) => {
    const { name, value } = e.target;
    setEmployData((prevEmployData) => ({ ...prevEmployData, [name]: value }))
  }
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFamilyTypeChange = (event) => {
    setFamilyType(event.target.value);
  };

  const fetchEmployData =  async (email) => {
    const response = await getEmployDataByEmail(email)
    console.log(response)
    if(response?.status < 300){
      setInsuredClientData(response?.employ_data)
      console.log(insuredClientData)
    }
    else if(response?.status > 300){
      setErrorMessage(response?.message)
      setTimeout(() => {
        setErrorMessage('');
      }, 3000)
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split('/').pop().split('?')[0];
    lang && i18n.changeLanguage(lang === 'pl' ? 'pl' : 'en');
    fetchEmployData(email);
  }, [1]);

  //Body
  return (
    <Page>
      <AlertMessage errorMessage={errorMessage}/>
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
                name="company_name"
                value={insuredClientData?.company_name}
                placeholder={`${t("Employdata.company_name")}`}
                onChange={(e) => handleEmployDataChange(e)}
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
                value={insuredClientData?.insurance_plan}
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
                    name="first_name"
                    value={insuredClientData?.member_first_name}
                    placeholder={`${t("Employdata.firstnameemploy")}`}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="last_name"
                    value={insuredClientData?.member_last_name}
                    placeholder={`${t("Employdata.lastnameemploy")}`}
                  />
                </div>
              </div>

              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                name="pesel_number"
                value={insuredClientData?.member_pesel}
                placeholder={`${t("Employdata.peselno")}`}
              />
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="email"
                    name="email"
                    value={insuredClientData?.member_email}
                    placeholder="E-mail"
                    onChange={(e) => handleEmployDataChange(e)}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name='phone_number'
                    value={insuredClientData?.member_phone_number}
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
                  value={(insuredClientData?.member_gender && insuredClientData?.member_gender === 'M') ? 0 : 0 }
                  checked={(insuredClientData?.member_gender && insuredClientData?.member_gender === 'M')}
                  onChange={(e) => handleEmployDataChange(e)}
                />
                <label> {t("Employdata.man")}</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="gender"
                  value={(insuredClientData?.member_gender && insuredClientData?.member_gender === 'F') ? 1 : 1 }
                  checked={(insuredClientData?.member_gender && insuredClientData?.member_gender === 'F')}
                  onChange={(e) => handleEmployDataChange(e)}
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
                    name='house_number'
                    placeholder={`${t("Employdata.number_house")}`}
                    onChange={(e) => handleEmployDataChange(e)}
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
                    name="type_of_insurance"
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
                      <p>
                        {index + 1}. {t("Employdata.coinsured_member")}
                      </p>
                      <div className="uploadClient__container__body__participation__head">
                        <input
                          type="radio"
                          name="relation"
                          value="spousePartner"
                          onChange={(e) => handleCoInsuredMemberChange(index, e)}
                        />
                        <label> {t("Employdata.supose")}</label>
                      </div>
                      <div className="uploadClient__container__body__participation__head">
                        <input
                          type="radio"
                          name="relation"
                          value="childUpTo23"
                          onChange={(e) => handleCoInsuredMemberChange(index, e)}
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
                            onChange={(e) => handleCoInsuredMemberChange(index, e)}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            placeholder={`${t("Employdata.last_name")}`}
                            name="last_name"
                            onChange={(e) => handleCoInsuredMemberChange(index, e)}
                          />
                        </div>
                      </div>

                      <input
                        className="uploadClient__container__body__generalInfo__input"
                        type="text"
                        name="pesel_number"
                        placeholder={`${t("Employdata.pesel")}`}
                        onChange={(e) => handleCoInsuredMemberChange(index, e)}
                      />
                      <div className="userProfileView__container__details__detailsBox__feilds__container">
                        <div style={{ width: "49%" }}>
                          <input
                            type="email"
                            name="email"
                            placeholder={`${t("Employdata.email")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, e)}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            name='phone_number'
                            placeholder={`${t("Employdata.mobile")}`}
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
                          value={0} 
                          onChange={(e) => handleCoInsuredMemberChange(index, e)}
                          />
                        <label>{t("Employdata.man")}</label>
                      </div>
                      <div className="uploadClient__container__body__participation__head">
                        <input 
                          type="radio" 
                          name="gender" 
                          value={1} 
                          onChange={(e) => handleCoInsuredMemberChange(index, e)}
                          />
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
                            name='house_number'
                            disabled={true}
                            value={employData?.house_number}
                            placeholder={`${t("Employdata.number_house")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, e)}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            name="street_name"
                            disabled={true}
                            placeholder={`${t("Employdata.street")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, e)}
                          />
                        </div>
                      </div>
                      <div className="userProfileView__container__details__detailsBox__feilds__container">
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            name="postal_code"
                            disabled={true}
                            placeholder={`${t("Employdata.postal_code")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, e)}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            name="city"
                            disabled={true}
                            placeholder={`${t("Employdata.city")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, e)}
                          />
                        </div>
                      </div>

                      <br />

                      <div
                        className="landingPage__clientDeserve__container"
                        style={{ alignItems: "start", display: "inline" }}
                      >
                        {!(index === 0) && (
                          <button
                            style={{ width: "auto", border: "none" }}
                            onClick={() => removeFields(index)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div
                className="landingPage__clientDeserve__container"
                style={{ alignItems: "center" }}
              >
                <button
                  style={{ width: "auto", border: "none" }}
                  onClick={addFields}
                >
                  {coInsuredMember.length > 0
                    ? "Add More.."
                    : "Add Co-Insured Member.."}
                </button>
              </div>
            </div>
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
              style={{ width: "auto", textAlign: "center" }}
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
