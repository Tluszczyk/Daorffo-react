import { useState } from "react"
import { WrapperProps } from "../../../../common/commonProps"
import "./PictoNavItem.scss"
import "./PictoNavItem_desktop.scss"
import "./PictoNavItem_mobile.scss"

interface PictoNavItemProps extends WrapperProps {
    parentSrc: string
    description: string
    // onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    active: boolean
}
 
const PictoNavItem = (props: PictoNavItemProps) => {
    const srcPrefix = `${props.parentSrc}/PictoNavItem-${props.id}/icon-`;
    
    const [hovering , setHovering] = useState(false);

    function onMouseEnter() {
        setHovering(true);
    }

    function onMouseLeave() {
        setHovering(false);
    }

    return <>
        <div 
            className={`forDescription ${props.active ? "active" : ""}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={props.onClick}
        > 
            <div className="subpage-button" id={`${props.id}-item`} style={props.style}>
                <img 
                    id={`${props.id}-item-img`}
                    src={srcPrefix + (props.active || hovering ? "active" : "inactive") + ".png"}
                    className="picto-nav-item"
                    alt=""
                />
            </div>
            {props.description!=="" && <p>{props.description}</p>}
        </div>
    </>
}
 
export default PictoNavItem;