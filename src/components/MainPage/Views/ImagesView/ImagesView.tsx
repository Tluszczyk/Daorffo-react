import "./ImagesView.css";
import "./ImagesView_mobile.css";

import View from "../../../common/View/View";
import WholeWidthImage from '../../../common/WholeWidthImage/WholeWidthImage';
 
const ImagesView = () =>
        <View id="Images">
            <h1>Instagram</h1>
        <WholeWidthImage id="0" parentSrc='resources/MainPage/Views/ImagesView/' />
        </View>;
 
export default ImagesView;