import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar'
import SidebarDrawer from '../Sidebar/SidebarDrawer'
import SidebarMenu from '../Sidebar/SidebarMenu';
import { IconButton } from '@mui/material';
import { ADMIN_STORAGE_KEY, USER_STORAGE_KEY } from '../../config/helpers/variables';

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  const admin = JSON.parse(sessionStorage.getItem(ADMIN_STORAGE_KEY));
  return (
    <>
      {(user?.data?.role || admin?.data?.role) ?
        <section className='navbar'>
          <div className='navbar__sidebarLarge' >
            <Sidebar />
          </div>
          <div className='navbar__sidebarDrawers' >
            <div className='navbar__sidebarDrawers__box' >
              <SidebarDrawer />
              <header className='navbar__sidebarDrawers__box__heading'>Cavitas</header>
            </div>
          </div>
        </section>
        :
        <AppBar position="static" className='appbar' >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box className='appbar__imageBox' onClick={() => navigate("/")}>
                <img className='appbar__imageBox__image' src={require("../../assets/Navbar-logo.png")} alt="" />
              </Box>
              <Box className='appbar__linksBox'>
                <div className='appbar__linksBox__links'>
                  <Link
                    to="/about"
                    className='appbar__linksBox__links__link'>
                    About us
                  </Link>
                  <Link className='appbar__linksBox__links__link' to="/faq">FAQ</Link>
                  <Link className='appbar__linksBox__links__link' to="/claims">Claims</Link>
                  <Link className='appbar__linksBox__links__link' to="/member">Member login</Link>
                  <Link className='appbar__linksBox__links__link' to="/employ">Employer login</Link>
                  <Link className='appbar__linksBox__links__link' to="/broker">Broker login</Link>
                </div>
                <img className='appbar__linksBox__translate' src={require("../../assets/Navbar-translate.png")} alt="" />
                <IconButton style={{marginTop: "13px"}}>
                  <ShoppingCartOutlinedIcon className='appbar__linksBox__icon' onClick={() => navigate("/cart")} />
                </IconButton>
              </Box>
              <Box className='appbar__sidebar1'>
                <IconButton>
                  <ShoppingCartOutlinedIcon
                    className='appbar__sidebar1__icon' onClick={() => navigate("/cart")} />
                </IconButton>
                <div>
                  <SidebarMenu />
                </div>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      }
    </>
  );
}
export default Navbar;