import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import SearchIcon  from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  return(
    <header className="Header-container">
        <div className="logo--area">
          <div className="logo--image"></div>
        </div>

        <div className="search--area">
          <div className="search--icon">
            <SearchIcon></SearchIcon>
          </div>
          <input type="text" placeholder="Search..."/>
        </div>

        <div className="notification--area">
          <NotificationsIcon></NotificationsIcon>
        </div>

        <div className="user--area">
          <div className="icon--area">
            <AccountCircleIcon></AccountCircleIcon>
          </div>
          <div className="identify--user">
            <h1 className="user--name">Username</h1>
            <p className="user--occupation">Occupation</p>
          </div>
        </div>

      </header>
  )
}

export default Header;