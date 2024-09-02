import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEnvelope, faPhone, faClock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const TopBar = () => {
   
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])
   
    return (
        <div className={`${isSticky ? "topStyle": "topDefault"}`}>
            <div className="top-nav-container">
                <div className='topNab-contact'>
                    <span><FontAwesomeIcon icon={faPhone} /> +8801894922232</span>
                    <span className='email'><FontAwesomeIcon icon={faEnvelope} /> ashinterior.bd@gmail.com</span>
                </div>
                <div className="topNab-search">

                    <div className='topNab-contact'>
                        <span><FontAwesomeIcon icon={faClock} /></span>
                        <span> Sat-Thu: 10:00 - 6:00</span>
                    </div>
                </div>
                <div className="topNab-contact">
                    <ul className='top-nav-right'>

                        <li className='text-center'> 
                           <a href="https://www.facebook.com/profile.php?id=100083519854444" target="_blank" rel="noreferrer"><FontAwesomeIcon style={{color: '#42474D'}} icon={faFacebook} /></a>
                        </li>
                        <li className='text-center'>
                            <a href="https://www.instagram.com/ash_interior_official/" target="_blank" rel="noreferrer"><FontAwesomeIcon style={{color: '#42474D'}} icon={faInstagram} /></a>
                        </li>
                        <li  className='text-center'>
                            <a href="https://www.youtube.com/channel/UCVZe_ZHVQz5Xi9wwZIsrZOQ" target="_blank" rel="noreferrer"><FontAwesomeIcon style={{color: '#42474D'}} icon={faYoutube} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopBar;