import { useState, useEffect } from 'react'
import { useBetween } from 'use-between';

// import MainNavbar from '../../MainPage/MainNavbar/MainNavbar'
import TrailerNavbar from '../TrailerNavbar/TrailerNavbar';
import PictoNavbar from '../PictoNavbar/PictoNavbar';
import GalleryView from '../GalleryView/GalleryView';

import TrailerSubview0 from '../TrailerSubviews/TrailerSubview0/TrailerSubview0';
import TrailerSubview1 from '../TrailerSubviews/TrailerSubview1/TrailerSubview1';
import TrailerSubview2 from '../TrailerSubviews/TrailerSubview2/TrailerSubview2';
import TrailerSubview3 from '../TrailerSubviews/TrailerSubview3/TrailerSubview3';
import TrailerSubview4 from '../TrailerSubviews/TrailerSubview4/TrailerSubview4';

import { useLevel } from '../services/LevelProvider'; 

import './Body.scss'
import './Body_desktop.scss'
import './Body_mobile.scss'

const useSharedLevel = () => useBetween(useLevel);

export function Body() {
    const [mobile, setMobile] = useState(false)
    const checkForMobile = () => setMobile(window.innerWidth <= 768);

    window.addEventListener('resize', checkForMobile);
    window.addEventListener('load', checkForMobile);

    const { decLevel, getLevel, setLevel } = useSharedLevel()

    const [openedSection, setOpenedSection] = useState(0);
    const getOpenedSection = () => openedSection;

    /**
     * You have to define how many files does Gallery resources directory contain
     * for example if the gallery directory looks like this
     * 
     *                      Gallery
     *                    /         \
     *      GalleryItem-0          GalleryItem-1
     *           |                /             \
     *       Subgallery-0      Subgallery-0    Subgallery-1
     *      /   |   |   \       /       \       /   |   \
     *     0    1   2    3     0         1     0    1    2
     * 
     * Then gallerySubgalleriesItemCount = [[4],[2,3]]
     */
    var gallerySubgalleriesItemCount = [[2],[2,3],[2,3,2,3,2],[2],[2]]

    var openedTrailerSubview = [
        TrailerSubview0({onClick: mobile ? undefined : decLevel}),
        TrailerSubview1({onClick: mobile ? undefined : decLevel}),
        TrailerSubview2({onClick: mobile ? undefined : decLevel}),
        TrailerSubview3({onClick: mobile ? undefined : decLevel}),
        TrailerSubview4({onClick: mobile ? undefined : decLevel})
    ][openedSection]

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [openedSection])

    return (
        <div className='daorffo-font-regular font-white' id='trailer-body'>
            <TrailerNavbar 
                id='trailer-navbar'
                resourcesParentSrc='resources/MainPage/MainNavbar'
                className='hide-upperLogoD' 
            />

            <div className={`trailer-layout level-${getLevel()}`}>

                <PictoNavbar
                    className='trailer-layout-mid'
                    getOpenedSection={getOpenedSection}
                    setOpenedSection={setOpenedSection}
                />
                
                {openedTrailerSubview}

                {
                    GalleryView({
                        galleryId: openedSection,
                        subgalleriesItemCount: gallerySubgalleriesItemCount[openedSection],
                        onClick: ()=>setLevel(2)
                    })
                }

            </div>
        </div>
    )
}
