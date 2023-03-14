import "./TrailerSubview3.css"
import "./TrailerSubview3_desktop.css"
import "./TrailerSubview3_mobile.css"

import TrailerSubviewBase from "../TrailerSubviewBase/TrailerSubviewBase"
import OrangeSpan from "../../../common/OrangeSpan/OrangeSpan"

interface TrailerSubview3Props {}
 
const TrailerSubview3 = (props: TrailerSubview3Props) => {
    return <TrailerSubviewBase>
        <span id="EquipmentSpan" className="underNavbarSpan textSpan dinF">
            <h3>Chassis Features</h3>
            <p className="floatingParagraph" id="d1Logo-paragraph" >

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

            </p>
        </span>
    </TrailerSubviewBase>
}
 
export default TrailerSubview3;