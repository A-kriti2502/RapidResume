import React from 'react';
import styled from "styled-components";

const Team = ({ member }) => {
  return (
    <Wrapper>
            <div className="container border hover:border-red-400  ">
                <div className="wrapper ">
                    <div className="banner-image">
                        {/* <figure>
                            <img src={member.img} alt={member.name}/>
                        </figure> */}
                    </div>
                    <h1 className='truncate'>{member.name}</h1>
                    <p className='truncate'>{member.title}</p>
                    <a className=' text-white' href={member.github}>Github</a>
                </div>
            </div>

        </Wrapper>
  );
};

export default Team;

const Wrapper = styled.section`
  
  padding: 3rem;
  font-family: "Lexend Deca Light";

  .container {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.50);
    border-radius: 12px;
    padding: 38px;
    filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align: center;

  }

  .wrapper {
    width: 100%;
    height: 100%;

  }

  .banner-image {
    height:auto;
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255, 0.255)
    overflow:hidden;
    
    img{
      width: 100%;
      height: auto;
    }
  }
  
  

  h1{
    color: rgba(255,255,255,0.98);
    text-transform: uppercase;
    font-size: 2.4rem;
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 2px;    
  }

  .button-wrapper{
    margin-top: 18px;
  }

  .outline {
    background: transparent;
    color: rgba(0, 212, 255, 0.9);
    border: 1px solid rgba(0, 212, 255, 0.6);
    transition: all .3s ease;

  }

  .outline:hover{
    transform: scale(1.125);
    color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.9);
    transition: all .3s ease;
  }

  .fill {
    background: rgba(0, 212, 255, 0.9);
    color: rgba(255,255,255,0.95);
    filter: drop-shadow(0);
    font-weight: bold;
    transition: all .3s ease;
  }

  .fill:hover{
    transform: scale(1.125);
    border-color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
    transition: all .3s ease;
  }
  `