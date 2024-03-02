import "./MainSubview.scss"
import "./MainSubview_desktop.scss"
import "./MainSubview_mobile.scss"

import FloatingSpan from "../../../common/FloatingSpan/FloatingSpan"

interface MainSubviewProps {}
 
const MainSubview = (props: MainSubviewProps) => {
    var overviewSpan = <FloatingSpan className="trailer-layout-mid" id="trailer-subview-main-span-0" key={0}>
        <img id="trailer-subview-main-span-0-logo" src="resources/TrailerPage/TrailerSubviews/MainSubview/img-0.png" alt="" />
        <p id="trailer-subview-main-span-0-paragraph">
            D1 is our main product and a fulfillment of our dream, that we have been working on for past couple of years. <br/><br/>

            All of our traveling experience, design skills and market knowledge was forged into D1 to create most unique trailer
            to fit your overlanding needs. <br/><br/>

            Da Orffo D1 is an off-road trailer suited for European steep passages in highlands of Transylvania, narrow village
            streets in Pyrenees and deep muds of Montenegro. <br/><br/>

            Take a look around. If you have more questions, contact us!
        </p>
        <img id="trailer-subview-main-span-0-trailerimg" alt="" src="resources/TrailerPage/TrailerSubviews/MainSubview/img-1.png" />
    </FloatingSpan>

    return [overviewSpan]
}
 
export default MainSubview;