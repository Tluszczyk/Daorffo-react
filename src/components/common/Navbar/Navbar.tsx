import { useState, useEffect } from 'react';

import './Navbar.scss'
import './Navbar_desktop.scss'
import './Navbar_mobile.scss'

import {onScrollTransform, resizeTransform, translateTransform} from '../../../common/onScrollTransforms';

import {WrapperProps} from "../../../common/commonProps";

interface NavbarProps extends WrapperProps {
    id: string;

    resourcesParentSrc: string;

    logoDefaultSrc: string;
    logoDesktopSrc?: string;
    logoMobileSrc?: string;

    navbarClassName?: string;
    
    logoLink?: string;
    upperNameImgSrc?: string;
    addLogoTransitions?: boolean;

    theme: "dark" | "light";

    hamburgerAlwaysVisible?: boolean;
    desktopDirection?: "horisontal" | "vertical";

    transparent?: boolean;
}
 
const Navbar = (props: NavbarProps) => {
    const [mobile, setMobile] = useState(window.innerWidth <= 768)
    const checkForMobile = () => setMobile(window.innerWidth <= 768);
    
    const [opened, setOpened] = useState(false);
    const [hamburgerHovered, setHamburgerHovered] = useState(false);
    
    const hamburgerHoverHandler = () => setHamburgerHovered(true);
    const hamburgerUnhoverHandler = () => setHamburgerHovered(false);

    window.addEventListener('resize', checkForMobile);
    window.addEventListener('load', checkForMobile);

    var upperContainerClass = props.className ?? "";
    var navbarClass = props.navbarClassName ?? "";

    var openedClassName = opened ? "opened" : "closed";

    if (props.transparent) {
        upperContainerClass += " transparent";
    }

    useEffect(() => {
        const transformLogoHandler = onScrollTransform.bind(null, 0, 500, [
            {querySelector: "#upperLogoLink", transform: resizeTransform, TRANSFORM_PARAMETERS: [1,.5]},
            {querySelector: "#upperLogoLink", transform: translateTransform, TRANSFORM_PARAMETERS: [0,50,"%",0,-50,"%"]},
        ])
      
        if ((mobile ?? false) && (props.addLogoTransitions ?? false)) {
            window.addEventListener('scroll', transformLogoHandler);
        }

        return () => window.removeEventListener('scroll', transformLogoHandler);
      }, [mobile, props.addLogoTransitions]);

    return <div id={props.id} className={`navbar-wrapper ${openedClassName} ${props.theme}`} onClick={e=>{if(opened) setOpened(false)}}>
        <div className={`upperContainer ${upperContainerClass}`}>
            { ((props.hamburgerAlwaysVisible ?? false) || mobile) &&
                <div className={`hamburgerD hamburgerD-${openedClassName}`} onClick={() => setOpened(!opened)} onMouseEnter={hamburgerHoverHandler} onMouseLeave={hamburgerUnhoverHandler} >
                    <img id="hamburger" src={props.resourcesParentSrc+`/Hamburger/icon-${(opened || hamburgerHovered) ? 'active' : 'inactive'}.png`} alt="not found" />
                </div>
            }

            <div className="upperLogoD">
                <a id="upperLogoLink" href={props.logoLink}>
                    <img 
                        id="upperLogo" 
                        className="pointerCursor" 
                        src={ props.resourcesParentSrc + (
                            (mobile ?? false) ? 
                            (props.logoMobileSrc ?? props.logoDefaultSrc) :
                            (props.logoDesktopSrc ?? props.logoDefaultSrc)
                        )} 
                        alt="not found"
                    />
                </a>
                {
                    !mobile && props.upperNameImgSrc &&
                    <img id="upperName" className="mobile-invisible pointerCursor" src={props.resourcesParentSrc+props.upperNameImgSrc} alt="not found" />
                }
            </div>

            <div className={`navbar ${navbarClass} nav-${openedClassName} desktop-nav-${props.desktopDirection}`}>
                { props.children }
            </div>
        </div>
    </div>
}

export default Navbar;
