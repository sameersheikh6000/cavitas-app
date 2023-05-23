

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
  const current_user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  const [profile, setProfile] = useState({})
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState("");
  const { getUserByAdmin, updateUser } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await updateUser(profile);
    if (response.status < 300) {
      setSuccessMessage(`${t("Pannel_Dashboard_Supporttickets.done")}`)
      setTimeout(() => {
        navigate(`/dashboard/${lang == "pl" ? lang : "en"}`)
      }, 3000);
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }

  const getUser = async () => {
    debugger
    const response = await getUserByAdmin(current_user?.data?.id)
    if (response?.status < 300 ) {
      setProfile(response?.user)
    } else if (response?.status > 300 ) {
      setErrorMessage(response?.message)
    }
  }

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
    getUser()
  }, [])

  return (
    <Page>
      <SuccessMessage successMessage={successMessage}/>
      <AlertMessage errorMessage={errorMessage} />
      <section className='userProfileView'>
        <div className='userProfileView__top'>
          <div className='userProfileView_top_left'>
            < PersonOutlineOutlinedIcon className='userProfileView_topleft_icon' />
            <p>{t("Pannel_Dashboard.Userprofile")}</p>
          </div>
          <div className='userProfileView_top_right'>
            <Button onClick={(e) => handleSubmit(e)}><SaveOutlinedIcon className='userProfileView_topright_icon' />
            {t("Pannel_Dashboard_Supporttickets.Save")}
</Button>
          </div>
        </div>
        <div className='userProfileView__container'>
          <header className='userProfileView_container_header'>
            <div className='userProfileView_containerheader_iconBox'>
              < PersonOutlineOutlinedIcon lassName='userProfileView_containerheadericonBox_icon' />
              <p>{t("Pannel_Dashboard.Userprofile")}</p>
            </div>
          </header>
          <div className='userProfileView_container_details'>
            <div className='userProfileView_containerdetails_detailsBox'>
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
            {current_user?.data?.role === "member" ?
              <div className='userProfileView_containerdetails_detailsBox'>
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
                <div className='userProfileView_containerdetails_detailsBox'>
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
                <div className='userProfileView_containerdetails_detailsBox'>
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
            <div className='userProfileView_containerdetails_detailsBox'>
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
            <div className='userProfileView_containerdetails_detailsBox'>
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