import { forwardRef } from 'react'
import SmallView from '../../../common/SmallView/SmallView'

import './WhyView.css'

const WhyView = forwardRef((props, ref) => {

        return <SmallView className='snap-scroll-start' ref={ref} id='Why' headertitle='Why?'>

            <div className="whyD">
                <h3 className="sectionH" id="WhyReallyH">We prefer it light and simple!</h3>
                <span className="sectionP" id="WhyReallyP">
                    Our comfort is to go anywhere! Steep, deep and narrow passes are no trouble when your caravan is small and compact. Fit
                    all you need inside the trailer and feel the freedom of overlanding!

                    <ul>
                        <li>light categories: up to 550 kg & up to 750 kg</li>
                        <li>easy to maneuver coupled and uncoupled</li>
                        <li>creating active camp center</li>
                    </ul>
                </span>
            </div>
        </SmallView>
    }
);

export default WhyView
