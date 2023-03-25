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
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

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
          {user?.data?.role === "broker" ?
            <></>
            :
            // <Link to="/admin/PolicyInformation" className='sidebar__linkButtons__link'>
                          <Link to="/insuredclient/group" className='sidebar__linkButtons__link'>

              <GppGoodOutlinedIcon className='sidebar__linkButtons__link__icon' />
              <p>Policy information</p>
            </Link>
          }
          {user?.data?.role === "broker" &&
            <>
              <Link to="/insuredclient/view" className='sidebar__linkButtons__link'>
                <BusinessCenterOutlinedIcon className='sidebar__linkButtons__link__icon' />
                <p>Insured clients</p>
              </Link>
              <Link to="/cavitasdocs/view" className='sidebar__linkButtons__link'>
                <TextSnippetOutlinedIcon className='sidebar__linkButtons__link__icon' />
                <p>Cavitas Documents</p>
              </Link>
            </>
          }
          <Link to="/support/view" className='sidebar__linkButtons__link'>
            <EmailOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>Support tickets</p>
          </Link>
          <Link to="/profile/user/view" className='sidebar__linkButtons__link'>
            <PersonOutlineOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>User profile</p>
          </Link>
          <div className='sidebar__linkButtons__buttons'>
            {user?.data?.role === "broker" &&
              <Button onClick={() => navigate("/uploadclient")}>Upload new clients</Button>
            }
            {user?.data?.role === "employ" &&
              <Button onClick={() => navigate("/uploadclient")}>Upload new insured persons</Button>
            }
            {user?.data?.role === "member" &&
              <Button onClick={() => navigate("/dashboard")}>Submit a claim</Button>
            }
            {/* <Button>Get a Quote</Button> */}
          </div>
        </div>
        :
        <div className='sidebar__linkButtons'>
          <Link to="/admin" className='sidebar__linkButtons__link'>
            <HomeOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>Dashboard</p>
          </Link>
          <Link to="/admin/PannelData" className='sidebar__linkButtons__link'>
            <BusinessCenterOutlinedIcon className='sidebar__linkButtons__link__icon' />
            {/* <p>Insured clients</p> */}
            <p>Pannel Data</p>
          </Link>
          <Link to="/admin/ApprovalFile" className='sidebar__linkButtons__link'>
            <TextSnippetOutlinedIcon className='sidebar__linkButtons__link__icon' />
            {/* <p>Cavitas Documents</p> */}
            <p>Approval File</p>
          </Link>

          

          <Link to="/admin/PolicyInformation" className='sidebar__linkButtons__link'>
            <TextSnippetOutlinedIcon className='sidebar__linkButtons__link__icon' />
            {/* <p>Cavitas Documents</p> */}
            <p>Policy information</p>
          </Link>

          <Link to="/admin/CavitasDocuments/" className='sidebar__linkButtons__link'>
            <TextSnippetOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>Cavitas Documents</p>
          </Link>

         

          <Link to="/admin/UserInformation/" className='sidebar__linkButtons__link'>
            <EmailOutlinedIcon className='sidebar__linkButtons__link__icon' />
            <p>User Information</p>
          </Link>
          
          <Link to="/admin/profile/view" className='sidebar__linkButtons__link'>
            <PersonOutlineOutlinedIcon className='sidebar__linkButtons__link__icon' />
            {/* <p>User profile</p> */}
            <p>Admin Profile</p>
            
          </Link>
          {/* <div className='sidebar__linkButtons__buttons'>
            <Button onClick={() => navigate("/admin/uploadclient")}>Upload new clients</Button>
            <Button>Get a Quote</Button>
          </div> */}
        </div>
      }
    </section>
  )
}

export default Sidebar