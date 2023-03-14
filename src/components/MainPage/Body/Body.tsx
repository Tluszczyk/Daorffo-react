import React, { RefObject, useRef } from 'react'

import './Body.css'

import MainNavbar from "../MainNavbar/MainNavbar";

import MainView from '../Views/MainView/MainView';
import ShowroomView from '../Views/ShowroomView/ShowroomView';

import WhyView from '../SmallViews/WhyView/WhyView';
import ApplicabilityView from '../SmallViews/ApplicabilityView/ApplicabilityView';
import SportView from '../SmallViews/SportView/SportView';

import WholeWidthImage from '../../common/WholeWidthImage/WholeWidthImage';
import SummarisingView from '../SmallViews/SummarisingView/SummarisingView';
import ImagesView from '../Views/ImagesView/ImagesView';
import ContactView from '../Views/ContactView/ContactView';

export function Body() {
    const showroomViewRef = useRef<null | HTMLDivElement>(null);
    const whyViewRef = useRef<null | HTMLDivElement>(null);
    const contactViewRef = useRef<null | HTMLDivElement>(null); 

    const buildScroll = (ref: RefObject<null | HTMLDivElement>) => () => ref.current?.scrollIntoView({behavior: "smooth"});
    const showroomViewScroll    = buildScroll(showroomViewRef);
    const whyViewScroll         = buildScroll(whyViewRef);
    const contactViewScroll     = buildScroll(contactViewRef);

    return (
        <div className='dinF' id='body'>
            <MainNavbar
                showroomViewScroll={showroomViewScroll}
                whyViewScroll={whyViewScroll}
                contactViewScroll={contactViewScroll}
            />
            <MainView />
            <ShowroomView ref={showroomViewRef}/>
            <WhyView ref={whyViewRef}/>
            <WholeWidthImage id="0" parentSrc='resources/MainPage/' />
            <ApplicabilityView />
            <WholeWidthImage id="1" parentSrc='resources/MainPage/' />
            <SportView />
            <WholeWidthImage id="2" parentSrc='resources/MainPage/' />
            <SummarisingView />
            <ImagesView />
            <ContactView ref={contactViewRef} />
        </div>
    )
}
