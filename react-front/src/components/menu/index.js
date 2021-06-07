import React from 'react';
import './index.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Menu() {
  const fontSize = {
    fontSize: 36
  };

  return(
    <div className="Menu" >
      <section className="container" >
        <section>

          <div className="board">
            <DashboardIcon className="icon" style={ fontSize }/>
            <h1 className="txt"> Board </h1>
          </div>

          <div className="team" >
            <GroupWorkIcon className="icon" style={ fontSize } />
            <h1 className="txt"> Team </h1>
          </div>

          <div className="settings" >
            <SettingsIcon className="icon" style={ fontSize }/>
            <h1 className="txt"> Settings </h1>
          </div>

        </section>
        
        <section>
          <div className="div-logout">
            <div className="logout">
              <ExitToAppIcon className="icon" style={ fontSize } />
              <h1 className="txt"> Logout </h1>
            </div>
          </div>
        </section>

      </section>

    </div>
  )
}

export default Menu;