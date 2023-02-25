import React from 'react'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link, useNavigate } from 'react-router-dom';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Button } from '@mui/material';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <section className='sidebar'>
      <header className='sidebar__header'>
        <img className='sidebar__header__logo' src={require('../assets/CavitasLogo-img.png')} alt="" />
        <img className='sidebar__header__flag' src={require('../assets/EnglandFLag-img.jpg')} alt="" />
        <Link to="/signin">
          <LogoutOutlinedIcon className='sidebar__header__icon' />
        </Link>
      </header>
      <div className='sidebar__linkButtons'>
        <Link to="/dashboard" className='sidebar__linkButtons__link'>
          <HomeOutlinedIcon className='sidebar__linkButtons__link__icon' />
          <p>Dashboard</p>
        </Link>
        <Link to="/dashboard" className='sidebar__linkButtons__link'>
          <BusinessCenterOutlinedIcon className='sidebar__linkButtons__link__icon' />
          <p>Insured clients</p>
        </Link>
        <Link to="/dashboard" className='sidebar__linkButtons__link'>
          <TextSnippetOutlinedIcon className='sidebar__linkButtons__link__icon' />
          <p>Cavitas Documents</p>
        </Link>
        <Link to="/dashboard" className='sidebar__linkButtons__link'>
          <EmailOutlinedIcon className='sidebar__linkButtons__link__icon' />
          <p>Support</p>
        </Link>
        <Link to="/dashboard" className='sidebar__linkButtons__link'>
          <PersonOutlineOutlinedIcon className='sidebar__linkButtons__link__icon' />
          <p>User profile</p>
        </Link>
        <div className='sidebar__linkButtons__buttons'>
          <Button onClick={() => navigate("/uploadform")}>Upload new clients</Button>
          <Button>Get a Quote</Button>
        </div>
      </div>
    </section>
  )
}

export default Sidebar