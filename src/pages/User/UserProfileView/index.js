import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../config/helpers/i18n';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { USER_STORAGE_KEY } from '../../../config/helpers/variables';
import Page from '../../../components/Page/Page';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import useUsers from '../../../hooks/useUsers';
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import SuccessMessage from "../../../components/SnackbarMessages/SuccessMessage";
import { useNavigate } from 'react-router-dom';

const UserProfileView = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  const [profile, setProfile] = useState(user?.data)
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState("");
  const { updateUser } = useUsers();
  const navigate = useNavigate();
  console.warn(profile)

  const handleSubmit = async e => {
    e.preventDefault();
    debugger
    const response = await updateUser(profile);
    if (response.status < 300) {
      setSuccessMessage("Updated Successfully!")
      setTimeout(() => {
        navigate("/dashboard")
      }, 3000);
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }

  return (
    <Page>
      <SuccessMessage successMessage={successMessage}/>
      <AlertMessage errorMessage={errorMessage} />
      <section className='userProfileView'>
        <div className='userProfileView__top'>
          <div className='userProfileView__top__left'>
            < PersonOutlineOutlinedIcon className='userProfileView__top__left__icon' />
            <p>{t("Pannel_Dashboard.Userprofile")}</p>
          </div>
          <div className='userProfileView__top__right'>
            <Button onClick={(e) => handleSubmit(e)}><SaveOutlinedIcon className='userProfileView__top__right__icon' />
            {t("Pannel_Dashboard_Supporttickets.Save")}              
</Button>
          </div>
        </div>
        <div className='userProfileView__container'>
          <header className='userProfileView__container__header'>
            <div className='userProfileView__container__header__iconBox'>
              < PersonOutlineOutlinedIcon lassName='userProfileView__container__header__iconBox__icon' />
              <p>{t("Pannel_Dashboard.Userprofile")}</p>
            </div>
          </header>
          <div className='userProfileView__container__details'>
            <div className='userProfileView__container__details__detailsBox'>
              <div><input
                type="text"
                placeholder={`${t("Pannel_registration.Firstname")}`} 
                value={profile?.first_name}
                onChange={(e) => setProfile({ ...profile, first_name: e.target.value })}
              /></div>
              <div><input
                type="text"
                placeholder={`${t("Pannel_registration.Lastname")}`} 
                value={profile?.last_name}
                onChange={(e) => setProfile({ ...profile, last_name: e.target.value })}
              />
              </div>
            </div>
            {user?.data?.role === "member" ?
              <div className='userProfileView__container__details__detailsBox'>
                <div><input
                  type="text"
                  placeholder={`${t("Pannel_Dashboard_Userprofile.Peselnumber")}`} 
                  value={profile?.company_pesel_number}
                  onChange={(e) => setProfile({ ...profile, company_pesel_number: e.target.value })}
                />
                </div>
                <div><input
                  type="text"
                  placeholder={`${t("Pannel_Dashboard_Userprofile.Address")}`} 
                  value={profile?.company_address}
                  onChange={(e) => setProfile({ ...profile, company_address: e.target.value })}
                />
                </div>
              </div>
              :
              <>
                <div className='userProfileView__container__details__detailsBox'>
                  <div><input
                    type="text"
                    placeholder='Role in company'
                    value={profile?.role}
                    disabled="true"
                  />
                  </div>
                  <div><input
                    type="text"
                    placeholder={`${t("Employer_Pannel_registration.companyname")}`}               
                    value={profile?.company_name}
                    onChange={(e) => setProfile({ ...profile, company_name: e.target.value })}
                  />
                  </div>
                </div>
                <div className='userProfileView__container__details__detailsBox'>
                  <div><input
                    type="text"
                    placeholder={`${t("Employer_Pannel_registration.companykrsname")}`}               
                    value={profile?.company_krs_number}
                    onChange={(e) => setProfile({ ...profile, company_krs_number: e.target.value })}
                  />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={`${t("Employer_Pannel_registration.companyURLaddress")}`}               
                      value={profile?.company_address}
                      onChange={(e) => setProfile({ ...profile, company_address: e.target.value })}

                    />
                  </div>
                </div>
              </>
            }
            <div className='userProfileView__container__details__detailsBox'>
              <div><input
                type="text"
                value={profile?.phone_number}
                onChange={(e) => setProfile({ ...profile, phone_number: e.target.value })}
                placeholder={`${t("Pannel_registration.Phonenumber")}`} 
                />
              </div>
              <div><input
                type="text"
                value={profile?.email}
                disabled="true"
              />
              </div>
            </div>
            <div className='userProfileView__container__details__detailsBox'>
              <div><input
                type="text"
                placeholder={`${t("Pannel_Dashboard_Supporttickets.Password")}`}               
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
              />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={`${t("Pannel_Dashboard_Supporttickets.Confirmpassword")}`}               
                  onChange={(e) => setProfile({ ...profile, confirm_password: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default UserProfileView