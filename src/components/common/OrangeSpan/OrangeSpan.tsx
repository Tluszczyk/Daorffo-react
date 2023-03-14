import "./OrangeSpan.css"
import "./OrangeSpan_desktop.css"
import "./OrangeSpan_mobile.css"

import { WrapperProps } from "../../../common/commonProps";

interface OrangeSpanProps extends WrapperProps { }
 
const OrangeSpan = (props: OrangeSpanProps) => {
    return <span className="orange-span">{props.children}</span>
}
 
export default OrangeSpan;