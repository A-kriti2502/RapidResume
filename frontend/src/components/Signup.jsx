import React from 'react';
import Template from './Template';

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title = "Start your resume now for free! "
    desc1 ="A Quick and Easy Way to Create Your Professional Resume. "
      formtype="signup"
      setIsLoggedIn = {setIsLoggedIn}
    >
    </Template>
  )
}

export default Signup;
