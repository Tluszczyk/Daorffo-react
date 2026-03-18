import "./TrailerSubview2.css"
import "./TrailerSubview2_desktop.css"
import "./TrailerSubview2_mobile.css"

import OrangeSpan from "../../../common/OrangeSpan/OrangeSpan"

import FloatingSpan from "../../../common/FloatingSpan/FloatingSpan"
import FloatingNabvar from "../../../common/FloatingNabvar/FloatingNabvar"

import { WrapperProps } from "../../../../common/commonProps"

interface TrailerSubview2Props extends WrapperProps {}

const TrailerSubview2 = (props: TrailerSubview2Props) => {
    var overviewSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-2-span-0" key={0} onClick={props.onClick}>
        <div className="h3">The Active Camp Center</div> <br/> <br/>

        Ready to set up camp? Discover the specialized sections designed around your <OrangeSpan>Active Camp Center</OrangeSpan>: <br/> <br/> <br/> <br/>

        1. Kitchen Section <br/> <br/>
        2. Tools Section <br/> <br/>
        3. Inventory Section <br/> <br/>
        4. Baggage Section <br/> <br/> <br/> <br/>

        <div className="text-graphic">
            <img src="resources/TrailerPage/TrailerSubviews/TrailerSubview2/0.png" alt="Daorffo D1 Active Camp Center - All-around gear access"/>
        </div>
    </FloatingSpan>

    var kitchenSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-2-span-1" key={1} onClick={props.onClick}>
        <div className="h3">Integrated Kitchen Section</div> <br/> <br/>

        <span className="italic">From brewing morning coffee to preparing gourmet camp meals, our kitchen section is built for convenience.</span>
        <br/> <br/> <br/>
        Enjoy a <OrangeSpan>150cm worktop</OrangeSpan> providing ample space for food prep and drinks.<br/> <br/>

        The <OrangeSpan>90cm kitchen shelf</OrangeSpan> features rubber attachments to keep dishes, cutlery, and essentials organized and at your fingertips.<br/> <br/>

        Space for a <OrangeSpan>double-burner gas stove</OrangeSpan> with integrated gas lines for a clean, efficient setup.<br/> <br/>

        Quick access to your <OrangeSpan>portable fridge</OrangeSpan> on heavy-duty sliding supports.<br/> <br/>

        On demand, we can install a <OrangeSpan>sink with a water tap</OrangeSpan> for ultimate comfort.
    </FloatingSpan>

    var toolsSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-2-span-2" key={2} onClick={props.onClick}>
        <div className="h3">Rapid-Access Tools Section</div> <br/>
        <span className="italic">Efficiency in the wild is priceless!</span> <br/> <br/> <br/>

        <OrangeSpan>Immediate access to your tools</OrangeSpan> is critical when navigating the trail. Keep everything visible and organized. <br/> <br/>

        <OrangeSpan>Customizable for your mission.</OrangeSpan> Whether you need mounts for fishing gear, hunting rifles, or tactical equipment, we can tailor this section to your specific needs. <br/> <br/>

        And seeing the reaction of border security when you open this section is a bonus! :D
    </FloatingSpan>

    var inventorySpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-2-span-3" key={3} onClick={props.onClick}>
        <div className="h3">Massive Inventory Section</div> <br/> <br/> <br/>
        Featuring <OrangeSpan>120x70x50 cm of internal inventory space</OrangeSpan> for large equipment, accessible from both the front and the kitchen side. <br/><br/>

        This area holds the <OrangeSpan>fridge on heavy-duty sliders</OrangeSpan>, which can easily be swapped for storage boxes if needed. <br/><br/>

        Integrated <OrangeSpan>electrical installation</OrangeSpan> ensures your cooling system stays powered throughout your journey.<br/><br/>

        Perfect for additional water storage, spare bags, and bulk camping gear.<br/><br/>
    </FloatingSpan>

    var baggageSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-2-span-4" key={4} onClick={props.onClick}>
        <div className="h3">Optimized Baggage Section</div> <br/>
        <span className="italic">…everything in its place.</span> <br/><br/><br/>

        <OrangeSpan>Two Heavy-Duty Sliding Drawers</OrangeSpan> – Perfect for clothes, cooking gear, and small loose equipment. <br/><br/>

        <OrangeSpan>Large Shelf Storage</OrangeSpan> – Designed to fit a camping table and four folding chairs with secure belt attachments.<br/><br/>

        <OrangeSpan>Power Control Panel</OrangeSpan> – Monitor battery status and manage both interior and exterior lighting from one location.<br/><br/>

        <OrangeSpan>Quick-Access Storage</OrangeSpan> – Ideal for safety gear like fire extinguishers and tactical flashlights.
    </FloatingSpan>

    var floatingNavbar = <FloatingNabvar 
        className="trailer-layout-left"
        itemsClassName="trailer-layout-left"
        id="trailer-subview-2-navbar" key={5} 
        iconsSrcs="resources/TrailerPage/TrailerSubviews/TrailerSubview0/FloatingNavbar" 
        itemsCount={5}
        subviewIndex={2}
    />
    
    return [overviewSpan, kitchenSpan, toolsSpan, inventorySpan, baggageSpan, floatingNavbar]
}
 
export default TrailerSubview2;