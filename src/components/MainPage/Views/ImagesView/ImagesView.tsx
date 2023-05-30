import "./ImagesView.css";
import "./ImagesView_mobile.css";

import View from "../../../common/View/View";
import WholeWidthImage from '../../../common/WholeWidthImage/WholeWidthImage';
 
const ImagesView = () =>
        <View className="snap-scroll-start" id="Images" headertitle="Instagram">
            <WholeWidthImage id="0" parentsrc='resources/MainPage/Views/ImagesView/' />
        </View>;
 
export default ImagesView;