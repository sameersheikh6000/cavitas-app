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
          <p>Broker Company: {user?.data?.company_name ? user?.data?.company_name : "NiL"}</p>
          <p>Address: {user?.data?.company_address ? user?.data?.company_address : "NiL"}</p>
        </div>
        <div className='dashboard__container__content__userProfile__details__detailsBox'>
          <p>First Name: {user?.data?.first_name ? user?.data?.first_name : "NiL"}</p>
          <p>Last Name: {user?.data?.last_name ? user?.data?.last_name : "NiL"}</p>
        </div>
        <div className='dashboard__container__content__userProfile__details__detailsBox'>
          <p>Email Address: {user?.data?.email ? user?.data?.email : "NiL"}</p>
          <p>Phone Number: {user?.data?.phone_number ? user?.data?.phone_number : "NiL"}</p>
        </div>
        <div className='dashboard__container__content__userProfile__details__detailsBox'>
          <p>Reg. No: {user?.data?.id}</p>
        </div>
      </div>
    </section>
  )
}

export default UserProfile