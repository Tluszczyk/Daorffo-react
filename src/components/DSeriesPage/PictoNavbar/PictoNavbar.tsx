import { Link } from "react-router-dom"
import { useBetween } from "use-between"

import PictoNavItem from "./PictoNavItem/PictoNavItem"

import "./PictoNavbar.css"
import "./PictoNavbar_desktop.scss"
import "./PictoNavbar_mobile.scss"

import { useLevel } from "../services/LevelProvider"

interface PictoNavbarProps {
    getOpenedSection: () => number;
    setOpenedSection: (id: number) => void;
    transparent?: boolean;
}

const useSharedLevel = () => useBetween(useLevel);
 
const PictoNavbar = (props: PictoNavbarProps) => {
    const { setLevel, getLevel } = useSharedLevel();

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

    return <>
        <div className={`upper-container level-${getLevel()} ${props.transparent}`}>
            <div className={`picto-navbar level-${getLevel()}`}>
                <div className="logoD-wrapper">
                    <div className="logoD">
                        <Link to="/" id="logo-item">
                            <img id="logo" alt="" />
                            {/* <div id="logo" /> */}
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