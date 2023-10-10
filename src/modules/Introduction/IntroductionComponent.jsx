import React from 'react'
import profileImage from '../../assets/profile.png'
import './introduction.css';
const IntroductionComponent = () => {
  return (
    <div className="intro">
        <img src={profileImage} alt="profile" className="profileImage" />
        <div className="introContent">
            <span className='helloText'>Hello,</span>
            <span>I'm <span className='nameText'>NAVEENKUMAR ARUMUGAM</span></span>
            <span className='jobName'>MERN Stack Developer</span>
            <span></span>
            <span className='jobDescription'>Creative and self-starting MERN STACK Developer with 2.8 years of experience
in building stable websites and
            fast-paced, collaborative environments. Highly
skilled in React JS and Node JS</span>
        </div>
    </div>
  )
}

export default IntroductionComponent