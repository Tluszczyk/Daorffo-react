import React, { useState } from 'react';

import './Navbar.scss'
import './Navbar_desktop.scss'
import './Navbar_mobile.scss'

import {onScrollTransform, resizeTransform, translateTransform} from '../../../common/onScrollTransforms';

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
    const [opened, setOpened] = useState(false);

    window.addEventListener('resize', checkForMobile);
    window.addEventListener('load', checkForMobile);

    var upperContainerClass = props.className ?? "";
    var navbarClass = props.navbarClassName ?? "";

    var openedClassName = opened ? "opened" : "closed";

    if (props.transparent) {
        upperContainerClass += " transparent";
    }

    window.addEventListener('scroll', onScrollTransform.bind(null, 0, 500, [
        {querySelector: "#upperLogoLink", transform: resizeTransform, TRANSFORM_PARAMETERS: [1,.5]},
        {querySelector: "#upperLogoLink", transform: translateTransform, TRANSFORM_PARAMETERS: [0,250,"px",0,-50,"px"]},
    ]));

    return <div id="navbar-wrapper" className={openedClassName} onClick={e=>{if(opened) setOpened(false)}}>
        <div className={`upperContainer ${upperContainerClass}`}>
            { mobile &&
                <div className={`hamburgerD hamburgerD-${openedClassName}`} onClick={() => setOpened(!opened)} >
                    <img id="hamburger" src={`resources/MainPage/MainNavbar/Hamburger/icon-${opened ? 'active' : 'inactive'}.png`} alt="" />
                </div>
            }

            <a id="upperLogoLink" className="upperLogoD" href={props.logoLink}>
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

            <div className={`navbar ${navbarClass} mobile-nav-${openedClassName}`}>
                { props.children }
            </div>
        </div>
    </div>
}

export default Navbar;
