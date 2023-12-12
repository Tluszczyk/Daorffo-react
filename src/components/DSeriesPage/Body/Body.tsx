import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useBetween } from 'use-between';

import MainNavbar from '../../MainPage/MainNavbar/MainNavbar'
import PictoNavbar from '../PictoNavbar/PictoNavbar';
import GalleryView from '../GalleryView/GalleryView';

import MainSubview from '../TrailerSubviews/MainSubview/MainSubview';
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
    const { decLevel, getLevel } = useSharedLevel()

    const [openedSection, setOpenedSection] = useState(0);

    const goBackBase = "resources/TrailerPage/Body/backArrow/icon-"
    const goBackInactive = goBackBase + "inactive.png"
    const goBackAnactive = goBackBase + "active.png"
    const [goBackSrc, setGoBackSrc] = useState(goBackInactive)
    const navigate = useNavigate();

    var goBackLambda = () => {
        if (getLevel() === 0) navigate('/', {replace:true});
        else decLevel()
    }

    /**
     * You have to define how many files does Gallery resources directory contain
     * for example if the gallery directory looks like this
     * 
     *                      Gallery
     *                    /         \
     *      GalleryItem-0          GalleryItem-1
     *           |                /             \
     *       Subgallery-0      Subgallery-0    Subgallery-1
     *     /    |   |   \       /       \       /   |   \
     *     0    1   2    3      0        1     0    1    2
     * 
     * Then gallerySubgalleriesItemCount = [[4],[2,3]]
     */
    var gallerySubgalleriesItemCount = [[2],[2],[2,3,2,3,2],[2],[2]]

    var openedTrailerSubview = getLevel() === 0 ? 
        <MainSubview></MainSubview> : [
        <TrailerSubview0></TrailerSubview0>,
        <TrailerSubview1></TrailerSubview1>,
        <TrailerSubview2></TrailerSubview2>,
        <TrailerSubview3></TrailerSubview3>,
        <TrailerSubview4></TrailerSubview4>
    ][openedSection]

    return (
        <div className='dinF' id='trailer-body'>
            <MainNavbar className='desktop-invisible hide-upperLogoD'></MainNavbar>

            <div className={`trailer-layout level-${getLevel()}`}>
                <div className='trailer-layout-left'>
                    <div className="trailer-layout-left-left">
                        <div id='goBack' className='mobile-invisible trailer-layout-left-left' onClick={goBackLambda}>
                            <div className='floatingDiv'>
                                <img
                                    id="backArrow"
                                    alt='backarrow'
                                    src={goBackSrc}
                                    onMouseEnter={() => setGoBackSrc(goBackAnactive)}
                                    onMouseLeave={() => setGoBackSrc(goBackInactive)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='trailer-layout-left-right'>
                        <PictoNavbar
                            setOpenedSection={setOpenedSection}
                        />
                        {openedTrailerSubview}
                    </div>
                </div>

                <div className='trailer-layout-right'>
                    <GalleryView
                        galleryId={openedSection}
                        subgalleriesItemCount={gallerySubgalleriesItemCount[openedSection]}
                    />
                </div>
            </div>
        </div>
    )
}
