import {useState} from 'react';
import { Link } from 'react-router-dom';
import SoonInfoTip from '../../common/SoonInfoTip/SoonInfoTip';

import './MainNavbar.scss';
import './MainNavbar_mobile.scss';
import './MainNavbar_desktop.scss';

import Navbar from "../../common/Navbar/Navbar";
import { WrapperProps } from '../../../common/commonProps';

interface MainNavbarProps extends WrapperProps {
    showroomViewScroll?: () => void;
    whyViewScroll?: () => void;
    contactViewScroll?: () => void;
}

function MainNavbar(props: MainNavbarProps) {
    const [openedDropdown, setOpenedDropdown] = useState(false);

    var dropItRef = 
        <div className={`drop-content ${openedDropdown ? 'opened' : 'closed'}`} id="drop-it" >
            <div className="drop-item pointerCursor" id="goToWhy" onClick={props.whyViewScroll}> why? </div>
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

    return (
        <Navbar className='mobile-nav-closed' logoSrc='resources/MainPage/MainNavbar/Logo/icon-inactive.png' logoLink='/'>
            {navDropdown}
            <div className="nav-item pointerCursor" id="goToTrailers" onClick={props.showroomViewScroll}> trailers </div>
            <Link className="nav-item" to='shop'> shop </Link>
            <Link className="nav-item" to='/'> <SoonInfoTip> adventure </SoonInfoTip> </Link>
            <div className="nav-item scrollDown pointerCursor" onClick={props.contactViewScroll}> contact </div>
        </Navbar>
    )
}

export default MainNavbar
