import {useState} from 'react';

import { Link } from 'react-router-dom';
import SoonInfoTip from '../../common/SoonInfoTip/SoonInfoTip';
import HoverableImg from '../HoverableImg/HoverableImg';

import './MainNavbar.scss';
import './MainNavbar_mobile.scss';
import './MainNavbar_desktop.scss';

import Navbar from "../../common/Navbar/Navbar";
import { WrapperProps } from '../../../common/commonProps';

interface MainNavbarProps extends WrapperProps {
    id: string;
    resourcesParentSrc: string;

    showroomOnClick?: () => void;
    whyOnClick?: () => void;
    contactOnClick?: () => void;

    theme?: "dark" | "light";
    transparent?: boolean;
    desktopDirection?: "horisontal" | "vertical";

    addLogoTransitions?: boolean;
    hamburgerAlwaysVisible?: boolean;
    
    logoHoverable?: boolean;
    logoDeviceSensitive?: boolean;
    upperNameVisible?: boolean;
}

function MainNavbar(props: MainNavbarProps) {
    const [openedDropdown, setOpenedDropdown] = useState(false);

    const [verticalLogoHovered, setVerticalLogoHovered] = useState(false);

    const verticalLogoHoverHandler = () => setVerticalLogoHovered(true);
    const verticalLogoUnhoverHandler = () => setVerticalLogoHovered(false);

    const [mobile, setMobile] = useState(window.innerWidth <= 768);
    const checkForMobile = () => setMobile(window.innerWidth <= 768);

    window.addEventListener('resize', checkForMobile);
    window.addEventListener('load', checkForMobile);

    var dropItRef = 
        <div className={`drop-content ${openedDropdown ? 'nav-dropdown-opened' : 'nav-dropdown-closed'}`} id="drop-it" >
            <Link className="drop-item pointerCursor" to="/#Why" onClick={props.whyOnClick} > why? </Link>
            <Link className='drop-item' to='/'> <SoonInfoTip> mission </SoonInfoTip> </Link>
            <Link className="drop-item" to='/'> <SoonInfoTip> team </SoonInfoTip> </Link>
            <Link className="drop-item" to='/'> <SoonInfoTip> story </SoonInfoTip> </Link>
            <Link className="drop-item" to='/'> <SoonInfoTip> friends </SoonInfoTip> </Link>
        </div>

    var navDropdown = 
        <div className="nav-dropdown" onMouseLeave={() => setOpenedDropdown(false)}>
            <Link
                to='/'
                className="nav-item"
                id="drop-what"
                onMouseEnter={() => setOpenedDropdown(true)}
            > about us </Link>

            {dropItRef}
        </div>

    var verticalLogoSrc =   props.resourcesParentSrc + '/MainNavbar/Logo/' + 
                            (props.logoDeviceSensitive ? (mobile ? 'mobile' : 'desktop') : 'default') + '-vertical-' + 
                            (props.logoHoverable ? (verticalLogoHovered ? 'active' : 'inactive') : 'default') + '.png';

    var mediaNames = ["FB", "IG", "YT", "BE", "LI"]
    var mediaLinks = [
        "https://www.facebook.com/daorffo/",
        "https://www.instagram.com/daorffo/",
        "https://www.youtube.com/@daorffotv31",
        "https://www.behance.net/gallery/186589061/The-Life-Chariot-MEDEVAC-Trailer",
        "https://www.linkedin.com/company/da-orffo/?originalSubdomain=pl"
    ]

    return <>
        <div className="navbar-filter" />

        <Navbar 
            id={props.id}
            resourcesParentSrc={props.resourcesParentSrc + "/MainNavbar"}
            className={`main-navbar ${props.className}`}
            
            logoLink='.' 
            logoDeviceSensitive={props.logoDeviceSensitive ?? false}
            logoHoverable={props.logoHoverable ?? false}
            upperNameVisible={props.upperNameVisible ?? false}

            theme={props.theme ?? "dark"}
            transparent={props.transparent}
            desktopDirection={props.desktopDirection ?? "horisontal"}
            addLogoTransitions={props.addLogoTransitions ?? false}
            hamburgerAlwaysVisible={props.hamburgerAlwaysVisible ?? false}
        >
            {navDropdown}
            <Link className="nav-item pointerCursor" id="goToTrailers" to="/#Showroom" onClick={props.showroomOnClick}> trailers </Link>
            <a className="nav-item" href='https://www.campingear.eu'> shop </a>
            <Link className="nav-item" to='/'> <SoonInfoTip> adventure </SoonInfoTip> </Link>
            <Link className="nav-item scrollDown pointerCursor" to="/#Contact" onClick={props.contactOnClick}> contact </Link>

            <div className="main-navbar-footer">
                <div className="main-navbar-footer-media-container">

                    {mediaNames.map((name, index) => (
                        <Link className="main-navbar-footer-media" to={mediaLinks[index]} key={name}>
                            <HoverableImg dirPath={`resources/common/${props.theme ?? "dark"}/${name}`} />
                        </Link>
                    ))}
                </div>
                <div className="main-navbar-footer-logo-wrapper" onMouseEnter={verticalLogoHoverHandler} onMouseLeave={verticalLogoUnhoverHandler}>
                    <Link className="main-navbar-footer-logo" to='/'> <img src={verticalLogoSrc} alt="" /> </Link>
                </div>
            </div>
        </Navbar>
    </>
}

export default MainNavbar
