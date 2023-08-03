import React from 'react';
import Template from './Template';

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title = "Welcome to Resume Builder"
      desc1 ="Access all features with a premium plan!"
      formtype="login"
      setIsLoggedIn = {setIsLoggedIn}
    >
    </Template>
  )
}

export default Login
