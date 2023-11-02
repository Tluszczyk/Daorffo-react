import React, { useState } from 'react';

import './Navbar.css'
import './Navbar_desktop.css'
import './Navbar_mobile.css'

import {WrapperProps} from "../../../common/commonProps";

interface NavbarProps extends WrapperProps {
    logoDefaultSrc: string;
    logoDesktopSrc?: string;
    logoMobileSrc?: string;

    navbarClassName?: string;
    
    logoLink?: string;

    theme?: "dark" | "light";

    transparent?: boolean;
}
 
const Navbar = (props: NavbarProps) => {
    const [mobile, setMobile] = useState(false)
    const checkForMobile = () => setMobile(window.innerWidth <= 768);
    const [mobileNavbar, setMobileNavbar] = useState(false)

    window.addEventListener('resize', checkForMobile);
    window.addEventListener('load', checkForMobile);

    const toggleMobileNavbar = () => {
        setMobileNavbar(!mobileNavbar);

        let hamburgerD = document.getElementsByClassName("hamburgerD")[0],
            navbar = document.getElementsByClassName("navbar")[0];

        hamburgerD.classList.toggle("hamburgerD-closed");
        hamburgerD.classList.toggle("hamburgerD-opened");

        navbar.classList.toggle("mobile-nav-closed");
        navbar.classList.toggle("mobile-nav-opened");
    }

    var upperContainerClass = props.className ?? "";
    var navbarClass = props.navbarClassName ?? "";

    return <div className={`upperContainer ${upperContainerClass}`}>
        { mobile &&
            <div className="hamburgerD hamburgerD-closed" onClick={toggleMobileNavbar} >
                <img id="hamburger" src={`resources/MainPage/MainNavbar/Hamburger/icon-${mobileNavbar ? 'active' : 'inactive'}.png`} alt="" />
            </div>
        }

        <a className="upperLogoD" href={props.logoLink}>
            <img 
                id="upperLogo" 
                className="pointerCursor" 
                src={
                    mobile ?
                    (props.logoMobileSrc ?? props.logoDefaultSrc) :
                    (props.logoDesktopSrc ?? props.logoDefaultSrc)
                } 
                alt=""
            />
        </a>

        <div className={`navbar ${navbarClass}`}>
            { props.children }
        </div>
    </div>
}

export default Navbar;
