import {forwardRef, RefObject } from 'react'

import View from "../../../common/View/View";

import ContactForm from '../../../common/ContactForm/ContactForm';
import ContactFormElement from '../../../common/ContactForm/ContactFormElement/ContactFormElement';

import HoverableImg from "../../../common/HoverableImg/HoverableImg";

import "./ContactView_desktop.scss";
import "./ContactView_mobile.scss";
import "./ContactView.scss";

import { StylableProps } from '../../../../common/commonProps';
 
interface ContactViewProps extends StylableProps {}

const ContactView = forwardRef((props: ContactViewProps, ref) => {
    return (
        <View className='snap-scroll-start' {...props} ref={ref as RefObject<HTMLDivElement>}  id="Contact" headertitle='Contact'>
            <div className="filtering dark"></div>

            <div id="Contacts">

                <div className="mediaDiv" id="mail-and-phones">
                    <span className='mediaDiv-heading'>Mail & phones</span>
                    <p className='mediaDiv-info'>
                        <span><b>ENG Piotrek: </b>+48 693 020 747</span><br />
                        <span>piotr.tluszcz@daorffo.com</span>
                    </p>
                    <p className='mediaDiv-info'>
                        <span><b>PL Krzysztof: </b>+48 605 743 979</span><br />
                        <span>krzysztof.tluszcz@daorffo.com</span>
                    </p>
                    <a className="mediaDiv-link" href='mailto:daorffo@daorffo.com'>daorffo@daorffo.com</a>
                </div>

                <div className="mediaDiv" id="contact-form">
                    <ContactForm numberOfColumns={2}>
                        <ContactFormElement
                            gridColumnSpan = {2} 
                            type='heading' value='Got questions?'
                        />

                        <ContactFormElement 
                            gridColumnSpan = {1} required name='name'
                            type='input' placeholder='Your Name'
                        />

                        <ContactFormElement
                            gridColumnSpan = {1} required name='email'
                            type='input' placeholder='Your E-Mail Address'
                        />

                        <ContactFormElement
                            gridColumnSpan = {2} gridRowSpan = {2} required name='message'
                            type='textarea' placeholder='Your question...'
                        />

                        <ContactFormElement
                            gridColumnSpan = {2} name='additional_info'
                            type='input' placeholder='(Optional) What is your car? How do you travel?'
                        />

                        <ContactFormElement
                            gridColumnSpan = {2}
                            type='submit' value='Send'
                        />
                    </ContactForm>
                </div>

                <div className="mediaDiv" id="visitUs">
                    <div className='mediaDiv-block'>
                        <span className='mediaDiv-heading'>Location:</span>
                        <ul className='mediaDiv-info'>
                            <li>Cracow, Poland</li>
                        </ul>
                    </div>
                    {/* <div className='mediaDiv-block'>
                        <span className='mediaDiv-heading'>Can be seen at:</span>
                        <ul className='mediaDiv-info'>
                            <li>Extreme Motors Kraków<br/>ul. Księży Pijarów</li>
                        </ul>
                    </div>
                    <div className="mediaDiv-link">Let's meet</div> */}
                </div>

                <div className="mediaDiv" id="company-info">
                    <span className='mediaDiv-heading'>Company Info</span>
                    <span className='mediaDiv-info'>
                        <span>
                            <b>name:</b> Da Orffo Piotr Tłuszcz, Krzysztof Tłuszcz spółka cywilna;
                            <b> billing address:</b> ul. Idzikowskiego 2, 31-519 Kraków, Poland; <br/>
                            <b>NIP UE:</b> PL6751765226; 
                            <b> REGION:</b> 522083418; 
                        </span>
                    </span>
                </div>

                <div className="mediaDiv" id="media">
                    <div id="mediaList">
                        <a href="https://www.instagram.com/daorffo/" rel="noreferrer" target="_blank"> 
                            <HoverableImg dirPath="resources/common/dark/IG" className='mediaItem' />
                        </a>
                        <a href="https://www.facebook.com/daorffo" rel="noreferrer" target="_blank">
                            <HoverableImg dirPath="resources/common/dark/FB" className='mediaItem' />
                        </a>
                        <a href="https://www.youtube.com/channel/UCBN_gp_9zMpltcPGab50mpQ" rel="noreferrer" target="_blank"> 
                            <HoverableImg dirPath="resources/common/dark/YT" className='mediaItem' />
                        </a>
                        <a href="https://www.linkedin.com/company/da-orffo/?originalSubdomain=pl" rel="noreferrer" target="_blank"> 
                            <HoverableImg dirPath="resources/common/dark/LI" className='mediaItem' />
                        </a>
                        <a href="https://www.behance.net/gallery/186589061/The-Life-Chariot-MEDEVAC-Trailer" rel="noreferrer" target="_blank"> 
                            <HoverableImg dirPath="resources/common/dark/BE" className='mediaItem' />
                        </a>
                    </div>
                    <p className="mediaDiv-heading">See more</p>
                </div>
            </div>
        </View>
    );
});
 
export default ContactView;