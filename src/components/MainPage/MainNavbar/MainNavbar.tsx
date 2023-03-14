import {useState} from 'react';
import { Link } from 'react-router-dom';

import './MainNavbar.css';
import './MainNavbar_mobile.css';
import './MainNavbar_desktop.css';

import Navbar from "../../common/Navbar/Navbar";
import { WrapperProps } from '../../../common/commonProps';

interface MainNavbarProps extends WrapperProps {
    showroomViewScroll?: () => void;
    whyViewScroll?: () => void;
    contactViewScroll?: () => void;
}

function MainNavbar(props: MainNavbarProps) {

    const [mobile, setMobile] = useState(false)
    const [mobileNavbar, setMobileNavbar] = useState(false)
    const [openedDropdown, setOpenedDropdown] = useState(false);

    const checkForMobile = () => setMobile(window.innerWidth <= 768);

    const toggleMobileNavbar = () => {
        setMobileNavbar(!mobileNavbar);

        let hamburgerD = document.getElementsByClassName("hamburgerD")[0],
            navbar = document.getElementsByClassName("navbar")[0];

        hamburgerD.classList.toggle("hamburgerD-closed");
        hamburgerD.classList.toggle("hamburgerD-opened");

        navbar.classList.toggle("mobile-nav-closed");
        navbar.classList.toggle("mobile-nav-opened");
    }

    window.addEventListener('resize', checkForMobile);
    window.addEventListener('load', checkForMobile);

    var dropItRef = 
        <div className={`drop-content ${openedDropdown ? 'opened' : 'closed'}`} id="drop-it" >
            <div className="drop-item pointerCursor" id="goToWhy" onClick={props.whyViewScroll}> why? </div>
            <Link className="drop-item in-construction" to='/'> mission </Link>
            <Link className="drop-item in-construction" to='/'> team </Link>
            <Link className="drop-item in-construction" to='/'> history </Link>
            <Link className="drop-item in-construction" to='/'> friends </Link>
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

    return (
        <>
            <div className={'upperContainer'+(props.className?' '+props.className:'')}>
                { mobile &&
                    <div className="hamburgerD hamburgerD-closed" onClick={toggleMobileNavbar} >
                        <img id="hamburger" src={`resources/MainPage/MainNavbar/Hamburger/icon-${mobileNavbar ? 'active' : 'inactive'}.png`} alt="" />
                    </div>
                }

                <div className="upperLogoD">
                    <img id="upperLogo" className="pointerCursor" src="resources/MainPage/MainNavbar/Logo/icon-inactive.png" alt="" />
                </div>

                <Navbar className='mobile-nav-closed'>
                    {navDropdown}
                    <div className="nav-item pointerCursor" id="goToTrailers" onClick={props.showroomViewScroll}> trailers </div>
                    <Link className="nav-item in-construction" to='/'> shop </Link>
                    <Link className="nav-item in-construction" to='/'> adventure </Link>
                    <div className="nav-item scrollDown pointerCursor" onClick={props.contactViewScroll}> contact </div>
                </Navbar>
            </div>
        </>
    )
}

export default MainNavbar
