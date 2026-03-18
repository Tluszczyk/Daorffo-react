import "./TrailerSubview0.css"
import "./TrailerSubview0_desktop.css"
import "./TrailerSubview0_mobile.css"

import OrangeSpan from "../../../common/OrangeSpan/OrangeSpan"
import FloatingSpan from "../../../common/FloatingSpan/FloatingSpan"
import { WrapperProps } from "../../../../common/commonProps"

interface TrailerSubview0Props extends WrapperProps {}
 
const TrailerSubview0 = (props: TrailerSubview0Props) => {
    var overviewSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-0-span-0" key={0} onClick={props.onClick}>
        <div><img width="300" alt="Daorffo D1 Off-Road Expedition Trailer" src="resources/TrailerPage/TrailerSubviews/TrailerSubview0/img-0.png"/></div>

        <h3>The D1 Expedition Trailer</h3>

        The core mission of the D-Series was to create an expedition trailer that is compact, lightweight, durable, and comfortable. <br/> <br/>

        The <OrangeSpan>daorffo|d1</OrangeSpan> trailer combines our high-clearance off-road chassis with a versatile upper body featuring drop-down sides. This design ensures easy access to all your overlanding gear and provides convenient workspaces at an ergonomic height.
        <br/> We believe your equipment should be at your fingertips, not at your feet! <br/> <br/> <br/> <br/>

        <OrangeSpan>Category:</OrangeSpan> O1 <br/>
        Gross Vehicle Weight (GVW):
        <li>Homologated up to 550 kg for ultimate maneuverability.</li>
        <li>Homologated up to 750 kg for maximum load capacity.</li> <br/>
        <br/> <br/>

        <OrangeSpan>Dimensions & Specs:</OrangeSpan> <br/>
        Length (including drawbar) ~ 333 cm <br/>
        Width = 158 cm <br/>
        Height (chassis + body) = 160 cm <br/>
        Working Top Height = 90 cm <br/>
        Independent Suspension Travel = 20 cm <br/> <br/> <br/>

        {/* <OrangeSpan>Prices:</OrangeSpan> <br/>
        <li>Basic Version from 12 500 euro</li>
        <li>Cool Version from 15 500 euro </li> <br/>
        ~ additional equipment (battery, water tank, stove etc.) is priced separetely <br/> */}
    </FloatingSpan>

    return [overviewSpan]
}
 
export default TrailerSubview0;