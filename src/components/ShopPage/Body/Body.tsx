// modules

// components
import Navbar from "../../common/Navbar/Navbar";
import ShopList from "../ShopList/ShopList";
import ShopListItem from "../ShopList/ShopListItem/ShopListItem";

// styles
import "./Body.scss";
import "./Body_desktop.scss";
import "./Body_mobile.scss";

interface BodyProps {}

export const Body = (props: BodyProps) => {
	return (
		<div id="shop-body">
			<Navbar logoDefaultSrc="resources/ShopPage/LogoSHOP.png" logoLink='' />

			<div className="page" id="shop-page">
				<ShopList>
					<ShopListItem 
						id="EC"
						title="Da Orffo | Life Chariot"
						price="19 000 € net"
						aboutLink="https://www.linkedin.com/company/da-orffo/"
						descriptionContent={
							<ul>
								<li>medical evacuation passenger trailer</li>
                                <li>roll protective cage-body</li>
                                <li>2 seats with seatbetls</li>
                                <li>NATO stretcher with security belts</li>
                                <li>2 hermetic boxes</li>
                                <li>U1 chassis</li>
                                <li>roof rack</li>
                                <li>heavy duty tarpaulin</li>
							</ul>
						}
					/>

					<ShopListItem 
						id="D1"
						title="Da Orffo | D1 Trailer"
						price="from 16 000 € net"
						aboutLink="dSeries"
						descriptionContent={
							<ul>
                                <li>expedition set up on U1 chassis</li>
                                <li>4 side drop-down body</li>
                                <li>plywood interior divided into sections</li>
                                <li>roof rack</li>
                                <li>front cover</li>
                                <li>back drawer</li>
                            </ul>
						}
					/>

					<ShopListItem 
						id="U1"
						title="Da Orffo | Unit 1 Trailer"
						price="from 10500 € net"
						aboutLink="unit"
						descriptionContent={
							<>
								<ul>
									<li>modular off-road trailer </li>
									<li>basic heavy duty chassis</li>
									<li>steel platform 140x90</li>
									<li>exchangeable tops </li>
								</ul>
								(check for actual offer)
							</>
						}
					/>

					<ShopListItem 
						id="chassis"
						title="Da Orffo Suspension Kit"
						price="4250 € net"
						descriptionContent={
							<ul>
                                <li>2x Swing Arm</li>
                                <li>160cm Transversal Bar with Hooks (tailored on request)</li>
                                <li>2x Hub Drums 250x40 139, 7x6 fi 54 L-335</li>
                                <li>2x Coilover Profender 10” Shocks</li>
                            </ul>
						}
					/>
				</ShopList>

				<div className="shop-footer">
					To get more detailed sprecification and to order please contact us by email:<br />
					<a href="mailto:daorffo@daorffo.com">daorffo@daorffo.com</a>
				</div>
			</div>
		</div>
	);
};