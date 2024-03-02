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
        <span className="h3">Camping. Utility Features</span> <br/> <br/>

        Did you reach your destination? Let's set a camp <br/>
        and discover all the sections around your active camp center. <br/> <br/> <br/> <br/>

        Kitchen Section <br/> <br/>
        Tools Section <br/> <br/>
        Equipment Section <br/> <br/>
        & Baggage Section <br/> <br/> <br/> <br/>

        <div className="text-graphic">
            <img src="../../resources/graphics/instrukcja daorffo.png" alt=""/>
        </div>
    </FloatingSpan>

    var kitchenSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-2-span-1" key={1} onClick={props.onClick}>
        <span className="h3">Kitchen Section</span> <br/> <br/>

        <span className="italic">In 2014 on the Hungarian border traffic we couldn’t have a better opportunity to fold out the kitchen worktop, play music and prepare coffee for us and the cars around.</span>
        <br/> <br/> <br/>
        Kitchen section gives you <OrangeSpan>150cm worktop</OrangeSpan> to feel free space while preparing any food or drinks.<br/> <br/>

        <OrangeSpan>90cm kitchen shelf</OrangeSpan> with rubber attachments to keep the dishes, cutlery, cutting board, bottles, boxes and other stuff at your fingertips.<br/> <br/>

        <OrangeSpan>Place for a double torch gas stove</OrangeSpan>  with gas installation underneath the shelves.<br/> <br/>

        Easy access to a <OrangeSpan>fridge</OrangeSpan> on a sliding supports.<br/> <br/>

        On demand, we will install <OrangeSpan>sink with a tap.</OrangeSpan>
    </FloatingSpan>

    var toolsSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-2-span-2" key={2} onClick={props.onClick}>
        <span className="h3">Tools Section</span> <br/>
        <span className="italic">We will need an axe! …and a shovel!</span> <br/> <br/> <br/>

        <OrangeSpan>Quick access to the tools is a must! </OrangeSpan> <br/>
        Why not to have them all in the sight? <br/> <br/>

        <OrangeSpan>Customize your Tools Section to your needs.</OrangeSpan> Fishing equipment? Hunting riffles? Tripod with
        a cooking pot? Yes! Let’s fit them there too! <br/> <br/>

        ...and the faces of security guards every time we open this side for border control. Worthless! :D
    </FloatingSpan>

    var inventorySpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-2-span-3" key={3} onClick={props.onClick}>
        <span className="h3">Inventory Section</span> <br/> <br/> <br/>
        <OrangeSpan>120x70x50 cm inventory space </OrangeSpan>for bigger stuff you don’t want to worry about with access from the front and from the kitchen side. <br/><br/>

        We keep here <OrangeSpan>the fridge on the sliding supports</OrangeSpan>, but whenether we decide to take the fridge to the car we exchange it for a storage boxes. <br/><br/>

        <OrangeSpan>Electrical installation</OrangeSpan> keeps the fridge connected to the power.<br/><br/>

        Bottled water, additional tents and bags can go there as well.<br/><br/>
    </FloatingSpan>

    var baggageSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-2-span-4" key={4} onClick={props.onClick}>
        <span className="h3"> Baggage Section</span> <br/>
        <span className="italic">…the last but not least.</span> <br/><br/><br/>

        <OrangeSpan>Two sliding drawers</OrangeSpan> for loose equipment like shoes, clothes, cooking pots and paper towel. <br/><br/>

        <OrangeSpan>Large shelf</OrangeSpan> for camping table and 4 folding chairs with a belt attachment.<br/><br/>

        <OrangeSpan>Power Control Panel</OrangeSpan> to control battery status,  lights inside and outside the trailer and couple power plugs.<br/><br/>

        <OrangeSpan>Small storage space</OrangeSpan> at your service. We like to fit there small extinguisher and a camping flashlight.
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