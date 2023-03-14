import { forwardRef, RefObject } from "react";

import { WrapperProps } from "../../../common/commonProps";
import './View.css'

export interface ViewProps extends WrapperProps {}
 
const View = forwardRef((props: ViewProps, ref) => 
    <div {...props} ref={ref as RefObject<HTMLDivElement>} className={`view ${props.className}`}>
        {props.children}
    </div>
);
 
export default View;