import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SidebarMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton {...bindTrigger(popupState)}>
            <MenuIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
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
              <Link className='appbar__menuLink' to="/signin">Member login</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link className='appbar__menuLink' to="/signin">Employer login</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link className='appbar__menuLink' to="/signin">Broker login</Link>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
