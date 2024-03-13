import "./TrailerSubview3.css"
import "./TrailerSubview3_desktop.css"
import "./TrailerSubview3_mobile.css"

import OrangeSpan from "../../../common/OrangeSpan/OrangeSpan"
import FloatingSpan from "../../../common/FloatingSpan/FloatingSpan"

import { WrapperProps } from "../../../../common/commonProps"

interface TrailerSubview3Props extends WrapperProps {}
 
const TrailerSubview3 = (props: TrailerSubview3Props) => {
    var chassisSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-3-span-0" key={0} onClick={props.onClick}>
        <div className="h3">Chassis Features</div> <br/>

        <i>The most important part of the trailer. <br/> Never go far without solid and reliable chassis!
        <br/> After years of testing we came out with the solution that is well respected in the overland community. <br/>  <br/></i>

        <ul>
        <li><OrangeSpan>Galvanized and powder coated chassis (duplex)</OrangeSpan> to provide durability and resistance to damage and corrosion <br/> <br/></li>

        <li> <OrangeSpan>Low frame weight </OrangeSpan> and <OrangeSpan> short trailer dimensions</OrangeSpan>
        <br/> - ease of movement in the field, reversing and turning back<br/> <br/></li>

        <li><OrangeSpan>Independent suspension </OrangeSpan> and <OrangeSpan>drawbar with stabilizer</OrangeSpan>
        <br/> - leveling unevenness of the terrain, no bouncing effect<br/> <br/></li>

        <li><OrangeSpan>Regulated stiffness and height of the double-spring shock absorbers (Coil-Overs) </OrangeSpan> <br/>
        - suspension adapts itself to the road unevenness <br/>
        - can be set manually responding to the equipment weight</li> <br/>

        <li> <OrangeSpan>Storage space for fuel, gas, battery and water tank between wheels</OrangeSpan> - direct access, lower center of gravity <br/> <br/></li>

        <li><OrangeSpan>Equipment fastened on steel chassis guards</OrangeSpan>
        <br/> - protection against damage</li>

        </ul>

        <br/><br/><br/> <OrangeSpan>d1|Chassis</OrangeSpan>  can be sold separately for your own upper body arrangement. In the new design the steel sheet chassis construction is 3D cut and welded.  <br/> <br/>
    </FloatingSpan>

    return [chassisSpan]
}
 
export default TrailerSubview3;