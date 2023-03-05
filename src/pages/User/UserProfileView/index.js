import { Button } from '@mui/material'
import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { USER_STORAGE_KEY } from '../../../config/helpers/variables';
import Page from '../../../components/Page/Page';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const userProfileView = () => {

  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));

  return (
    <Page>
      <section className='userProfileView'>
        <div className='userProfileView__top'>
          <div className='userProfileView__top__left'>
            < PersonOutlineOutlinedIcon className='userProfileView__top__left__icon' />
            <p>User Profile</p>
          </div>
          <div className='userProfileView__top__right'>
            <Button><SaveOutlinedIcon className='userProfileView__top__right__icon' />
              Save changes</Button>
          </div>
        </div>
        <div className='userProfileView__container'>
          <header className='userProfileView__container__header'>
            <div className='userProfileView__container__header__iconBox'>
              < PersonOutlineOutlinedIcon lassName='userProfileView__container__header__iconBox__icon' />
              <p>User Profile</p>
            </div>
          </header>
          <div className='userProfileView__container__details'>
            <div className='userProfileView__container__details__detailsBox'>
              <div><input type="text" placeholder='First name' /></div>
              <div><input type="text" placeholder='Last name' /></div>
            </div>
            <div className='userProfileView__container__details__detailsBox'>
              <div><input type="text" placeholder='ID code' /></div>
              <div><input type="text" placeholder='Address' /></div>
            </div>
            <div className='userProfileView__container__details__detailsBox'>
              <div><input type="email" placeholder='Email address' /></div>
              <div><input type="text" placeholder='Phone number' /></div>
            </div>
            <div className='userProfileView__container__details__detailsBox'>
              <div><input type="password" placeholder='Password' /></div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default userProfileView