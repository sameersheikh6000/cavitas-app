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
          <p>Broker Company: XXXX</p>
          <p>Address: XXXX</p>
        </div>
        <div className='dashboard__container__content__userProfile__details__detailsBox'>
          <p>First Name: XXXX</p>
          <p>Last Name: XXXX</p>
        </div>
        <div className='dashboard__container__content__userProfile__details__detailsBox'>
          <p>Email Address: {user?.data?.email}</p>
          <p>Phone Number: XXXX</p>
        </div>
        <div className='dashboard__container__content__userProfile__details__detailsBox'>
          <p>Reg. No: XXXX</p>
        </div>
      </div>
    </section>
  )
}

export default UserProfile