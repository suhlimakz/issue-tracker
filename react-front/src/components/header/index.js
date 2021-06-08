import React from 'react';
import './index.css';
import SearchIcon  from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  return(
    <header className="Header">
      <div className="header-container" >
        <div className="logo--area">
          <div className="logo--image"></div>
        </div>

        <div className="search--area">
          <div className="search--icon">
            <SearchIcon className="icon" style={{ fontSize: 30 }} />
          </div>
          <input type="text" placeholder="Search..."/>
        </div>

        <div className="notification--area">
          <NotificationsIcon style={{ fontSize: 30 }} />
        </div>

        <div className="user--area">
            <AccountCircleIcon className="icon" style={{ fontSize: 30 }} />
          <div className="identify--user">
            <h1 className="user--name">Username</h1>
            <p className="user--occupation">Occupation</p>
          </div>
        </div>
      </div>


      </header>
  )
}

export default Header;