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
        'A specialized medical evacuation trailer built on a rugged off-road chassis. Designed for extreme rescue missions, it ensures safe patient transport across the most demanding 4x4 trails and remote disaster zones.',
        'The ultimate modular base trailer for versatile off-grid camping. This lightweight expedition trailer offers a high-clearance, customizable platform that serves as the perfect foundation for any custom sport utility setup.', 
        'Our flagship expedition setup, engineered for long-term off-road overlanding. Featuring independent suspension and a lightweight design under 750kg, the D1 is the ultimate companion for serious 4x4 enthusiasts.'
    ]

    const models = modelNames.map((name, index) => <Link
            id={`model-with-description-${name}`}
            className="model-with-description" 
            to={links[index]} target={targets[index]}
            key={index}
        >
            <img 
                id={name} className='Model'
                src={`resources/MainPage/Views/ShowroomView/${name}/img.webp`}
                alt={`Daorffo ${descriptions[index]} - Off-Road Trailer`}
            />

            <span>
                {descriptions[index]} <br />
                <span className='sub-header'>{subHeaders[index]}</span>
            </span>
        </Link>
    )

    return (
        <View {...props} ref={ref as RefObject<HTMLDivElement>} className='snap-scroll-start' id="Showroom" headertitle='Off-Road Overland Trailer Showroom'>

            <div id="Models"> {models} </div>
        </View>
    );
});
 
export default ShowroomView;