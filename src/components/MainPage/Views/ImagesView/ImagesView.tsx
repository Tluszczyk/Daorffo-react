import "./ImagesView_mobile.css";
import "./ImagesView_desktop.css";
import "./ImagesView.css";

import ImageCarousel from "../../../common/ImageCarousel/ImageCarousel";

import View from "../../../common/View/View";
// import WholeWidthImage from '../../../common/WholeWidthImage/WholeWidthImage';
 
const ImagesView = () => {

    return (
        <View className="snap-scroll-start" id="Images" headertitle="Instagram">
            {/* <WholeWidthImage id="0" parentsrc='resources/MainPage/Views/ImagesView/' /> */}
            
            <ImageCarousel
                imageSrcs={[
                    "https://www.instagram.com/p/C1rvXZnM0wA/media",
                    "https://www.instagram.com/p/Czy2NdAITsy/media",
                    "https://www.instagram.com/p/CzEIWn5MrP0/media",
                    "https://www.instagram.com/p/CzEHz8FM2kQ/media",
                    "https://www.instagram.com/p/Cy1L4gDMLqK/media",
                    "https://www.instagram.com/p/CwxbS2-sKsD/media",
                    "https://www.instagram.com/p/CzEHz8FM2kQ/media",
                    "https://www.instagram.com/p/Cy1L4gDMLqK/media",
                ]}
            />

        </View>
    );
}
 
export default ImagesView;