import React from 'react'

import './MainView.css'
import './MainView_desktop.css'
import './MainView_mobile.css'

import View from "../../../common/View/View";
 
const MainView = () => 
    <View className='snap-scroll-start' id="MainView">
        <img className="backgroundImage" src="resources/MainPage/Views/MainView/img.JPG" alt=""></img>
        {/* <div className="construction-alert">
            <p>Our page is still under construction! <br />
                Open on desktop for better experience, sorry for any inconvenience! <br />
                If you got any questions please contact us!</p>
        </div> */}
    </View>;
    
export default MainView;
