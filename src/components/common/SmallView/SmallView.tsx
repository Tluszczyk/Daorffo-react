import React, { forwardRef, RefObject } from 'react'

import './SmallView_desktop.css'
import './SmallView_mobile.css'
import './SmallView.css'

import ViewHeader from '../ViewHeader/ViewHeader'

import {WrapperProps} from "../../../common/commonProps";

interface SmallViewProps extends WrapperProps {
    headertitle?: string;
}
 
const SmallView = forwardRef((props: SmallViewProps, ref) => {
        var className = props.className ? props.className + ' small-view' : 'small-view';

        return <div {...props} className={className} ref={ref as RefObject<HTMLDivElement>}>
            {props.headertitle ? <ViewHeader headerTitle={props.headertitle} /> : null}

            {props.children}
        </div>
    }
);

export default SmallView;