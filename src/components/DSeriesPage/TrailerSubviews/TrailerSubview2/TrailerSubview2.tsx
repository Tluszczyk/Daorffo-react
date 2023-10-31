import "./TrailerSubview2.css"
import "./TrailerSubview2_desktop.css"
import "./TrailerSubview2_mobile.css"

import TrailerSubviewBase from "../TrailerSubviewBase/TrailerSubviewBase"
import OrangeSpan from "../../../common/OrangeSpan/OrangeSpan"

interface TrailerSubview2Props {}
 
const TrailerSubview2 = (props: TrailerSubview2Props) => {
    return <TrailerSubviewBase>
        <span id="EquipmentSpan" className="underNavbarSpan textSpan dinF">
            <h3>Camping. Utility Features</h3>
            <p className="floatingParagraph" id="d1Logo-paragraph" >

                Did you reach your destination? Let's set a camp <br/>
                and discover all the sections around your active camp center. <br/> <br/> <br/> <br/>

                Kitchen Section <br/> <br/>
                Tools Section <br/> <br/>
                Equipment Section <br/> <br/>
                & Baggage Section <br/> <br/> <br/> <br/>

                <div className="text-graphic">
                    <img src="../../resources/graphics/instrukcja daorffo.png" alt=""/>
                </div>

            </p>
            <p className="floatingParagraph" id="Coffie-paragraph" >
                <span className="h3">Kitchen Section</span> <br/> <br/>

                <span className="italic">In 2014 on the Hungarian border traffic we couldn’t have a better opportunity to fold out the kitchen worktop, play music and prepare coffee for us and the cars around.</span>
                <br/> <br/> <br/>
                Kitchen section gives you <OrangeSpan>150cm worktop</OrangeSpan> to feel free space while preparing any food or drinks.<br/> <br/>

                <OrangeSpan>90cm kitchen shelf</OrangeSpan> with rubber attachments to keep the dishes, cutlery, cutting board, bottles, boxes and other stuff at your fingertips.<br/> <br/>

                <OrangeSpan>Place for a double torch gas stove</OrangeSpan>  with gas installation underneath the shelves.<br/> <br/>

                Easy access to a <OrangeSpan>fridge</OrangeSpan> on a sliding supports.<br/> <br/>

                On demand, we will install <OrangeSpan>sink with a tap.</OrangeSpan>
            </p>

            <p className="floatingParagraph" id="Tools-paragraph" >
                <span className="h3">Tools Section</span> <br/>
                <span className="italic">We will need an axe! …and a shovel!</span> <br/> <br/> <br/>

                    <OrangeSpan>Quick access to the tools is a must! </OrangeSpan> <br/>
                    Why not to have them all in the sight? <br/> <br/>

                    <OrangeSpan>Customize your Tools Section to your needs.</OrangeSpan> Fishing equipment? Hunting riffles? Tripod with
                    a cooking pot? Yes! Let’s fit them there too! <br/> <br/>

                    ...and the faces of security guards every time we open this side for border control. Worthless! :D
            </p>

            <p className="floatingParagraph" id="Chests-paragraph" >
                <span className="h3">Inventory Section</span> <br/> <br/> <br/>
                <OrangeSpan>120x70x50 cm inventory space </OrangeSpan>for bigger stuff you don’t want to worry about with access from the front and from the kitchen side. <br/><br/>

                We keep here <OrangeSpan>the fridge on the sliding supports</OrangeSpan>, but whenether we decide to take the fridge to the car we exchange it for a storage boxes. <br/><br/>

                <OrangeSpan>Electrical installation</OrangeSpan> keeps the fridge connected to the power.<br/><br/>

                Bottled water, additional tents and bags can go there as well.<br/><br/>
            </p>

            <p className="floatingParagraph" id="Cloaths-paragraph" >
                <span className="h3"> Baggage Section</span> <br/>
                <span className="italic">…the last but not least.</span> <br/><br/><br/>

                <OrangeSpan>Two sliding drawers</OrangeSpan> for loose equipment like shoes, clothes, cooking pots and paper towel. <br/><br/>

                <OrangeSpan>Large shelf</OrangeSpan> for camping table and 4 folding chairs with a belt attachment.<br/><br/>

                <OrangeSpan>Power Control Panel</OrangeSpan> to control battery status,  lights inside and outside the trailer and couple power plugs.<br/><br/>

                <OrangeSpan>Small storage space</OrangeSpan> at your service. We like to fit there small extinguisher and a camping flashlight.
            </p>
        </span>
    </TrailerSubviewBase>
}
 
export default TrailerSubview2;