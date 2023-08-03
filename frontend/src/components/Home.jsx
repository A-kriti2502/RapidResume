import React from 'react';
import image1 from './assets/image1.svg';
import Team from './Team';
import {Link} from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const features = [
  {
    id:1,
    title:"ATS Friendly"
  },
  {
    id:2,
    title:"Fast, Free, and Easy to Use"
  },
  {
    id:3,
    title:"Download your resume as PDF"
  },
  {
    id:4,
    title:"Professional Resume Templates"
  },
];
const members = [
  {
    id:2,
    name:"Shreyansh",
    title:"Frontend",
    github:"https://github.com/A-kriti2502",
  },
  {
    id:1,
    name:"Aakriti",
    title:"Frontend",
    github:"https://github.com/A-kriti2502",
  },
  {
    id:3,
    name:"Aahna",
    title:"Backend",
    github:"https://github.com/A-kriti2502",
  },
  {
    id:4,
    name:"Anshul",
    title:"Backend",
    github:"https://github.com/A-kriti2502",
  },
  {
    id:5,
    name:"Gaurav",
    title:"Backend",
    github:"https://github.com/A-kriti2502",
  },
];
const responsive = {
  superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 5
  },
  desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3
  },
  tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2
  },
  mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
  }
};
const Home = () => {
  return (
    <div
      className="h-5/6 w-4/5 mx-auto p-4"
    >  
      <div className="w-full mx-auto flex flex-col items-center justify-between px-4 md:flex-row gap-10 mt-10 text-white">
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-5xl font-bold'>The Best <br /> Free Online Resume Builder</h2>
          <p className='text-gray-500 py-4 max-w-md italic text-xl'>Start your resume now for free! 
            A Quick and Easy Way to Create Your Professional Resume. 
          </p>
          <Link to="/dashboard">
            <button className='text-richblack-100 py-[8px] text-white
                      px-[12px] border border-richblack-700 hover:bg-red-400 hover:border-red-400'>
                          Create Your Resume
                  </button>
            </Link>
        </div>
        <div>
          <img className='img-landing' src={image1} alt="" srcset="" />
        </div>
      </div>

      <div className='w-full h-2/4 flex flex-col items-center text-white mt-10'>
        <div>
          <h2 className='text-4xl font-semibold italic m-5'>A Quick and Easy Way to Create Your <span className='text-red-400'>Professional Resume</span>.</h2>
          <div>
            {features.map((tab)=>
            <div key={tab.id} className='flex flex-row items-center'>
              <div className=''>< MdOutlineKeyboardArrowRight size={25}/>
            </div>
            <div className='text-xl m-5'>{tab.title}</div>
            </div>
            )}
          </div>
        </div>
      </div>
      <div className='m-10'>
        <div className='w-full flex flex-col items-center'>
          <h2 className='text-4xl font-semibold italic m-5 mx-auto text-white'>Acknowledging Our Dedicated <span className='text-red-400'>Team</span></h2>
        </div>
        <Carousel responsive={responsive} showDots={true} className="">
          {members.map((member) => (
            <Team key={member.id} member={member} />
          ))}
          <style>
            {`.dot {
              color: #EF4444; /* red-400 hex color */
            }`}
          </style>
        </Carousel>
      </div>
    </div>
  )
}

export default Home;
