import React from 'react';
import './index.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SettingsIcon from '@material-ui/icons/Settings';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Menu() {
  return(
    <div className="Menu" >
      <section className="container" >
        <div className="board">
          <DashboardIcon />
          <div className="txt--area" >
            <h1 className="txt--option" >Board</h1>
          </div>
        </div>

        <div className="team" >
          <GroupWorkIcon/>
          <div className="txt--area" >
            <h1>Team</h1>
          </div>
        </div>

        <div className="settings" >
          <SettingsIcon />
          <div className="txt--area" >
            <h1>Settings</h1>
          </div>
        </div>

        <div className="others" >
          <MoreHorizIcon />
          <div className="txt--area" >
            <h1>Others</h1>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Menu;