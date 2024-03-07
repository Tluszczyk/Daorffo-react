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
    const [leftArrowHovered, setLeftArrowHovered] = useState(false);
    const [rightArrowHovered, setRightArrowHovered] = useState(false);

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

    var logoSrc = "resources/TrailerPage/PictoNavbar/Logo/" + (mobile ? "Mobile/" : "Desktop/") + "icon-" + (logoHovered ? "active" : "inactive") + ".png"

    var leftArrowSrc = "resources/TrailerPage/PictoNavbar/Arrows/left-" + (leftArrowHovered ? "active" : "inactive") + ".png"
    var rightArrowSrc = "resources/TrailerPage/PictoNavbar/Arrows/right-" + (rightArrowHovered ? "active" : "inactive") + ".png"

    var prevSection = () => {
        var prevSection = (pictoItemsDescriptions.length + props.getOpenedSection() - 1) % pictoItemsDescriptions.length
        props.setOpenedSection(prevSection)
    }

    var nextSection = () => {
        var nextSection = (props.getOpenedSection() + 1) % pictoItemsDescriptions.length
        props.setOpenedSection(nextSection)
    }

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
                        <img 
                            id="picto-nav-arrow-left" className="picto-navbar-arrow" 
                            src={leftArrowSrc} alt="not found" 
                            onMouseEnter={() => setLeftArrowHovered(true)} onMouseLeave={() => setLeftArrowHovered(false)}
                            onClick={prevSection}
                        />

                        {pictoItems}
                        
                        <img 
                            id="picto-nav-arrow-right" className="picto-navbar-arrow" 
                            src={rightArrowSrc} alt="not found" 
                            onMouseEnter={() => setRightArrowHovered(true)} onMouseLeave={() => setRightArrowHovered(false)}
                            onClick={nextSection}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}
 
export default PictoNavbar;