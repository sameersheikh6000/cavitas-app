import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { USER_STORAGE_KEY } from '../../config/helpers/variables';

export default function SidebarMenu() {

  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));

  return (
    <PopupState variant="popover" popupId="demo-popup-menu" >
      {(popupState) => (
        <React.Fragment >
          <IconButton {...bindTrigger(popupState)}>
            <MenuIcon style={{ color: "#DD3333" }} />
          </IconButton>
            <Menu {...bindMenu(popupState)} >
              <MenuItem onClick={popupState.close}>
                <Link className='appbar__menuLink' to="/about">About us</Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Link className='appbar__menuLink' to="/faq">FAQ</Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Link className='appbar__menuLink' to="/claims">Claims</Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Link className='appbar__menuLink' to="/broker">Broker login</Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Link className='appbar__menuLink' to="/employ">Employer login</Link>
              </MenuItem>
              <MenuItem onClick={popupState.close}>
                <Link className='appbar__menuLink' to="/member">Member login</Link>
              </MenuItem>
              
            </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
