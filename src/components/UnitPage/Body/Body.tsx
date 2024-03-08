// modules
import { useEffect } from "react";

// components
import UnitNavbar from "../UnitNavbar/UnitNavbar";

// styles
import "./Body.scss";
import "./Body_desktop.scss";
import "./Body_mobile.scss";

interface UnitBodyProps {
    pageTitle: string
}

export const Body = (props: UnitBodyProps) => {
	window.scrollTo({top: 0, behavior: 'smooth'})

	useEffect(() => {
        document.title = props.pageTitle;
    }, [props.pageTitle]);
	
	return (
		<div className="daorffo-font-regular font-black" id="unit-body">
			<UnitNavbar />

			<div id="unit-main-page">
				<div id="u1-image-and-logo-container">
					<div id="u1-image-container">
						<img id="u1-image" src="resources/UnitPage/U1-image-and-logo-container/U1-render-frog.png" alt="Not found" />
					</div>
					<div id="u1-logo-container">
						<img id="u1-logo" alt="Not found"/>
					</div>
				</div>

				<div id="u1-description-container">
					<div id="u1-description-logo-container">
						<img id="u1-description-logo" src="resources/UnitPage/U1-description-container/U1.png" alt="Not found" />
					</div>
					<div id="u1-description-header">
						is a modular off-road trailer base for diverse loads.
					</div>
					<div id="u1-description-1">
						Suspension solutions are used to evacuate wounded from the battlefield and have been tested to carry heavy and fragile materials and equipment.
					</div>
					<div id="u1-description-2">
						We are open to business customer enquiries for the fitting of specialised transport products.
					</div>
				</div>

				<div id="u1-parameters-container">
					<div id="u1-drawbar-container">
						<div id="u1-drawbar-vehicles-container">
							<img id="u1-drawbar-vehicles" src="resources/UnitPage/Parameters/U1-drawbar-examples.png" alt="Not found" />
							<div id="u1-drawbar-description-container">
								<span id="u1-drawbar-description">
									drawbar is adjustable to different hitch heights
								</span>
							</div>
						</div>
					</div>

					<div id="u1-parameters-description-container">
						<div id="u1-parameters-description-image-container">
							<img id="u1-parameters-description-image" src="resources/UnitPage/Parameters/U1-render-side.png" alt="Not found" />
						</div>
						<div className="u1-parameters-description-parameters-horisontal-container">
							<div className="u1-parameters-description-parameters-vertical-container">
								<div className="u1-parameters-description-parameters">
									<div className="u1-parameters-description-parameters-header"><b>Trailer Weight net:</b></div>
									<div className="u1-parameters-description-parameters-content">375 kg</div>
								</div>
								<div className="u1-parameters-description-parameters">
									<div className="u1-parameters-description-parameters-header"><b>Load capability:</b></div>
									<div className="u1-parameters-description-parameters-content">275 kg or up to 500 kg</div>
								</div>
								<div className="u1-parameters-description-parameters">
									<div className="u1-parameters-description-parameters-header"><b>GVW (DMC):</b></div>
									<div className="u1-parameters-description-parameters-content">up to 650 kg or 750 kg</div>
								</div>
							</div>

							<div className="u1-parameters-description-parameters-vertical-container">
								<div className="u1-parameters-description-parameters">
									<div className="u1-parameters-description-parameters-header mobile-invisible"><b>H:</b></div>
									<div className="u1-parameters-description-parameters-header desktop-invisible"><b>Height</b></div>
									<div className="u1-parameters-description-parameters-content">956 mm</div>
								</div>
								<div className="u1-parameters-description-parameters">
									<div className="u1-parameters-description-parameters-header mobile-invisible"><b>L:</b></div>
									<div className="u1-parameters-description-parameters-header desktop-invisible"><b>Length</b></div>
									<div className="u1-parameters-description-parameters-content">3300 mm</div>
								</div>
								<div className="u1-parameters-description-parameters">
									<div className="u1-parameters-description-parameters-header mobile-invisible"><b>W:</b></div>
									<div className="u1-parameters-description-parameters-header desktop-invisible"><b>Width</b></div>
									<div className="u1-parameters-description-parameters-content">1600 mm</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="u1-features-container">
					<div id="u1-features-image-container">
						<img id="u1-features-image" src="resources/UnitPage/Features/8.png" alt="Not found" />
					</div>

					<div id="u1-features-description-container">
						<span id="u1-features-description">
							With its variable upper-body modular design the U1 trailer can be quickly and easily adapted to suit a range of purposes.
						</span>
					</div>

					<div id="u1-features-list-container">
						<ul id="u1-features-list">
							<li className="u1-features-list-item">heavy materials transport</li>
							<li className="u1-features-list-item">fragile equipment carriage</li>
							<li className="u1-features-list-item">water tank and power generator supply</li>
							<li className="u1-features-list-item">mobile workstation</li>
							<li className="u1-features-list-item">loose cargo carriage</li>
							<li className="u1-features-list-item">base camp for activities</li>
							<li className="u1-features-list-item">mobile showroom</li>
							<li className="u1-features-list-item">... what else?</li>
						</ul>
					</div>
				</div>

				<div id="u1-summary-container">
					<div id="u1-summary-image-container">
						<img id="u1-summary-image" src="resources/UnitPage/Summary/U1-render-back.png" alt="Not found" />
					</div>

					<div id="u1-summary-description-list-container">
						<div className="u1-summary-description-element" id="u1-summary-description-list">
							<div className="u1-summary-description-list-item">
								welded steel construction									
							</div>
							<div className="u1-summary-description-list-item">
								adjustable drawbar
							</div>
							<div className="u1-summary-description-list-item">
								multiple top modules
							</div>
							<div className="u1-summary-description-list-item">
								gas-regulated off-road suspension
							</div>
						</div>
					</div>

					<div className="u1-summary-description-element" id="u1-summary-footer-container">
						<div id="u1-summary-price-description-container">
							<span id="u1-summary-price-description">
								Prices start from <br /><b>10.000 euro</b> net
							</span>
						</div>

						<div id="u1-summary-contact-description-container">
							<span id="u1-summary-contact-description">
								Want to know more?
							</span>
						</div>

						<a id="u1-summary-contact-button-container" href=".">
							<div id="u1-summary-contact-button">
								<span id="u1-summary-contact-button-header">contact us</span>
								<span id="u1-summary-contact-button-text">for more details</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
