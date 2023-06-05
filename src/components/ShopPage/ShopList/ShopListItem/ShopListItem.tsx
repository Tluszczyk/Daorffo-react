// modules
import { WrapperProps } from "../../../../common/commonProps";

// components
import React from "react";

// styles
import "./ShopListItem.scss";
import "./ShopListItem_desktop.scss";
import "./ShopListItem_mobile.scss";

interface ShopListItemProps extends WrapperProps {
	title?: string;
	price?: string;
	aboutLink?: string;
	descriptionContent?: React.ReactNode;
}

const ShopListItem = (props: ShopListItemProps) => {
	return (
		<div className="shop-list-item">
			{	props.id &&
				<div className="shop-list-item-image">
					<img src={`resources/ShopPage/ShopList/${props.id}.png`} alt="Not found" />
				</div>
			}

			<div className="shop-list-item-content">
				<div className="shop-list-item-header-container">
					<div className="shop-list-item-title">
						{props.title}
					</div>

					<div className="shop-list-item-price">
						{props.price}
					</div>

					<div className="shop-list-item-button-link-wrapper">
						{	props.aboutLink &&
							<button className="shop-list-item-button-link">
								<a target="_blank" rel="noreferrer" href={props.aboutLink}>
									About
								</a>
							</button>
						}
					</div>
				</div>

				<div className="shop-list-item-HR-wrapper">
					<hr className="shop-list-item-HR" />
				</div>
				
				<span className="span-list-item-description">
					{props.descriptionContent}
				</span>
			</div>
		</div>
	);
};

export default ShopListItem;
