import SmallView from "../../../common/SmallView/SmallView";

import "./ApplicabilityView.css";
import "./ApplicabilityView_desktop.css";
import "./ApplicabilityView_mobile.css";

const ApplicabilityView = () => 
    <SmallView>
        <div id="applicability">
            <img id="applicationsI" src="resources/MainPage/SmallViews/ApplicabilityView/img.png" alt="" />
            <div id="applicationsSpan">
                <h3 className="sectionH">Our SUT is always leveled!</h3>
                <span className="sectionP">
                    Sport Utility Trailer is made to adjust to any off-road car. That's why we encourage to use adjustable hitch height
                    drawbar and the same set of wheels like in your car. The SUT will be well leveled and can go anywhere you can! <br/> <br/>

                    Psst.. notice! Now you can have two more spare wheels in case of emergency! 🙂
                </span>
            </div>
        </div>
    </SmallView>
 
export default ApplicabilityView;