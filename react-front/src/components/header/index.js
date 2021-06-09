import React from "react";
import "./index.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  const fontSize = {
    fontSize: 36,
  };

  return (
    <header className="Header">
      <div className="header-container">
        <div className="logo-area">
          <div className="logo-image"></div>
        </div>

        <div className="search-area">
          <div className="search-icon">
            <SearchIcon className="icon" style={{ fontSize }} />
          </div>
          <input type="text" placeholder="Search..." />
        </div>

        <div className="notification-area">
          <NotificationsIcon style={{ fontSize }} />
        </div>

        <div className="user-area">
          <AccountCircleIcon className="icon" style={{ fontSize }} />
          <div className="identify-user">
            <h1 className="user-name">Username</h1>
            <p className="user-occupation">Occupation</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

