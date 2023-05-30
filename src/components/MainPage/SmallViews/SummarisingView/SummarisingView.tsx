import React from "react";
import { WrapperProps } from "../../../../common/commonProps";
import View from "../../../common/View/View";

import "./SummarisingView.css";

interface SummarisingViewProps extends WrapperProps {
    wholeWidthImage: React.ReactNode;
}

const SummarisingView = (props: SummarisingViewProps) => 
    <View className="snap-scroll-start" id="SummarisingView">
        {props.wholeWidthImage}

        <h3 className="sectionH">What we believe is what we practice!</h3>
        <span className="sectionP">
            There is no place for coincidences! Years of travelling around Europe and beyond gave us an experience to take decisions
            how to master our style of overlanding. <br/> <br/>

            Each element of the trailer was design to fix the particular travelling experience. This is how we feel it, but this
            process will never end, so there is always a room for development. <br/> <br/>

            Let’s cooperate and help us create the trailer that will fit your needs, as well as it fit ours! Never hesitate to
            express your opinion. We just want to deliver the product that was <span className="summarisingSpan">made with passion</span> and will be <br /> <span className="summarisingSpan">used with passion!</span> <br/> <br/>
        </span>
    </View>
 
export default SummarisingView;