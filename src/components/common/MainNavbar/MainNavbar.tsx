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

    showroomOnClick?: () => void;
    whyOnClick?: () => void;
    contactOnClick?: () => void;

    theme?: "dark" | "light";
    transparent?: boolean;
    desktopDirection?: "horisontal" | "vertical";

    addLogoTransitions?: boolean;
    hamburgerAlwaysVisible?: boolean;
    upperNameVisible?: boolean;
}

function MainNavbar(props: MainNavbarProps) {
    const [openedDropdown, setOpenedDropdown] = useState(false);

    var dropItRef = 
        <div className={`drop-content ${openedDropdown ? 'nav-dropdown-opened' : 'nav-dropdown-closed'}`} id="drop-it" >
            <Link className="drop-item pointerCursor" to="#Why" onClick={props.whyOnClick} > why? </Link>
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
            upperNameImgSrc={props.upperNameVisible ? '/Logo/icon-name.png' : undefined}

            theme={props.theme ?? "dark"}
            transparent={props.transparent}
            desktopDirection={props.desktopDirection ?? "horisontal"}
            
            addLogoTransitions={props.addLogoTransitions ?? false}
            hamburgerAlwaysVisible={props.hamburgerAlwaysVisible ?? false}
        >
            {navDropdown}
            <Link className="nav-item pointerCursor" id="goToTrailers" to="#Showroom" onClick={props.showroomOnClick}> trailers </Link>
            <Link className="nav-item" to='shop'> shop </Link>
            <Link className="nav-item" to='/'> <SoonInfoTip> adventure </SoonInfoTip> </Link>
            <Link className="nav-item scrollDown pointerCursor" to="#Contact" onClick={props.contactOnClick}> contact </Link>
        </Navbar>
    )
}

export default MainNavbar
