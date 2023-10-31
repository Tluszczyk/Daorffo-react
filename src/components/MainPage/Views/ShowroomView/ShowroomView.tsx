import React, { forwardRef, RefObject } from 'react'
import { Link } from 'react-router-dom'

import "./ShowroomView.css";
import "./ShowroomView_desktop.css";
import "./ShowroomView_mobile.css";

import View from "../../../common/View/View";
import { StylableProps } from '../../../../common/commonProps';
import SoonInfoTip from '../../../common/SoonInfoTip/SoonInfoTip';
 
interface ShowroomViewProps extends StylableProps {}

const ShowroomView = forwardRef((props: ShowroomViewProps, ref) => {
    const modelNames = ['ec', 'unit', 'dSeries']
    const descriptions = [
        'Life Chariot MEDEVAC', 
        'Unit 1', 
        'D1 Trailer'
    ]
    const subHeaders = [
        'Medical Evacuation Trailer',
        'U1 Modular Base Trailer', 
        'Expedition Set Up'
    ]

    const models = modelNames.map((name, index) => <Link
            to={`/${name}`} className="model-with-description" 
            key={index}
        >
            <img 
                id={name} className='Model'
                src={`resources/MainPage/Views/ShowroomView/${name}/img.png`}
                alt=""
            />

            <p>
                {descriptions[index]} <br />
                <span className='sub-header'>{subHeaders[index]}</span>
            </p>
        </Link>
    )

    return (
        <View {...props} ref={ref as RefObject<HTMLDivElement>} className='snap-scroll-start' id="Showroom" headertitle='Showroom'>

            <div id="Models"> {models} </div>
        </View>
    );
});
 
export default ShowroomView;