import {useState} from 'react';
import { Link } from 'react-router-dom';
import SoonInfoTip from '../../common/SoonInfoTip/SoonInfoTip';

import './MainNavbar.scss';
import './MainNavbar_mobile.scss';
import './MainNavbar_desktop.scss';

import Navbar from "../../common/Navbar/Navbar";
import { WrapperProps } from '../../../common/commonProps';

interface MainNavbarProps extends WrapperProps {
    id: string;
    resourcesParentSrc: string;

    showroomViewScroll?: () => void;
    whyViewScroll?: () => void;
    contactViewScroll?: () => void;
    transparent?: boolean;
}

function MainNavbar(props: MainNavbarProps) {
    const [openedDropdown, setOpenedDropdown] = useState(false);

    var dropItRef = 
        <div className={`drop-content ${openedDropdown ? 'nav-dropdown-opened' : 'nav-dropdown-closed'}`} id="drop-it" >
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
        <Navbar 
            id={props.id}
            resourcesParentSrc={props.resourcesParentSrc}
            className={props.className}
            logoDefaultSrc='/Logo/icon-inactive.png' 
            logoLink='.' 
            addLogoTransitions
            transparent={props.transparent}
            theme="dark"
        >
            {navDropdown}
            <Link className="nav-item pointerCursor" id="goToTrailers" to="/" onClick={props.showroomViewScroll}> trailers </Link>
            <Link className="nav-item" to='shop'> shop </Link>
            <Link className="nav-item" to='/'> <SoonInfoTip> adventure </SoonInfoTip> </Link>
            <div className="nav-item scrollDown pointerCursor" onClick={props.contactViewScroll}> contact </div>
        </Navbar>
    )
}

export default MainNavbar
