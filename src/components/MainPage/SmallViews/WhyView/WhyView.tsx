import { forwardRef } from 'react'
import SmallView from '../../../common/SmallView/SmallView'

import './WhyView.css'

const WhyView = forwardRef((props, ref) => {

        return <SmallView className='snap-scroll-start' ref={ref} id='Why' headertitle='Why Choose Daorffo Lightweight Expedition Trailers?'>

            <div className="whyD">
                <h3 className="sectionH" id="WhyReallyH">We prefer it light and simple!</h3>
                <span className="sectionP" id="WhyReallyP">
                    We specialize in lightweight, simple, and rugged designs that allow you to go anywhere. Steep mountain 
                    passes and deep forest tracks are no obstacle when your caravan is compact and maneuverable. Our 4x4 
                    trailers are engineered to fit everything you need while maintaining the freedom of true off-grid 
                    camping. We prefer it light and simple so you can focus on the adventure.

                    <ul>
                        <li>Lightweight Categories: Up to 550kg & up to 750kg for maximum towing flexibility.</li>
                        <li>Exceptional Maneuverability: Easy to handle both coupled and uncoupled.</li>
                        <li>Active Camp Center: Designed to create a functional and comfortable base for overlanding.</li>
                    </ul>
                </span>
            </div>
        </SmallView>
    }
);

export default WhyView
