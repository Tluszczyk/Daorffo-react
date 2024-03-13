import { useState, RefObject, useRef, useEffect } from 'react'

import './Body_desktop.scss'
import './Body.scss'

import MainNavbar from "../../common/MainNavbar/MainNavbar";

import MainView from '../Views/MainView/MainView';
import ShowroomView from '../Views/ShowroomView/ShowroomView';

import WhyView from '../SmallViews/WhyView/WhyView';
import ApplicabilityView from '../SmallViews/ApplicabilityView/ApplicabilityView';
import SportView from '../SmallViews/SportView/SportView';

import WholeWidthImage from '../../common/WholeWidthImage/WholeWidthImage';
import SummarisingView from '../SmallViews/SummarisingView/SummarisingView';
import ImagesView from '../Views/ImagesView/ImagesView';
import ContactView from '../Views/ContactView/ContactView';

interface MainBodyProps {
    pageTitle: string
}

export function Body(props: MainBodyProps) {
    const [urlParameter] = useState(window.location.href.split('#')[1] ?? '');

    const showroomViewRef = useRef<null | HTMLDivElement>(null);
    const whyViewRef = useRef<null | HTMLDivElement>(null);
    const contactViewRef = useRef<null | HTMLDivElement>(null); 

    const buildScroll = (ref: RefObject<null | HTMLDivElement>) => () => ref.current?.scrollIntoView({behavior: "smooth"});

    const showroomViewScroll    = buildScroll(showroomViewRef);
    const whyViewScroll         = buildScroll(whyViewRef);
    const contactViewScroll     = buildScroll(contactViewRef);
    
    window.scrollTo({top: 0, behavior: 'smooth'})
    
    useEffect(() => {
        if (urlParameter === 'Showroom') {
            showroomViewScroll();
        } else if (urlParameter === 'Why') {
            whyViewScroll();
        } else if (urlParameter === 'Contact') {
            contactViewScroll();
        }
    }, [urlParameter, showroomViewScroll, whyViewScroll, contactViewScroll])

    useEffect(() => {
        document.title = props.pageTitle;
    }, [props.pageTitle]);

    return (
        <div className='daorffo-font-regular font-white' id='main-body'>
            <MainNavbar
                id='main-navbar'
                resourcesParentSrc='resources/MainPage/MainNavbar'

                showroomOnClick={showroomViewScroll}
                whyOnClick={whyViewScroll}
                contactOnClick={contactViewScroll}
                
                transparent

                addLogoTransitions
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
