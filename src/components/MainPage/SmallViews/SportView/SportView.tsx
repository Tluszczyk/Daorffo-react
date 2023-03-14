import SmallView from "../../../common/SmallView/SmallView";

import "./SportView.css"
import "./SportView_desktop.css"
import "./SportView_mobile.css"

const SportView = () => 
    <SmallView>
        <div id="sport">
            <div id="sportSpan">
                <h3 className="sectionH">We are going off the road!</h3>
                <span className="sectionP">
                    That’s why we need high clearance, independent suspension and heavy-duty shock absorbers with threaded bodies. <br/> <br/>

                    Our focus is not to let your trailer stuck when your truck wants to go further! <br/> <br/>

                    All trailers are customizable in terms of the choice of shock absorbers. Choose from our dumper selection.
                </span>
            </div>
            <img id="sportI" src="/public/resources/MainPage/SmallViews/SportView/img.png" alt=""/>
        </div>
    </SmallView>
 
export default SportView;