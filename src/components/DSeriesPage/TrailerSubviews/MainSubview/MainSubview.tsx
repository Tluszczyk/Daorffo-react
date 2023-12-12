import "./MainSubview.scss"
import "./MainSubview_desktop.scss"
import "./MainSubview_mobile.scss"

import TrailerSubviewBase from "../TrailerSubviewBase/TrailerSubviewBase"

interface MainSubviewProps {}
 
const MainSubview = (props: MainSubviewProps) => {
    return <>
        <TrailerSubviewBase id="main-trailer-subview">
            <span className="textSpan">
                <img src="resources/TrailerPage/TrailerSubviews/MainSubview/img-0.png" alt="" />
                <p>
                    D1 is our main product and a fulfillment of our dream, that we have been working on for past couple of years. <br/><br/>

                    All of our traveling experience, design skills and market knowledge was forged into D1 to create most unique trailer
                    to fit your overlanding needs. <br/><br/>

                    Da Orffo D1 is an off-road trailer suited for European steep passages in highlands of Transylvania, narrow village
                    streets in Pyrenees and deep muds of Montenegro. <br/><br/>

                    Take a look around. If you have more questions, contact us!
                </p>
            </span>
            <img id="trailerimg" alt="" src="resources/TrailerPage/TrailerSubviews/MainSubview/img-1.png" />
        </TrailerSubviewBase>
    </>
}
 
export default MainSubview;