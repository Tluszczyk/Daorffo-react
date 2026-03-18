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

        <div id="SummarisingViewDescriptionContainer">
            <h3 className="sectionH">Built for Adventure: Our Philosophy on Rugged Off-Road Trailers</h3>
            <span className="sectionP">
                At Daorffo, there is no place for coincidences! Years of overlanding across Europe and beyond have 
                given us the hands-on experience needed to master the art of off-grid travel. <br/> <br/>

                Every element of our lightweight expedition trailers is purposefully designed to solve specific challenges 
                faced on the trail. This process never ends, and there is always room for development. <br/> <br/>

                Let’s cooperate and help us create the ultimate custom sport utility trailer that fits your needs. 
                Never hesitate to express your opinion. We deliver products <span className="summarisingSpan">made with passion</span> to be 
                <br /> <span className="summarisingSpan">used with passion!</span> <br/> <br/>
            </span>
        </div>
    </View>
 
export default SummarisingView;