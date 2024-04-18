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
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/0.gif"
                link="/about" buttonDescription="About" contentType="gif" length={6000} index={0} key={0}
            />
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/1.gif"
                link="/services" buttonDescription="Services" contentType="gif" length={6000} index={1} key={1}
            />
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/2.jpg"
                link="/contact" buttonDescription="Contact" contentType="image" index={2} key={2}
            />
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/3.jpg"
                link="/test" buttonDescription="Test" contentType="image" index={3} key={3}
            />
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/4.jpg"
                link="/test" buttonDescription="Test" contentType="image" index={4} key={4}
            />
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/5.jpg"
                link="/test" buttonDescription="Test" contentType="image" index={5} key={5}
            />
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/6.jpg"
                link="/test" buttonDescription="Test" contentType="image" index={6} key={6}
            />
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/7.jpg"
                link="/test" buttonDescription="Test" contentType="image" index={7} key={7}
            />
            <SlidingPanel 
                panelSrc="resources/MainPage/Views/MainView/SlidingPanels/8.jpg"
                link="/test" buttonDescription="Test" contentType="image" index={8} key={8}
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
