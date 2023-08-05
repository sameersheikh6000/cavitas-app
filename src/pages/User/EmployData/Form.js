import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../config/helpers/i18n";

const Form = ({ onDelete }) => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const [familyMember, setFamilyMember] = useState("");
  const [forms, setForms] = useState([]);

  const handleAddMore = () => {
    setForms((prevForms) => [...prevForms, {}]);
  };

  const handleDelete = (index) => {
    setForms((prevForms) => prevForms.filter((form, i) => i !== index));
  };

  const handleFamilyMemberChange = (event) => {
    setFamilyMember(event.target.value);
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang === "pl" ? lang : "en");
  }, []);

  return (
    <div className="uploadClient__container__body__generalInfo">
      <br />
      <p style={{ fontWeight: "bold" }}>
        1. {t("Employdata.coinsured_member")}
      </p>
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
          <input type="text" placeholder={`${t("Employdata.mobile")}`} />
        </div>
      </div>
      <p style={{ color: "rgb(151 183 183)" }}> {t("Employdata.gender")}</p>
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
          <input type="text" placeholder={`${t("Employdata.number_house")}`} />
        </div>
        <div style={{ width: "49%" }}>
          <input type="text" placeholder={`${t("Employdata.street")}`} />
        </div>
      </div>
      <div className="userProfileView__container__details__detailsBox__feilds__container">
        <div style={{ width: "49%" }}>
          <input type="text" placeholder={`${t("Employdata.postal_code")}`} />
        </div>
        <div style={{ width: "49%" }}>
          <input type="text" placeholder={`${t("Employdata.city")}`} />
        </div>
      </div>
      <div
        className="landingPage__clientDeserve__container"
        style={{ alignItems: "start", display: "inline" }}
      >
        <button style={{ width: "auto", border: "none" }} onClick={onDelete}>
          Delete this form
        </button>{" "}
        &nbsp;
        <button
          style={{ width: "auto", border: "none" }}
          onClick={handleAddMore}
        >
          Add more
        </button>
      </div>
      {/* <button onClick={() => handleDelete(forms.length - 1)}>Delete</button> */}
      {forms.map((form, index) => (
        <Form key={index} onDelete={() => handleDelete(index)} />
      ))}
    </div>
  );
};

export default Form;
