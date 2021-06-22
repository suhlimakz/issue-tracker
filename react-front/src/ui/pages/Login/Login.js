import React, { useState } from "react";
import { LoginStyle } from "./Login.style.js"; 
import MailIcon from "@material-ui/icons/Mail";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import apiService from "../../../services/apiService";
import { Redirect } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function Login() {
  const classes = LoginStyle();
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
    <Container component="main" maxWidth="xs" 
      style={{ marginTop:"10rem"}}>
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={1} alignItems="flex-end" >
          <Avatar>
            <MailIcon />
          </Avatar>
          <Grid item >
            <TextField
              required
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              id="email"
              
              style={{ width: "300px"}}
            />
          </Grid>
        </Grid>
        
        <Grid container spacing={1} alignItems="flex-end">
          <Avatar>
            <VpnKeyRoundedIcon />
          </Avatar>
          <Grid item>
            <TextField
              required
              fullWidth
              label="Password"
              value={ pass }
              onChange={(e) => setPass(e.target.value)}
              type="password"
              name="pass"
              id="password"
              style={{ width: "300px" }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={validate}
        >
          Sign In
        </Button>
      </form>
    </div>
  </Container>
  );
}

const login = Login;

export default login;

