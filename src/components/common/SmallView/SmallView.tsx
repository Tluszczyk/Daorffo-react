import React, { forwardRef, RefObject } from 'react'

import './SmallView_desktop.css'
import './SmallView_mobile.css'
import './SmallView.css'

import {WrapperProps} from "../../../common/commonProps";

interface SmallViewProps extends WrapperProps {}
 
const SmallView = forwardRef((props: SmallViewProps, ref) => 
    <div {...props} ref={ref as RefObject<HTMLDivElement>} className='small-view'>
        {props.children}
    </div>
);

export default SmallView;