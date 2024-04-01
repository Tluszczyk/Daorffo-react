// components
import SlidingPanels from '../../../common/SlidingPanels/SlidingPanels';
import SlidingPanel from '../../../common/SlidingPanels/SlidingPanel/SlidingPanel';

// styles
import './MainView.css'
import './MainView_desktop.css'
import './MainView_mobile.css'

import View from "../../../common/View/View";
 
const MainView = () => {
    return <View className='snap-scroll-start' id="MainView">
        <SlidingPanels>
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/0.jpg"
                link="/about" buttonDescription="About" contentType="image" key={0}
            />
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/1.mp4"
                link="/services" buttonDescription="Services" contentType="video" key={1}
            />
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/2.gif"
                link="/contact" buttonDescription="Contact" contentType="gif" key={2}
            />
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/3.jpg"
                link="/test" buttonDescription="Test" contentType="image" key={3}
            />
        </SlidingPanels>

        {/* <div className="construction-alert">
            <p>Our page is still under construction! <br />
                Open on desktop for better experience, sorry for any inconvenience! <br />
                If you got any questions please contact us!</p>
        </div> */}
    </View>;
}


export default MainView;
