import { forwardRef, RefObject } from "react";

import ViewHeader from "../ViewHeader/ViewHeader";

import { WrapperProps } from "../../../common/commonProps";
import './View.css'

export interface ViewProps extends WrapperProps {
    headertitle?: string;
}
 
const View = forwardRef((props: ViewProps, ref) => 
    <section {...props} ref={ref as RefObject<HTMLDivElement>} className={`view ${props.className ?? ""}`}>
        {props.headertitle ? <ViewHeader headerTitle={props.headertitle} /> : null}
        {props.children}
    </section>
);
 
export default View;