// modules
import { useState } from "react";

// components
import { Link } from "react-router-dom";
import SoonInfoTip from "../../common/SoonInfoTip/SoonInfoTip";
import { WrapperProps } from "../../../common/commonProps";
import Navbar from "../../common/Navbar/Navbar";

// styles
import "./TrailerNavbar.scss";
import "./TrailerNavbar_desktop.scss";
import "./TrailerNavbar_mobile.scss";

interface TrailerNavbarProps extends WrapperProps {
	id: string;
    resourcesParentSrc: string;

    transparent?: boolean;
}

const TrailerNavbar = (props: TrailerNavbarProps) => {
    const [openedDropdown, setOpenedDropdown] = useState(false);

    var dropItRef = 
        <div className={`drop-content ${openedDropdown ? 'nav-dropdown-opened' : 'nav-dropdown-closed'}`} id="drop-it" >
            <div className="drop-item pointerCursor" id="goToWhy"> why? </div>
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
            id="trailer-navbar"
            resourcesParentSrc={props.resourcesParentSrc}
            className={props.className}
            logoDefaultSrc='/Logo/icon-inactive.png' 
            logoLink='.' 
            addLogoTransitions
            transparent={props.transparent}
            theme="dark"

            desktopDirection="vertical"
            hamburgerAlwaysVisible
        >
            {navDropdown}
            <Link className="nav-item pointerCursor" to="/#Showroom" > trailers </Link>
            <Link className="nav-item" to='shop'> shop </Link>
            <Link className="nav-item" to='/'> <SoonInfoTip> adventure </SoonInfoTip> </Link>
            <Link className="nav-item scrollDown pointerCursor" to="/#Contact" > contact </Link>
        </Navbar>
    )
};

export default TrailerNavbar;
