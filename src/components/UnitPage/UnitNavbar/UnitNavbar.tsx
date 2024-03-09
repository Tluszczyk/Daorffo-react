// modules
import { useState } from "react";

// components
import { Link } from "react-router-dom";
import SoonInfoTip from "../../common/SoonInfoTip/SoonInfoTip";
import { WrapperProps } from "../../../common/commonProps";
import Navbar from "../../common/Navbar/Navbar";

// styles
import "./UnitNavbar.scss";
import "./UnitNavbar_desktop.scss";
import "./UnitNavbar_mobile.scss";

interface UnitNavbarProps extends WrapperProps {

    transparent?: boolean;
}

const UnitNavbar = (props: UnitNavbarProps) => {
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
            id="unit-navbar"
            resourcesParentSrc="resources/UnitPage/UnitNavbar"
            className={props.className}
            logoDefaultSrc='/Logo/icon-inactive.png' 
            logoLink='.' 
            transparent={props.transparent}
            upperNameImgSrc="/Logo/icon-name.png"
            theme="light"

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

export default UnitNavbar;
