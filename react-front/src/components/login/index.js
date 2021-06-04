import React from 'react';
import './index.css';

function Login() {
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
            
            <input type="text" 
                   name="email"
                   id="email"
                   placeholder="Email"
                   className="input-field"
            />
          </div>

          <div className="input-container">
            
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