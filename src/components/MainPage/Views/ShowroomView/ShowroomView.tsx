import React, { forwardRef, RefObject } from 'react'
import { Link } from 'react-router-dom'

import "./ShowroomView.css";
import "./ShowroomView_desktop.css";
import "./ShowroomView_mobile.css";

import View from "../../../common/View/View";
import { StylableProps } from '../../../../common/commonProps';
 
interface ShowroomViewProps extends StylableProps {}

const ShowroomView = forwardRef((props: ShowroomViewProps, ref) => {
    const modelNames = ['ec', 'unit', 'dSeries']
    const links = ['https://www.behance.net/gallery/186589061/The-Life-Chariot-MEDEVAC-Trailer', '/unit', '/dSeries']
    const targets = ['_blank', '_self', '_self']
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
            className="model-with-description" 
            to={links[index]} target={targets[index]}
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