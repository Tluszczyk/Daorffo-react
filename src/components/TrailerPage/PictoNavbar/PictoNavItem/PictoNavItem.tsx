import { useState } from "react"
import { WrapperProps } from "../../../../common/commonProps"
import "./PictoNavItem.css"
import "./PictoNavItem_desktop.css"
import "./PictoNavItem_mobile.css"

interface PictoNavItemProps extends WrapperProps {
    parentSrc: string
    description: string
    onClick: () => void
}
 
const PictoNavItem = (props: PictoNavItemProps) => {
    const srcPrefix = `${props.parentSrc}/PictoNavItem-${props.id}/icon-`;
    var srcActive = srcPrefix + 'active.png';
    var srcInactive = srcPrefix +'inactive.png';
    const [src, setSrc] = useState(srcInactive);

    return <>
        <div 
            className="forDescription"
            onMouseEnter={() => setSrc(srcActive)}
            onMouseLeave={() => setSrc(srcInactive)}
            onClick={props.onClick}
        > 
            <div className="subpage-button" id={`${props.id}-item`} style={props.style}>
                <img 
                    id={`${props.id}-item-img`}
                    src={src}
                    className="picto-nav-item" 
                    alt=""
                />
            </div>
            {props.description!=="" && <p>{props.description}</p>}
        </div>
    </>
}
 
export default PictoNavItem;