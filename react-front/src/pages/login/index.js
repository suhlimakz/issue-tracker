import React, { useState } from "react";
import "./index.css";
import MailIcon from "@material-ui/icons/Mail";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";

function Login() {
  const fontSize = {
    fontSize: 30,
  };

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function validate(e) {
    e.preventDefault();

    if (email == "maria@maria.com") {
      alert("é o email");
    } else {
      alert("não é o email");
    }
  }

  return (
    <div className="login-container">
      <header className="logo">
        <div className="logo-image">
          <h1>Logo</h1>
        </div>
      </header>

      <div>
        <form className="login-form">
          <div className="input-container">
            <MailIcon className="icon" style={fontSize} />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="input-field"
            />
          </div>

          <div className="input-container">
            <VpnKeyRoundedIcon className="icon" style={fontSize} />
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              name="pass"
              id="password"
              placeholder="***********"
              className="input-field"
            />
          </div>

          <button onClick={validate} type="submit" className="button-form">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

