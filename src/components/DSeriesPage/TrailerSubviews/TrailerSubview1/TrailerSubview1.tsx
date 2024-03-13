import "./TrailerSubview1.css"
import "./TrailerSubview1_desktop.css"
import "./TrailerSubview1_mobile.css"

import OrangeSpan from "../../../common/OrangeSpan/OrangeSpan"
import FloatingSpan from "../../../common/FloatingSpan/FloatingSpan"

import { WrapperProps } from "../../../../common/commonProps"

interface TrailerSubview1Props extends WrapperProps {}
 
const TrailerSubview1 = (props: TrailerSubview1Props) => {
    var cofferSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-1-span-0" key={0} onClick={props.onClick}>
        <div className="h3">Upper Body Features</div> <br/>
        
        <OrangeSpan> Steel constructed coffer</OrangeSpan> makes the body durable and resistant to corrosion and temperature.
            The chest is sealed tight with replaceable <OrangeSpan>rubber gaskets</OrangeSpan>, which keep interior dry! <br/> <br/> <br/> <br/>

            Easy to unassemble, <OrangeSpan>waterproof drop-down sides</OrangeSpan> go with different finish material. Choose fitting option from our offer. <br/> <br/> <br/> <br/>

            Interior is made from <OrangeSpan>waterproof plywood</OrangeSpan> with <OrangeSpan>stainless steel connectors</OrangeSpan>. Dividers’ perforation works well with QuickFist’s attach system.<br/> <br/>

            Feel free to <OrangeSpan>replace</OrangeSpan> and <OrangeSpan>reconfigure</OrangeSpan> your sections dividers and equipment arrangement.<br/> <br/> <br/> <br/>

            Steel Roof Carrier is equipped with <OrangeSpan>handles</OrangeSpan> and <OrangeSpan>perforation</OrangeSpan> to let you attach bicycles, kayaks and whatever you need. <br/> <br/>

            It’s also designed to fit a <OrangeSpan>roof tent</OrangeSpan>. <br/>
            We use Autohome Overland Medium, which is 110x160 cm closed and 220x160 opened. <br/> <br/><br/> <br/>

            Whole interior is enlighten with <OrangeSpan>LED lights</OrangeSpan> controlled with the Power Panel.<br/> <br/>

            Why not illuminate the chassis as well? Go with Tokyo Drift style a little and <OrangeSpan>let your trailer shine!</OrangeSpan> <br/> <br/><br/> <br/>


            1. opening boards - comfortable work tops on each side  <br/> <br/>
            2. maneuvering handles - maneuvering the trailer after unfastening <br/> <br/>
            3. division into sections - fitting interior option to the concept of the vehicle user <br/> <br/>
            4. screw connections - secured against unscrewing <br/> <br/>
    </FloatingSpan>

    var baggageSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-1-span-1" key={1} onClick={props.onClick}>
        <div className="h3"> Baggage Section</div> <br/>
        <span className="italic">…the last but not least.</span> <br/><br/><br/>

        <OrangeSpan>Two sliding drawers</OrangeSpan> for loose equipment like shoes, clothes, cooking pots and paper towel. <br/><br/>

        <OrangeSpan>Large shelf</OrangeSpan> for camping table and 4 folding chairs with a belt attachment.<br/><br/>

        <OrangeSpan>Power Control Panel</OrangeSpan> to control battery status,  lights inside and outside the trailer and couple power plugs.<br/><br/>

        <OrangeSpan>Small storage space</OrangeSpan> at your service. We like to fit there small extinguisher and a camping flashlight.
    </FloatingSpan>

    return [cofferSpan, baggageSpan]
}
 
export default TrailerSubview1;