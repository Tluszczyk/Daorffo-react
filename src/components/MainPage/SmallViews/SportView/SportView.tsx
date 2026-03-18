import View from "../../../common/View/View"

import "./SportView.css"
import "./SportView_desktop.css"
import "./SportView_mobile.css"

const SportView = () => 
    <View className="snap-scroll-center" id="sportView">
        <div id="sport">
            <div id="sportSpan">
                <h3 className="sectionH">Mastering Off-Grid Camping with High-Clearance 4x4 Trailers</h3>
                <span className="sectionP">
                    True off-roading demands superior hardware. That’s why we prioritize high clearance, independent 
                    suspension, and heavy-duty shock absorbers with threaded bodies. Our focus is ensuring your 
                    off-road expedition trailer never gets stuck, even when the terrain pushes your truck to its 
                    limits. <br/> <br/>

                    Customize your setup with our premium selection of dampers to match your specific 
                    overlanding requirements.
                </span>
            </div>
            <img id="sportI" src="resources/MainPage/SmallViews/SportView/img.png" alt="Daorffo off-road trailer with high-clearance independent suspension on rugged terrain"/>
        </div>
    </View>
 
export default SportView;