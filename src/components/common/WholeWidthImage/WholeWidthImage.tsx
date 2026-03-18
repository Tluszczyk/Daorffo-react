import { WrapperProps } from "../../../common/commonProps";
import "./WholeWidthImage.css";

interface WholeWidthImageProps extends WrapperProps {
    parentsrc: string;
    alt?: string;
}
 
const WholeWidthImage = (props: WholeWidthImageProps) => <img 
        {...props} 
        className={"wholeWidthImage" + (props.className ? " " + props.className : "")}
        src={props.parentsrc +"WholeWidthImages/WholeWidthImage-"+props.id+"/img.webp"}
        alt={props.alt || "Daorffo off-road trailer image"}
    />
 
export default WholeWidthImage;