import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../config/helpers/i18n";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { USER_STORAGE_KEY } from "../../../../config/helpers/variables";
import { useNavigate } from "react-router-dom";
import useUsers from "../../../../hooks/useUsers";
import AlertMessage from '../../../../components/SnackbarMessages/AlertMessage';

const UserProfile = () => {
  const { getUserByAdmin } = useUsers()
  const currentUrl = window.location.href;
  const [user, setUser] = useState();
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ errorMessage, setErrorMessage ] = useState('')
  const current_user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));


  const getUser = async () => {
    const response = await getUserByAdmin(current_user?.data?.id)
    if (response?.status < 300 ) {
      setUser(response?.user)
    }else if (response?.status > 300 ) {
      setErrorMessage(response?.message)
    }
  }
  useEffect(() => {
    getUser()
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, []);

  return (
    <section className="dashboard__container__content__userProfile">
      <AlertMessage errorMessage={errorMessage} />
      <header className="dashboard__container__content__userProfile__header">
        <div className="dashboard__container__content__userProfile__header__iconBox">
          <PersonOutlineOutlinedIcon lassName="dashboard__container__content__userProfile__header__iconBox__icon" />
          <p>{t("Pannel_Dashboard.Userprofile")}</p>
        </div>
        <Button size="small" onClick={() => navigate(`/profile/user/view/${lang == "pl" ? lang : "en"}`)}>
          {t("Pannel_Dashboard_Userprofile.Update")}
        </Button>
      </header>
      <div className="dashboard__container__content__userProfile__details">
        <div className="dashboard__container__content__userProfile__details__detailsBox">
          <p>
            <b>{t("Registration.Firstname")}:</b>{" "}
            {user?.first_name ? user?.first_name : "NiL"}
          </p>
          <p>
            <b>{t("Registration.Lastname")}:</b>{" "}
            {user?.last_name ? user?.last_name : "NiL"}
          </p>
        </div>
        {user?.role === "member" ? (
          <>
            <div className="dashboard__container__content__userProfile__details__detailsBox">
              <p>
                <b>{t("Pannel_Dashboard_Userprofile.Peselnumber")}:</b>{user?.company_pesel_number}
              </p>
              {/* <p>
                <b>{t("Pannel_Dashboard_Userprofile.Address")}</b>{" "}
                {user?.company_address
                  ? user?.company_address
                  : "N/A"}
              </p> */}
            {/* </div>
            <div className="dashboard__container__content__userProfile__details__detailsBox"> */}
              <p>
                <b>Email address: </b>{user?.email}

              </p>
              {/* <p>
                <b>{t("Pannel_registration.Phonenumber")}:</b>{" "}
                {user?.phone_number ? user?.phone_number : "N/A"}{" "}
              </p> */}
            </div>
          </>
        ) : (
          <>
            <div className="dashboard__container__content__userProfile__details__detailsBox">
              <p>
                <b>{t("Pannel_registration.Rolecompany")}:</b>{" "}
                {user?.role ? user?.role.toUpperCase() : "N/A"}
              </p>
              <p>
                <b>{t("Employer_Pannel_registration.companyname")}:</b>{" "}
                {user?.company_name ? user?.company_name : "N/A"}
              </p>
            </div>
            <div className="dashboard__container__content__userProfile__details__detailsBox">
              <p>
                <b>{t("Employer_Pannel_registration.companykrsname")}:</b>{" "}
                {user?.company_krs_number
                  ? user?.company_krs_number
                  : "N/A"}
              </p>
              <p>
                <b>Email address:</b>{" "}
                {user?.email ? user?.email : "N/A"}

              </p>
            </div>
            <div className="dashboard__container__content__userProfile__details__detailsBox">
              <p>
                <b>{t("Registration.Phonenumber")}:</b>{" "}
                {user?.phone_number ? user?.phone_number : "N/A"}
              </p>
              <p>
                <b>{t("Pannel_Dashboard_Userprofile.Companylocation")}</b>{" "}
                {user?.company_address
                  ? user?.company_address
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
