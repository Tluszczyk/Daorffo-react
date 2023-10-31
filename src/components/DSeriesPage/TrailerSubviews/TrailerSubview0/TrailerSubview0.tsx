import "./TrailerSubview0.css"
import "./TrailerSubview0_desktop.css"
import "./TrailerSubview0_mobile.css"

import TrailerSubviewBase from "../TrailerSubviewBase/TrailerSubviewBase"
import OrangeSpan from "../../../common/OrangeSpan/OrangeSpan"

interface TrailerSubview0Props {}
 
const TrailerSubview0 = (props: TrailerSubview0Props) => {
    return <>
        <TrailerSubviewBase>
            <span className="underNavbarSpan textSpan">
                <img width="300" alt="No resource found" src="resources/TrailerPage/TrailerSubviews/TrailerSubview0/img-0.png"/>
                    <h3>About</h3>
                    <p className="floatingParagraph dinF">
                        The main goal of D.Series was to be compact, light, durable and comfortable. <br/> <br/>

                        The <OrangeSpan>daorffo|d1</OrangeSpan> trailer consist of the d1 off-road chassis and the rectangular upper body with drop-down sides, which provide easy access  to equipment and working tops all around the trailer.
                        <br/> We just prefer to keep our stuff in the right height so we don't need to bend down too much! <br/> <br/> <br/> <br/>

                        <OrangeSpan>Category:</OrangeSpan> O1 <br/>
                        Maximum permissible laden weight (MPLW) (DMC):
                        <li>homologated as "up to 550 kg" </li>
                        <li>homologated as "up to 750 kg"</li> <br/>
                        <br/> <br/>

                        <OrangeSpan>Dimensions:</OrangeSpan> <br/>
                        length (with drawbar) ~ 333 cm <br/>
                        width = 158 cm <br/>
                        height (no tent) = 160 cm <br/>
                        working top height = 90 cm <br/>
                        suspension travel = 20 cm <br/> <br/> <br/>

                        {/* <OrangeSpan>Prices:</OrangeSpan> <br/>
                        <li>Basic Version from 12 500 euro</li>
                        <li>Cool Version from 15 500 euro </li> <br/>
                        ~ additional equipment (battery, water tank, stove etc.) is priced separetely <br/> */}
                    </p>
                </span>
        </TrailerSubviewBase>
    </>
}
 
export default TrailerSubview0;