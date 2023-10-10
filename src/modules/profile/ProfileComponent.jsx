import React from 'react'
import './profile.css'
import logo from '../../assets/N-logo.png';
import contactImage from '../../assets/contactImage.png'
import { Link } from 'react-scroll'


const ProfileComponent = () => {
    return (
        <div className='navBar'>
                <img src={logo} alt='logo' className="logo"/>
           
            <div className="menuItemList">
                <Link className='menuItem'>Home</Link>
                <Link className='menuItem'>Portfolio</Link>
                <Link className='menuItem'>About</Link>
            </div>
            <button className="btncontact">
                <img src={contactImage} alt="" className="contactLogo" />
                Contact Me
            </button>

        </div>
    )
}

export default ProfileComponent