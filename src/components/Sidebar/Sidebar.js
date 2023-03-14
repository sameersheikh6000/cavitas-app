import React from 'react'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link, useNavigate } from 'react-router-dom';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Button } from '@mui/material';
import useAuthenticate from '../../hooks/useAuthenticate';
import { USER_STORAGE_KEY } from '../../config/helpers/variables';

const Sidebar = () => {
  const navigate = useNavigate();
  const { userLogout } = useAuthenticate();
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));

  const handleLogout = async () => {
    const response = await userLogout(user);
    if (response.status == 200) {
      sessionStorage.removeItem(USER_STORAGE_KEY);
    }
    navigate("/")
  }

  return (
    <section className='sidebar'>
      <header className='sidebar__header'>
        <img className='sidebar__header__logo' src={require('../../assets/CavitasLogo-img.png')} alt="" />
        <img className='sidebar__header__flag' src={require('../../assets/EnglandFLag-img.jpg')} alt="" />
        <LogoutOutlinedIcon className='sidebar__header__icon' onClick={handleLogout} />
      </header>
      {user?.data?.role ?
        <div className='sidebar__linkButtons'>
          <Link to="/dashboard" className='sidebar__linkButtons__link'>
            <HomeOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>Dashboard</p>
          </Link>
          <Link to="/insuredclient/view" className='sidebar__linkButtons__link'>
            <BusinessCenterOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>Insured clients</p>
          </Link>
          <Link to="/cavitasdocs/view" className='sidebar__linkButtons__link'>
            <TextSnippetOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>Cavitas Documents</p>
          </Link>
          <Link to="/support/view" className='sidebar__linkButtons__link'>
            <EmailOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>Support Tickets</p>
          </Link>
          <Link to="/profile/user/view" className='sidebar__linkButtons__link'>
            <PersonOutlineOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>User profile</p>
          </Link>
          <div className='sidebar__linkButtons__buttons'>
            <Button onClick={() => navigate("/uploadclient")}>Upload new clients</Button>
            {/* <Button>Get a Quote</Button> */}
          </div>
        </div>
        :
        <div className='sidebar__linkButtons'>
          <Link to="/admin/dashboard" className='sidebar__linkButtons__link'>
            <HomeOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>Dashboard</p>
          </Link>
          <Link to="/admin/insuredclient/view" className='sidebar__linkButtons__link'>
            <BusinessCenterOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>Insured clients</p>
          </Link>
          <Link to="/admin/cavitasdocs/view" className='sidebar__linkButtons__link'>
            <TextSnippetOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>Cavitas Documents</p>
          </Link>
          <Link to="/admin/support/view" className='sidebar__linkButtons__link'>
            <EmailOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>Support</p>
          </Link>
          <Link to="/admin/profile/view" className='sidebar__linkButtons__link'>
            <PersonOutlineOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>User profile</p>
          </Link>
          <div className='sidebar__linkButtons__buttons'>
            <Button onClick={() => navigate("/admin/uploadclient")}>Upload new clients</Button>
            {/* <Button>Get a Quote</Button> */}
          </div>
        </div>
      }
    </section>
  )
}

export default Sidebar