import { WrapperProps } from "../../../common/commonProps";
import "./WholeWidthImage.css";

interface WholeWidthImageProps extends WrapperProps {
    parentSrc: string
}
 
const WholeWidthImage = (props: WholeWidthImageProps) => <img 
        className="wholeWidthImage" 
        src={props.parentSrc +"WholeWidthImages/WholeWidthImage-"+props.id+"/img.png"}
        alt=""
        {...props} 
    />
 
export default WholeWidthImage;