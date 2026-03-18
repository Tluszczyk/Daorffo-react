import { useState, RefObject, useRef, useEffect } from 'react'
import SEO from '../../common/SEO';

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

    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Daorffo Off-Road Trailer",
        "image": "https://www.daorffo.com/resources/MainPage/Views/MainView/bg-desktop.webp",
        "description": "Premium, heavy-duty off-road trailers designed for ultimate overland adventures. Built for durability and performance in any terrain.",
        "brand": {
            "@type": "Brand",
            "name": "Daorffo"
        },
        "offers": {
            "@type": "AggregateOffer",
            "url": "https://www.daorffo.com/shop",
            "priceCurrency": "EUR",
            "lowPrice": "10000",
            "offerCount": "3"
        }
    };

    return (
        <main className='daorffo-font-regular font-white' id='main-body'>
            <SEO 
                title="Daorffo | Premium Lightweight Off-Road Overland Trailers | Adventure Ready"
                description="Daorffo designs and builds heavy-duty, off-road overland trailers for ultimate expeditions. Discover our lightweight, high-clearance expedition trailers and modular U1 chassis."
                canonicalUrl="/"
            >
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </SEO>
            
            <header>
                <h1 className="visually-hidden">Daorffo | Premium Lightweight Off-Road Overland Trailers</h1>
                <MainNavbar
                    id='main-navbar'
                    resourcesParentSrc='resources/MainPage'

                    showroomOnClick={showroomViewScroll}
                    whyOnClick={whyViewScroll}
                    contactOnClick={contactViewScroll}
                    
                    transparent
                    
                    addLogoTransitions
                    
                    logoHoverable
                />
            </header>

            <MainView />
            
            <ShowroomView ref={showroomViewRef}/>

            <WhyView ref={whyViewRef}/>

            <WholeWidthImage id="topr" parentsrc='resources/MainPage/' alt="Daorffo trailer on a high mountain ridge" />
            
            <ApplicabilityView />

            <WholeWidthImage className="snap-scroll-center" id="dessert" parentsrc='resources/MainPage/' alt="Daorffo trailer in the middle of a vast desert" />
            
            <SportView />

            <SummarisingView
                wholeWidthImage={<WholeWidthImage id="chassis" parentsrc='resources/MainPage/' alt="Detailed view of the Daorffo heavy-duty trailer chassis" />} 
            />

            <ImagesView />

            <ContactView ref={contactViewRef} />
        </main>
    )
}