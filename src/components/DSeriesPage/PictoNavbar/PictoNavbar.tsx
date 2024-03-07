import { useState } from "react"

import { Link } from "react-router-dom"
import { useBetween } from "use-between"

import PictoNavItem from "./PictoNavItem/PictoNavItem"

import "./PictoNavbar.css"
import "./PictoNavbar_desktop.scss"
import "./PictoNavbar_mobile.scss"

import { StylableProps } from "../../../common/commonProps"

import { useLevel } from "../services/LevelProvider"

interface PictoNavbarProps extends StylableProps{
    getOpenedSection: () => number;
    setOpenedSection: (id: number) => void;
    transparent?: boolean;
}

const useSharedLevel = () => useBetween(useLevel);
 
const PictoNavbar = (props: PictoNavbarProps) => {
    const { setLevel, getLevel } = useSharedLevel();

    const [logoHovered, setLogoHovered] = useState(false);
    const [mobile, setMobile] = useState(window.innerWidth <= 768)
    const checkForMobile = () => setMobile(window.innerWidth <= 768);

    window.addEventListener('resize', checkForMobile);
    window.addEventListener('load', checkForMobile);

    var pictoItemsDescriptions = ['about', 'body', 'camping', 'chassis', 'driving']

    var pictoItems = pictoItemsDescriptions.map((description, index) => <PictoNavItem
        id={index.toString()} description={description}
        key={index}
        onClick={e => { 
            setLevel(1)
            props.setOpenedSection(index)
            e.stopPropagation()
        }}
        parentSrc="resources/TrailerPage/PictoNavbar/"
        active={getLevel() > 0 && index === props.getOpenedSection()}
    />)

    var logoSrc = mobile ?
        "resources/TrailerPage/PictoNavbar/Logo/Mobile/icon-inactive.png" :
        logoHovered ?
            "resources/TrailerPage/PictoNavbar/Logo/Desktop/icon-inactive.png" :
            "resources/TrailerPage/PictoNavbar/Logo/Desktop/icon-active.png"

    return <>
        <div className={`level-${getLevel()} ${props.className} upper-container ${props.transparent}`}>
            <div className={`picto-navbar level-${getLevel()}`}>
                <div className="logoD-wrapper">
                    <div className="logoD">
                        <Link to="/" id="logo-item">
                            <img 
                                src={ logoSrc }
                                id="logo" alt="not found" 
                                onMouseEnter={() => setLogoHovered(true)} onMouseLeave={() => setLogoHovered(false)}/>
                        </Link>
                    </div>
                </div>

                <div className="pictogramsD-wrapper">
                    <div className="pictogramsD">
                        {pictoItems}
                    </div>
                </div>
            </div>
        </div>
    </>
}
 
export default PictoNavbar;