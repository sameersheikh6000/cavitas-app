import { Button } from '@mui/material'
import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { USER_STORAGE_KEY } from '../../../../config/helpers/variables';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  return (
    <section className='dashboard__container__content__userProfile'>
      <header className='dashboard__container__content__userProfile__header'>
        <div className='dashboard__container__content__userProfile__header__iconBox'>
          < PersonOutlineOutlinedIcon lassName='dashboard__container__content__userProfile__header__iconBox__icon' />
          <p>User Profile</p>
        </div>
        <Button size='small' onClick={() => navigate("/profile/user/view")} >Update</Button>
      </header>
      <div className='dashboard__container__content__userProfile__details'>
        <div className='dashboard__container__content__userProfile__details__detailsBox'>
          <p><b>First Name:</b> {user?.data?.first_name ? user?.data?.first_name : "NiL"}</p>
          <p><b>Last Name:</b> {user?.data?.last_name ? user?.data?.last_name : "NiL"}</p>
        </div>
        {user?.data?.role === "member" ?
          <>
            <div className='dashboard__container__content__userProfile__details__detailsBox'>
              <p><b>PESEL number:</b> </p>
              <p><b>Address:</b> { user?.data?.company_address ? user?.data?.company_address : "N/A"}</p>
            </div>
            <div className='dashboard__container__content__userProfile__details__detailsBox'>
              <p><b>Email address:</b> </p>
              <p><b>Phone number:</b> {user?.data?.phone_number ? user?.data?.phone_number : "N/A"} </p>
            </div>
          </>
          :
          <>
            <div className='dashboard__container__content__userProfile__details__detailsBox'>
              <p><b>Role in Company:</b> { user?.data?.role ? user?.data?.role.toUpperCase() : "N/A" }</p>
              <p><b>Company Name:</b> { user?.data?.company_name ? user?.data?.company_name : "N/A"  }</p>
            </div>
            <div className='dashboard__container__content__userProfile__details__detailsBox'>
              <p><b>Company KRS Number:</b> { user?.data?.company_krs_number ? user?.data?.company_krs_number : "N/A"}</p>
              <p><b>Email Address:</b> {user?.data?.email ? user?.data?.email : "N/A"}</p>
            </div>
            <div className='dashboard__container__content__userProfile__details__detailsBox'>
              <p><b>Phone Number:</b> {user?.data?.phone_number ? user?.data?.phone_number : "N/A"}</p>
              <p><b>Company Location:</b> {user?.data?.company_address ? user?.data?.company_address : "N/A"}</p>
            </div>
          </>
        }
      </div>
    </section>
  )
}

export default UserProfile