import "./TrailerSubview1.css"
import "./TrailerSubview1_desktop.css"
import "./TrailerSubview1_mobile.css"

import OrangeSpan from "../../../common/OrangeSpan/OrangeSpan"
import FloatingSpan from "../../../common/FloatingSpan/FloatingSpan"

import { WrapperProps } from "../../../../common/commonProps"

interface TrailerSubview1Props extends WrapperProps {}
 
const TrailerSubview1 = (props: TrailerSubview1Props) => {
    var cofferSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-1-span-0" key={0} onClick={props.onClick}>
        <div className="h3">Durable Upper Body Features</div> <br/>
        
        Our <OrangeSpan>steel coffer construction</OrangeSpan> provides a highly durable and corrosion-resistant body that withstands extreme temperatures and rugged trails. The internal chest is sealed with replaceable <OrangeSpan>heavy-duty rubber gaskets</OrangeSpan> to keep your gear bone-dry! <br/> <br/> <br/> <br/>

            The <OrangeSpan>modular drop-down sides</OrangeSpan> are easy to disassemble and available in various finishes. Customize your expedition trailer with the materials that fit your style. <br/> <br/> <br/> <br/>

            The interior is built with <OrangeSpan>waterproof plywood</OrangeSpan> and <OrangeSpan>stainless steel connectors</OrangeSpan>. Perforated dividers integrate seamlessly with QuickFist attachments for secure tool management.<br/> <br/>

            Feel free to <OrangeSpan>reconfigure</OrangeSpan> section dividers and equipment arrangements as your overlanding needs evolve.<br/> <br/> <br/> <br/>

            The <OrangeSpan>Integrated Roof Carrier</OrangeSpan> features specialized handles and perforation for mounting bikes, kayaks, or extra cargo. <br/> <br/>

            Designed to accommodate a <OrangeSpan>premium roof tent</OrangeSpan> (standard fit: Autohome Overland Medium). <br/> <br/><br/> <br/>

            The entire interior is illuminated with <OrangeSpan>efficient LED lighting</OrangeSpan> managed through a central Power Panel.<br/> <br/>

            Why not illuminate the chassis as well? Add under-chassis lighting for a unique look and better nighttime visibility! <br/> <br/><br/> <br/>

            1. Four Opening Boards – Convenient work surfaces on every side. <br/> <br/>
            2. Ergonomic Handles – For easy manual maneuvering after unhitching. <br/> <br/>
            3. Modular Sections – Tailor the interior to your specific mission profile. <br/> <br/>
            4. Vibration-Proof Connections – All hardware is secured against loosening on rough terrain. <br/> <br/>
    </FloatingSpan>

    var baggageSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-1-span-1" key={1} onClick={props.onClick}>
        <div className="h3">Optimized Baggage Section</div> <br/>
        <span className="italic">…everything in its place.</span> <br/><br/><br/>

        <OrangeSpan>Two Heavy-Duty Sliding Drawers</OrangeSpan> – Perfect for clothes, cooking gear, and small loose equipment. <br/><br/>

        <OrangeSpan>Large Shelf Storage</OrangeSpan> – Designed to fit a camping table and four folding chairs with secure belt attachments.<br/><br/>

        <OrangeSpan>Power Control Panel</OrangeSpan> – Monitor battery status and manage both interior and exterior lighting from one location.<br/><br/>

        <OrangeSpan>Quick-Access Storage</OrangeSpan> – Ideal for safety gear like fire extinguishers and tactical flashlights.
    </FloatingSpan>

    return [cofferSpan, baggageSpan]
}
 
export default TrailerSubview1;