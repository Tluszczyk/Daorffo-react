import "./TrailerSubview4.css"
import "./TrailerSubview4_desktop.css"
import "./TrailerSubview4_mobile.css"

import OrangeSpan from "../../../common/OrangeSpan/OrangeSpan"
import FloatingSpan from "../../../common/FloatingSpan/FloatingSpan"

import { WrapperProps } from "../../../../common/commonProps"

interface TrailerSubview4Props extends WrapperProps {}
 
const TrailerSubview4 = (props: TrailerSubview4Props) => {
    var drivingSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-4-span-0" key={0} onClick={props.onClick}>
        <div className="h3">Advanced Off-Road Driving Features</div> <br/>

        <OrangeSpan>Precision-Engineered Frame:</OrangeSpan> <br/> Spatial, CNC-cut, and 3D-welded construction provides maximum flexibility and resistance to overload on extreme trails. <br/> <br/>

        <OrangeSpan>Adjustable Drawbar:</OrangeSpan> <br/> Easily fits various 4x4 vehicle hitch heights for perfect horizontal leveling. <br/> <br/>

        <OrangeSpan>Stabilized Hitch:</OrangeSpan> <br/> Ensures precise tracking and levels side-tilts during high-speed curves and sloping terrain. <br/> <br/>

        <OrangeSpan>Independent Suspension:</OrangeSpan> <br/> Longitudinal trailing arms provide high ground clearance and smooth performance on uneven terrain. <br/> <br/>

        <OrangeSpan>Premium Coil-Overs:</OrangeSpan> <br/> Threaded shock bodies allow for precise manual adjustment of height and damping softness. <br/> <br/>

        <OrangeSpan>Reliable Braking System:</OrangeSpan> <br/> Integrated parking and maneuvering brake for safe detachment even on inclined surfaces. <br/> <br/>

        <OrangeSpan>Leveling Supports:</OrangeSpan> <br/> Includes a locking jockey wheel and foldable rear supports for stable manual leveling at camp. <br/> <br/>

        <OrangeSpan>Vehicle-Matched Wheels:</OrangeSpan> <br/> Available with hubs matching your towing vehicle (standard: 265/75 R16) for complete spare wheel compatibility. <br/> <br/>
    </FloatingSpan>

    return [drivingSpan]
}
 
export default TrailerSubview4;