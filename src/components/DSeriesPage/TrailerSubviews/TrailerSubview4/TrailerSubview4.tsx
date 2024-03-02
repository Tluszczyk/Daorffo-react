import "./TrailerSubview4.css"
import "./TrailerSubview4_desktop.css"
import "./TrailerSubview4_mobile.css"

import OrangeSpan from "../../../common/OrangeSpan/OrangeSpan"
import FloatingSpan from "../../../common/FloatingSpan/FloatingSpan"

import { WrapperProps } from "../../../../common/commonProps"

interface TrailerSubview4Props extends WrapperProps {}
 
const TrailerSubview4 = (props: TrailerSubview4Props) => {
    var drivingSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-4-span-0" key={0} onClick={props.onClick}>
        <span className="h3">Driving Features</span> <br/>

        <OrangeSpan>Frame:</OrangeSpan> <br/> spatial frame, stainless, CNC cut, bent and welded - flexibility and high resistance to overload <br/> <br/>

        <OrangeSpan>Drawbar:</OrangeSpan> <br/> adjustable - fit for variable height of the hook in the vehicle<br/> <br/>

        <OrangeSpan>Hitch:</OrangeSpan> <br/> stabilized ball hitch - the trailer is holding the track, leveling tilts in curves and in sloping terrain <br/> <br/>

        <OrangeSpan>Chassis:</OrangeSpan> <br/> Independent suspension, longitudinal trailing arms - high ground clearance, smooth work in uneven terrain <br/> <br/>

        <OrangeSpan>Shock absorber:</OrangeSpan> <br/> coilover shock absorbers with threaded bodies - height adjustment and softness of shock absorption <br/> <br/>

        <OrangeSpan>Brakes:</OrangeSpan> <br/> parking brake / maneuvering - safe detaching of the trailer in an inclined area <br/> <br/>

        <OrangeSpan>Supports:</OrangeSpan> <br/> jockey wheel with lock and folded rear supports - manual leveling of the trailer <br/> <br/>

        <OrangeSpan>Wheels:</OrangeSpan> <br/> same as in the towing vehicle (our size 265/75 R16) with replaceable hub - option of changing the trailer wheels with the car wheels<br/> <br/>
    </FloatingSpan>

    return [drivingSpan]
}
 
export default TrailerSubview4;