import { Button } from '@mui/material'
import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const UserProfile = () => {
  return (
    <section className='userProfile'>
      <header className='userProfile__header'>
        <div className='userProfile__header__iconBox'>
          < PersonOutlineOutlinedIcon lassName='userProfile__header__iconBox__icon' />
          <p>User Profile</p>
        </div>
        <Button size='small'>Update</Button>
      </header>
      <div className='userProfile__details'>
        <div className='userProfile__details__detailsBox'>
          <p>Broker Company: XXXX</p>
          <p>Address: XXXX</p>
        </div>
        <div className='userProfile__details__detailsBox'>
          <p>First Name: XXXX</p>
          <p>Last Name: XXXX</p>
        </div>
        <div className='userProfile__details__detailsBox'>
          <p>Email Address: XXXX</p>
          <p>Phone Number: XXXX</p>
        </div>
        <div className='userProfile__details__detailsBox'>
          <p>Reg. No: XXXX</p>
        </div>
      </div>
    </section>
  )
}

export default UserProfile