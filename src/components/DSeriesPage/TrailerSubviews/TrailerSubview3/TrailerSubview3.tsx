import "./TrailerSubview3.css"
import "./TrailerSubview3_desktop.css"
import "./TrailerSubview3_mobile.css"

import OrangeSpan from "../../../common/OrangeSpan/OrangeSpan"
import FloatingSpan from "../../../common/FloatingSpan/FloatingSpan"

import { WrapperProps } from "../../../../common/commonProps"

interface TrailerSubview3Props extends WrapperProps {}
 
const TrailerSubview3 = (props: TrailerSubview3Props) => {
    var chassisSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-3-span-0" key={0} onClick={props.onClick}>
        <div className="h3">Heavy-Duty Chassis Features</div> <br/>

        <i>The chassis is the heart of an expedition trailer. Never compromise on the foundation of your overlanding rig. After years of extreme testing, we've developed a solution respected across the global overland community.</i> <br/>  <br/>

        <ul>
        <li><OrangeSpan>Galvanized and Powder Coated Chassis (Duplex)</OrangeSpan> – Maximum resistance to corrosion, rust, and physical damage on the trail. <br/> <br/></li>

        <li> <OrangeSpan>Ultra-Lightweight Frame</OrangeSpan> & <OrangeSpan>Compact Dimensions</OrangeSpan>
        <br/> – Designed for effortless movement, reversing, and tight turns in challenging terrain.<br/> <br/></li>

        <li><OrangeSpan>High-Performance Independent Suspension</OrangeSpan> & <OrangeSpan>Stabilized Drawbar</OrangeSpan>
        <br/> – Seamlessly levels terrain unevenness and eliminates the "bouncing effect" common in standard trailers.<br/> <br/></li>

        <li><OrangeSpan>Adjustable Coil-Over Shock Absorbers</OrangeSpan> <br/>
        – Threaded bodies allow for manual adjustment of height and stiffness to match your load and terrain. <br/></li> <br/>

        <li> <OrangeSpan>Optimal Weight Distribution</OrangeSpan> – Integrated storage for fuel, gas, and batteries between the wheels lowers the center of gravity. <br/> <br/></li>

        <li><OrangeSpan>Steel Chassis Guards</OrangeSpan>
        <br/> – Protects critical equipment and tanks against impact and trail debris.</li>

        </ul>

        <br/><br/><br/> The <OrangeSpan>d1|Chassis</OrangeSpan> is available separately for custom build-outs. Our new 3D CNC-cut and precision-welded steel construction ensures unmatched structural integrity. <br/> <br/>
    </FloatingSpan>

    return [chassisSpan]
}
 
export default TrailerSubview3;