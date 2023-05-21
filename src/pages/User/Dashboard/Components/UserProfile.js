import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { USER_STORAGE_KEY } from "../../../../config/helpers/variables";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, []);
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  return (
    <section className="dashboard__container__content__userProfile">
      <header className="dashboard__container__content__userProfile__header">
        <div className="dashboard__container__content__userProfile__header__iconBox">
          <PersonOutlineOutlinedIcon lassName="dashboard__container__content__userProfile__header__iconBox__icon" />
          <p>{t("Pannel_Dashboard.Userprofile")}</p>
        </div>
        <Button size="small" onClick={() => navigate("/profile/user/view")}>
          {t("Pannel_Dashboard_Userprofile.Update")}
        </Button>
      </header>
      <div className="dashboard__container__content__userProfile__details">
        <div className="dashboard__container__content__userProfile__details__detailsBox">
          <p>
            <b>{t("Pannel_registration.Firstname")}:</b>{" "}
            {user?.data?.first_name ? user?.data?.first_name : "NiL"}
          </p>
          <p>
            <b>{t("Pannel_registration.Lastname")}:</b>{" "}
            {user?.data?.last_name ? user?.data?.last_name : "NiL"}
          </p>
        </div>
        {user?.data?.role === "member" ? (
          <>
            <div className="dashboard__container__content__userProfile__details__detailsBox">
              <p>
                <b>{t("Pannel_Dashboard_Userprofile.Peselnumber")}:</b>{user?.data?.company_pesel_number}
              </p>
              <p>
                <b>{t("Pannel_Dashboard_Userprofile.Address")}</b>{" "}
                {user?.data?.company_address
                  ? user?.data?.company_address
                  : "N/A"}
              </p>
            </div>
            <div className="dashboard__container__content__userProfile__details__detailsBox">
              <p>
                <b>Email address: </b>{user?.data?.email}
              </p>
              <p>
                <b>{t("Pannel_registration.Phonenumber")}:</b>{" "}
                {user?.data?.phone_number ? user?.data?.phone_number : "N/A"}{" "}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="dashboard__container__content__userProfile__details__detailsBox">
              <p>
                <b>{t("Pannel_registration.Rolecompany")}:</b>{" "}
                {user?.data?.role ? user?.data?.role.toUpperCase() : "N/A"}
              </p>
              <p>
                <b>{t("Employer_Pannel_registration.companyname")}:</b>{" "}
                {user?.data?.company_name ? user?.data?.company_name : "N/A"}
              </p>
            </div>
            <div className="dashboard__container__content__userProfile__details__detailsBox">
              <p>
                <b>{t("Employer_Pannel_registration.companykrsname")}:</b>{" "}
                {user?.data?.company_krs_number
                  ? user?.data?.company_krs_number
                  : "N/A"}
              </p>
              <p>
                <b>Email Address:</b>{" "}
                {user?.data?.email ? user?.data?.email : "N/A"}
              </p>
            </div>
            <div className="dashboard__container__content__userProfile__details__detailsBox">
              <p>
                <b>{t("Pannel_registration.Phonenumber")}:</b>{" "}
                {user?.data?.phone_number ? user?.data?.phone_number : "N/A"}
              </p>
              <p>
                <b>{t("Pannel_Dashboard_Userprofile.Companylocation")}</b>{" "}
                {user?.data?.company_address
                  ? user?.data?.company_address
                  : "N/A"}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default UserProfile;
