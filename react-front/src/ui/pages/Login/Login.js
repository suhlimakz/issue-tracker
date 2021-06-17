import React, { useState } from "react";
import { LoginContainer, LoginLogo } from "./Login.style.js";
import MailIcon from "@material-ui/icons/Mail";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import apiService from "../../../services/apiService";
import { Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
 
function Login() {
  const fontSize = {
    fontSize: 30,
  };

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [ user, setUser ] = useState( "" );

  function validate(e) {
    e.preventDefault();

    apiService.loginUser( email, pass ).then( u => {

      setUser( u );
    } )
  }
  
  if( user?.isValid ){
    return <Redirect to="/home" />
  }
  
  return (
    <Container component={ LoginContainer }>
      <LoginLogo
        src={ `${process.env.PUBLIC_URL}/img/issue-tracker-logo.png` }
        alt={'Issue Tracker'}
      />
    </Container>

    //     <div className="login-container">
    //   <div>
    //     <form className="login-form">
    //       <div className="input-container">
    //         <MailIcon className="icon" style={fontSize} />
    //         <input
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           type="text"
    //           name="email"
    //           id="email"
    //           placeholder="Email"
    //           className="input-field"
    //         />
    //       </div>

    //       <div className="input-container">
    //         <VpnKeyRoundedIcon className="icon" style={fontSize} />
    //         <input
    //           value={pass}
    //           onChange={(e) => setPass(e.target.value)}
    //           type="password"
    //           name="pass"
    //           id="password"
    //           placeholder="***********"
    //           className="input-field"
    //         />
    //       </div>

    //       <button onClick={validate} type="submit" className="button-form">
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}

const login = Login;

export default login;

