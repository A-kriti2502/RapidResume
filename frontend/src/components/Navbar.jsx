import React from 'react';
import "../App.css";

import { useState } from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="py-4 ">
      <div className="container mx-auto flex items-center justify-evenly">

        <div className="flex items-center">
          <Link to="/">
          <div className='newfont text-6xl mt-2 ml-2 bg-red-400 text-transparent bg-clip-text font-bold h-full '>Resume</div>
          </Link>        
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none focus:text-white"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isDropdownOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className={`sm:flex ${isDropdownOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col sm:flex-row mt-4 sm:mt-0">
          <li className="py-2 sm:py-0 sm:px-4">
              <Link to="/">
                <button className='text-richblack-100 py-[8px] text-white
                    px-[12px] border-richblack-700 hover:text-red-400 hover:scale-125 duration-200'>
                        Templates
                </button>
              </Link>
            </li>
            <li className="py-2 sm:py-0 sm:px-4">
              <Link to="/">
                <button className='text-richblack-100 py-[8px] text-white
                    px-[12px] border-richblack-700 hover:text-red-400 hover:scale-125 duration-200'>
                        Resume Examples
                </button>
              </Link>
            </li>
            <li className="py-2 sm:py-0 sm:px-4">
            {
              !isLoggedIn && 
              <Link to="/login">
                <button className='text-richblack-100 py-[8px] text-white
                    px-[12px] border border-richblack-700 hover:bg-red-400 hover:border-red-400'>
                        Log in
                </button>
              </Link>
            }
            </li>
            <li className="py-2 sm:py-0 sm:px-4">
            {
              !isLoggedIn && 
              <Link to="/signup">
                <button className='text-richblack-100 py-[8px] text-white
                    px-[12px] border border-richblack-700 hover:bg-red-400 hover:border-red-400'>
                        Sign up
                </button>
              </Link>
            }
            </li>
            <li className="py-2 sm:py-0 sm:px-4">
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] border border-richblack-700 text-white hover:bg-red-400 hover:border-red-400'>
                        Create Resume
                    </button>
                </Link>
            }
            </li>
            <li className="py-2 sm:py-0 sm:px-4">
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] border border-richblack-700 text-white hover:bg-red-400 hover:border-red-400'>
                        Log Out
                    </button>
                </Link>
            }
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
