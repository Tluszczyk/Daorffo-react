import {forwardRef, RefObject } from 'react'

import "./ContactView.scss";
import "./ContactView_desktop.css";
import "./ContactView_mobile.css";

import View from "../../../common/View/View";
import { StylableProps } from '../../../../common/commonProps';
 
interface ContactViewProps extends StylableProps {}

const ContactView = forwardRef((props: ContactViewProps, ref) => {
    return (
        <View className='snap-scroll-start' {...props} ref={ref as RefObject<HTMLDivElement>}  id="Contact" headertitle='Contact'>
            <div className="filtering dark"></div>

            <div id="Contacts">

                <div className="mediaDiv" id="media">
                    <h3>See more</h3>
                    <div id="mediaList">
                        <a href="https://www.instagram.com/daorffo/" rel="noreferrer" target="_blank"> <p className="mediaItem" id="IGmedia"></p> </a>
                        <a href="https://www.facebook.com/daorffo" rel="noreferrer" target="_blank"> <p className="mediaItem" id="FBmedia"></p> </a>
                        <a href="https://www.youtube.com/channel/UCBN_gp_9zMpltcPGab50mpQ" rel="noreferrer" target="_blank"> <p className="mediaItem" id="YTmedia"></p> </a>
                    </div>
                </div>

                <div className="mediaDiv" id="mail">
                    <h3>Mail us</h3>
                    <a href="mailto:daorffo@daorffo.com">daorffo@daorffo.com</a>
                </div>

                <div className="mediaDiv" id="visitUs">
                    <h3>Visit us</h3>
                    <div className="address">
                        <p>al.Prazmowskiego</p>
                        <p id="postalCode">31-519 Krakow</p>
                        <p>Poland</p>
                    </div>
                </div>
            </div>
        </View>
    );
});
 
export default ContactView;