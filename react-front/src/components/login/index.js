import React from 'react';
import './index.css';
import MailIcon from '@material-ui/icons/Mail';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';

function Login() {
  const fontSize = {
    fontSize = 30
  };

  return(
    <div className="container">
      <header className="logo">
        <div className="logo-image">
          <h1>Logo</h1>
        </div>
      </header>

      <div className="form-acess">
        <form className="login-form">
          <div className="input-container">
            <MailIcon className="icon" style={ fontSize } />
            <input type="text" 
                   name="email"
                   id="email"
                   placeholder="Email"
                   className="input-field"
            />
          </div>

          <div className="input-container">
            <VpnKeyRoundedIcon className="icon" style={ fontSize } />
            <input type="password"
                   name="pass"
                   id="password"
                   placeholder="***********"
                   className="input-field"
            />
          </div>

          <button type="submit" className="button-form">
            Login
          </button>
        </form>
      </div>

    </div>
  )
}

export default Login;