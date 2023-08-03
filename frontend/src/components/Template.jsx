import React from 'react';
import SignupForm from './SignForm';
import LoginForm from './loginForm';
// import {FcGoogle} from "react-icons/fc";
import { GoogleOAuthProvider , GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Template = ({ title, desc1, formtype, setIsLoggedIn }) => {
    const navigate = useNavigate();
  return (
    <div className=' flex flex-col flex-wrap items-center justify-betweeen mt-20 h-screen'>
        <div className=' h-4/6  max-w-[500px] flex flex-col gap-3'>
            <h1 className='text-white text-4xl font-extrabold uppercase'>{title}</h1>
            <h3 className='text-blue-300 font-semibold italic'>{desc1}</h3>
            
            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-white'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem] text-white'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700 bg-white'></div>
            </div>

            <button className='text-white'>
                    <GoogleOAuthProvider clientId="684214755159-h81m33ambn89defonbarsr5pl9cq2brb.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            var decoded = jwt_decode(credentialResponse.credential);
                            console.log(decoded);
                            const userEmail = decoded?.email ?? null;
                            console.log(userEmail);
                            setIsLoggedIn(true);
                            toast.success("Logged In");
                            navigate("/dashboard");
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                    </GoogleOAuthProvider>
            </button>
        </div>
    </div>
  );
};

export default Template;
