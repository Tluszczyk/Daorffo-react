import { forwardRef, RefObject } from 'react'
import { Link } from 'react-router-dom'

import "./ShowroomView.css";
import "./ShowroomView_desktop.css";
import "./ShowroomView_mobile.css";

import View from "../../../common/View/View";
import { StylableProps } from '../../../../common/commonProps';
 
interface ShowroomViewProps extends StylableProps {}

const ShowroomView = forwardRef((props: ShowroomViewProps, ref) => {
    const modelNames = ['Rescue', 'dSeries', 'Primitive']
    const descriptions = ['Rescue', 'd1 Trailer', 'd1 Chassis']
    const subHeaders = ['concept 2019', 'd.series 2021', 'd.series 2021']

    const models = modelNames.map((name, index) => <Link
        to={`/${name}`} className="model-with-description" 
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
    </Link>)

    return (
        <View {...props} ref={ref as RefObject<HTMLDivElement>}  id="Showroom">
            <h1 className='dDin'>Showroom</h1>

            <div id="Models"> {models} </div>
        </View>
    );
});
 
export default ShowroomView;