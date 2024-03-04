import React, { RefObject, useRef } from 'react'

import './Body_desktop.scss'
import './Body.scss'

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
        <div className='daorffo-font-regular font-white' id='main-body'>
            <MainNavbar
                showroomViewScroll={showroomViewScroll}
                whyViewScroll={whyViewScroll}
                contactViewScroll={contactViewScroll}
                transparent
            />
            <MainView />
            <ShowroomView ref={showroomViewRef}/>
            <WhyView ref={whyViewRef}/>
            <WholeWidthImage id="topr" parentsrc='resources/MainPage/' />
            <ApplicabilityView />
            <WholeWidthImage className="snap-scroll-center" id="dessert" parentsrc='resources/MainPage/' />
            <SportView />
            <SummarisingView
                wholeWidthImage={<WholeWidthImage id="chassis" parentsrc='resources/MainPage/' />} 
            />
            <ImagesView />
            <ContactView ref={contactViewRef} />
        </div>
    )
}
