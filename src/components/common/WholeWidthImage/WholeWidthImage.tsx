import { WrapperProps } from "../../../common/commonProps";
import "./WholeWidthImage.css";

interface WholeWidthImageProps extends WrapperProps {
    parentsrc: string
}
 
const WholeWidthImage = (props: WholeWidthImageProps) => <img 
        {...props} 
        className={"wholeWidthImage" + (props.className ? " " + props.className : "")}
        src={props.parentsrc +"WholeWidthImages/WholeWidthImage-"+props.id+"/img.png"}
        alt="not found"
    />
 
export default WholeWidthImage;