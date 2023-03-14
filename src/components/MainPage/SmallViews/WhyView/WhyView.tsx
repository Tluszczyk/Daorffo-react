import { forwardRef } from 'react'
import SmallView from '../../../common/SmallView/SmallView'

import './WhyView.css'

const WhyView = forwardRef((props, ref) => 
    <SmallView {...props} ref={ref} id='Why'>
        <h1>Why?</h1>

        <div className="whyD">
            <h3 className="sectionH" id="WhyReallyH">We prefer it light and simple!</h3>
            <span className="sectionP" id="WhyReallyP">
                Our comfort is to go anywhere! Steep, deep and narrow passes are no trouble when your caravan is small and compact. Fit
                all you need inside the trailer and feel the freedom of overlanding!
            </span>
        </div>
    </SmallView>
);

export default WhyView
