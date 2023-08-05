import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import i18n from "../../../config/helpers/i18n";
import Page from "../../../components/Page/Page";
import { useLocation, useNavigate } from "react-router-dom";
import useEmployData from "../../../hooks/useEmployData";
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import SuccessMessage from '../../../components/SnackbarMessages/SuccessMessage';

const EmployDataForm = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split('/').pop().split('?')[0]
  const { t } = useTranslation();
  
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const { getEmployDataByEmail, submitEmployData } = useEmployData();
  
  //States
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [employData, setEmployData] = useState({
    company_name: "",
    insurance_plan: "",
    first_name: "",
    last_name: "",
    member_pesel: "",
    email: "",
    phone_number: "",
    gender: '',
    house_number: "",
    street_name: "",
    postal_code: "",
    city_name: "",
    monthly_premium: 0,
    number_of_employ: "",
    relational_status: "",
    insured_client_id: null,
  })
  
  const [coInsuredMember, setCoInsuredMember] = useState([{
    relation: "", 
      first_name: "" ,
      last_name: "",
      pesel_number: "",
      email: "",
      phone_number: "",
      gender: '',
      house_number: "",
      street_name: "",
      postal_code: "",
      city: ""
  }]);
  
  //Methods
  const addFields = () => {
    let newCoInsuredMember = { 
      relation: "", 
      first_name: "" ,
      last_name: "",
      pesel_number: "",
      email: "",
      phone_number: "",
      gender: '',
      house_number: "",
      street_name: "",
      postal_code: "",
      city: "" 
    };
    setCoInsuredMember([...coInsuredMember, newCoInsuredMember]);
  };

  const removeFields = (index) => {
    let data = [...coInsuredMember];
    data.splice(index, 1);
    setCoInsuredMember(data);
  };
  
  const handleCoInsuredMemberChange = (index, fieldname, e) => {
    const { value } = e.target;
    let updatedCoInsuredMembers = [...coInsuredMember]; 
    updatedCoInsuredMembers[index][fieldname] = value; 
    setCoInsuredMember(updatedCoInsuredMembers);
  };


  const handleEmployDataChange = (e) => {
    const { name, value } = e.target;
    setEmployData((prevEmployData) => ({ ...prevEmployData, [name]: value }))
    
    if(name === 'house_number'){
      const updatedCoInsuredMembers = coInsuredMember.map((member) => ({
        ...member,
        house_number: value,
      }));
      setCoInsuredMember(updatedCoInsuredMembers);
    }
    else if(name === 'street_name'){
      const updatedCoInsuredMembers = coInsuredMember.map((member) => ({
        ...member,
        street_name: value,
      }));
      setCoInsuredMember(updatedCoInsuredMembers);
    }
    else if(name === 'postal_code'){
      const updatedCoInsuredMembers = coInsuredMember.map((member) => ({
        ...member,
        postal_code: value,
      }));
      setCoInsuredMember(updatedCoInsuredMembers);
    }
    else if(name === 'city_name'){
      const updatedCoInsuredMembers = coInsuredMember.map((member) => ({
        ...member,
        city: value,
      }));
      setCoInsuredMember(updatedCoInsuredMembers);
    }
  }

  const fetchEmployData = async (email) => {
    const response = await getEmployDataByEmail(email);
    if (response && response?.status < 300) {
      setEmployData((prevEmployData) => ({
        ...prevEmployData,
        insured_client_id: response?.employ_data?.id,
        company_name: response?.employ_data?.company_name,
        first_name: response?.employ_data?.member_first_name,
        last_name: response?.employ_data?.member_last_name,
        member_pesel: response?.employ_data?.member_pesel,
        email: response?.employ_data?.member_email,
        gender: response?.employ_data?.member_gender,
        phone_number: response?.employ_data?.member_phone_number,
        relational_status: response?.employ_data?.family_scope,
        insurance_plan: response?.employ_data?.insurance_plan,
      }));
      console.log({...employData}) 
    } else if (response?.status > 300) {
      setErrorMessage(response?.message);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await submitEmployData(employData, coInsuredMember)
    if(response && response?.status < 300){
      setSuccessMessage('Thank You For Providing Additional Information');
      setTimeout(() => {
        setSuccessMessage('');
        navigate(`/${lang === 'pl' ? 'pl' : 'en'}`)
      }, 3000)
    }
    else if(response && response?.status > 300){
      setErrorMessage(response?.message)
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split('/').pop().split('?')[0];
    lang && i18n.changeLanguage(lang === 'pl' ? 'pl' : 'en');
    fetchEmployData(email);
  }, [1]);

  //Body
  return (
    <Page>
      <SuccessMessage successMessage={successMessage} />
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
                value={employData?.company_name}
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
                disabled={true}
                value={employData?.insurance_plan}
                placeholder={`${t("Employdata.Insurance plan")}`}
                onChange={(e) => handleEmployDataChange(e)}
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
                    value={employData?.first_name}
                    placeholder={`${t("Employdata.firstnameemploy")}`}
                    onChange={(e) => handleEmployDataChange(e)}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="last_name"
                    value={employData?.last_name}
                    placeholder={`${t("Employdata.lastnameemploy")}`}
                    onChange={(e) => handleEmployDataChange(e)}
                  />
                </div>
              </div>

              <input
                className="uploadClient__container__body__generalInfo__input"
                type="text"
                name="member_pesel"
                value={employData?.member_pesel}
                placeholder={`${t("Employdata.peselno")}`}
                onChange={(e) => handleEmployDataChange(e)}
              />
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="email"
                    name="email"
                    value={employData?.email}
                    placeholder="E-mail"
                    onChange={(e) => handleEmployDataChange(e)}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name='phone_number'
                    value={employData?.phone_number}
                    placeholder={`${t("Employdata.Mobile_number")}`}
                    onChange={(e) => handleEmployDataChange(e)}
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
                  value='M'
                  checked={employData?.gender === 'M'}
                  onClick={(e) => handleEmployDataChange(e)}
                />
                <label> {t("Employdata.man")}</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="gender"
                  value='F'
                  checked={employData?.gender === 'F'}
                  onClick={(e) => handleEmployDataChange(e)}
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
                    name='street_name'
                    placeholder={`${t("Employdata.street")}`}
                    onChange={(e) => handleEmployDataChange(e)}
                  />
                </div>
              </div>
              <div className="userProfileView__container__details__detailsBox__feilds__container">
                <div style={{ width: "49%" }}>
                  <input
                    type="text"
                    name="postal_code"
                    placeholder={`${t("Employdata.postal_code")}`}
                    onChange={(e) => handleEmployDataChange(e)}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <input 
                    type="text" 
                    placeholder={`${t("Employdata.city")}`} 
                    name="city_name"
                    onChange={(e) => handleEmployDataChange(e)}
                  />
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
                  name="relational_status"
                  value='EMP'
                  checked={employData?.relational_status === 'EMP'}
                  onClick={(e) => handleEmployDataChange(e)}
                />

                <label> {t("Employdata.employ_only")}</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="relational_status"
                  value='COU'
                  checked={employData?.relational_status === 'COU'}
                  onClick={(e) => handleEmployDataChange(e)}
                />
                <label> {t("Employdata.couple")}</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="relational_status"
                  value='FAM'
                  checked={employData?.relational_status === 'FAM'}
                  onClick={(e) => handleEmployDataChange(e)}
                />
                <label> {t("Employdata.family_couple")}</label>
              </div>
              <div className="uploadClient__container__body__participation__head">
                <input
                  type="radio"
                  name="relational_status"
                  value='OPF'
                  checked={employData?.relational_status === 'OPF'}
                  onClick={(e) => handleEmployDataChange(e)}
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
                          name={`relation-${index}`}
                          value={0}
                          onClick={(e) => handleCoInsuredMemberChange(index, 'relation', e)}
                        />
                        <label> {t("Employdata.supose")}</label>
                      </div>
                      <div className="uploadClient__container__body__participation__head">
                        <input
                          type="radio"
                          name={`relation-${index}`}
                          value={1}
                          onClick={(e) => handleCoInsuredMemberChange(index, 'relation', e)}
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
                            name={`first_name-${index}`}
                            placeholder={`${t("Employdata.first_name")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, 'first_name', e)}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            placeholder={`${t("Employdata.last_name")}`}
                            name={`last_name-${index}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, 'last_name', e)}
                          />
                        </div>
                      </div>

                      <input
                        className="uploadClient__container__body__generalInfo__input"
                        type="text"
                        name={`pesel_number-${index}`}
                        placeholder={`${t("Employdata.pesel")}`}
                        onChange={(e) => handleCoInsuredMemberChange(index, 'pesel_number', e)}
                      />
                      <div className="userProfileView__container__details__detailsBox__feilds__container">
                        <div style={{ width: "49%" }}>
                          <input
                            type="email"
                            name={`email-${index}`}
                            placeholder={`${t("Employdata.email")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, 'email', e)}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            name={`phone_number-${index}`}
                            placeholder={`${t("Employdata.mobile")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, 'phone_number', e)}
                          />
                        </div>
                      </div>
                      <p style={{ color: "rgb(151 183 183)" }}>
                        {t("Employdata.gender")}
                      </p>
                      <div className="uploadClient__container__body__participation__head">
                        <input
                          type="radio"
                          name={`gender-${index}`}
                          value={0}
                          
                          onChange={(e) => handleCoInsuredMemberChange(index, 'gender', e)}
                        />
                        <label>{t("Employdata.man")}</label>
                      </div>
                      <div className="uploadClient__container__body__participation__head">
                        <input
                          type="radio"
                          name={`gender-${index}`}
                          value={1}
                          
                          onChange={(e) => handleCoInsuredMemberChange(index, 'gender', e)}
                        />
                        <label>{t("Employdata.woman")}</label>
                      </div>
                      <p style={{ color: "rgb(151 183 183)" }}>
                        {t("Employdata.address_residence")}
                      </p>

                      <div className="userProfileView__container__details__detailsBox__feilds__container">
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            name={`house_number-${index}`}
                            disabled={true}
                            value={employData?.house_number}
                            placeholder={`${t("Employdata.number_house")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, 'house_number', e)}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            name={`street_name-${index}`}
                            disabled={true}
                            value={employData?.street_name}
                            placeholder={`${t("Employdata.street")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, 'street_name', e)}
                          />
                        </div>
                      </div>
                      <div className="userProfileView__container__details__detailsBox__feilds__container">
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            name={`postal_code-${index}`}
                            disabled={true}
                            value={employData?.postal_code}
                            placeholder={`${t("Employdata.postal_code")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, 'postal_code', e)}
                          />
                        </div>
                        <div style={{ width: "49%" }}>
                          <input
                            type="text"
                            name={`city-${index}`}
                            disabled={true}
                            value={employData?.city_name}
                            placeholder={`${t("Employdata.city")}`}
                            onChange={(e) => handleCoInsuredMemberChange(index, 'city', e)}
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
              {/* <button onClick={() => handleDelete(forms.length - 1)}>Delete</button> */}
              {forms.map((form, index) => (
                <Form key={index} onDelete={() => handleDelete(index)} />
              ))}
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
              <Button 
                onClick={(e) => handleSubmit(e)}
              > {t("Employdata.submit")}</Button>
            </div>{" "}
          </div>
        </div>
      </section>
    </Page>
  );
};

export default EmployDataForm;
