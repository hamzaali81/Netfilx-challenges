import React, { useState,useEffect } from 'react';
import './navbar.css';

function Navbar() {
    const [ show, handleShow ] = useState(false);
    
    const transitionNavbar = () => {
        if(window.scrollY > 100) {
        handleShow(true);
        }
        else {
            handleShow(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);

        return ()=> window.addEventListener('scroll', transitionNavbar)
    }, [])
    return (
        <div className="navbar navbar__black">
            <div className="nav__contents">
            <img className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
            <img className="nav__avatar" src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png" alt="profile" />
            </div>
        </div>
    )
}

export default Navbar
