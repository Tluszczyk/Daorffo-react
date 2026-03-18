import View from "../../../common/View/View";

import "./ApplicabilityView.css";
import "./ApplicabilityView_desktop.css";
import "./ApplicabilityView_mobile.css";

const ApplicabilityView = () => 
    <View className="snap-scroll-center" id="applicabilityView">
        <div id="applicability">
            <img id="applicationsI" src="resources/MainPage/SmallViews/ApplicabilityView/img.png" alt="Daorffo Sport Utility Trailer (SUT) leveled on a steep rocky mountain pass" />
            <div id="applicationsSpan">
                <h3 className="sectionH">Custom Sport Utility Trailers Engineered for Any Terrain</h3>
                <span className="sectionP">
                    Our custom sport utility trailers (SUT) are built to follow your vehicle's lead. With an adjustable 
                    hitch height drawbar and wheels that can match your towing vehicle, your trailer stays perfectly 
                    leveled no matter how rugged the terrain. This high-clearance design ensures your off-road overland 
                    trailer can conquer the same 4x4 trails as your truck. <br/> <br/>

                    <strong>Bonus:</strong> By matching your trailer wheels to your car, you effectively carry two extra 
                    spare wheels for emergency situations! 🙂
                </span>
            </div>
        </div>
    </View>
 
export default ApplicabilityView;