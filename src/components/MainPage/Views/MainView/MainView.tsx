// components
import SlidingPanels from '../../../common/SlidingPanels/SlidingPanels';

// styles
import './MainView.css'
import './MainView_desktop.css'
import './MainView_mobile.css'

import View from "../../../common/View/View";
 
const MainView = () => {
    // const mobile = window.innerWidth < 768;

    return <View className='snap-scroll-start' id="MainView">
        {/* <img className="backgroundImage" src={`resources/MainPage/Views/MainView/bg-${mobile ? "mobile" : "desktop"}.jpg`} alt="not found"></img> */}

        <SlidingPanels
            src={`resources/MainPage/Views/MainView/SlidingPanels/`}
            links={["/about", "/services", "/contact", "/test"]}
            buttonDescriptions={["About", "Services", "Contact", "Test4"]}
        />

        {/* <div className="construction-alert">
            <p>Our page is still under construction! <br />
                Open on desktop for better experience, sorry for any inconvenience! <br />
                If you got any questions please contact us!</p>
        </div> */}
    </View>;
}
    
export default MainView;
