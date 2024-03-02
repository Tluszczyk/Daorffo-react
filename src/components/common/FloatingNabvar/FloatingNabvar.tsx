// modules

// components

// styles
import "./FloatingNabvar.scss";
import "./FloatingNabvar_desktop.scss";
import "./FloatingNabvar_mobile.scss";

import { WrapperProps } from "../../../common/commonProps";

import FloatingNavbarItem from "./FloatingNavbarItem/FloatingNavbarItem";

interface FloatingNabvarProps extends WrapperProps {
	iconsSrcs: string;
	itemsCount: number;
	itemsClassName: string

	subviewIndex: number;
}

const FloatingNabvar = (props: FloatingNabvarProps) => {
	
	var items = Array.from({ length: props.itemsCount }, (_, index) => (
		<FloatingNavbarItem
			className={props.itemsClassName}
			id={props.id + "-item-" + index}
			key={index}

			activeIconSrc={`${props.iconsSrcs}/active/${index}.png`}
			inactiveIconSrc={`${props.iconsSrcs}/inactive/${index}.png`}

			subviewIndex={props.subviewIndex}
			spanIndex={index}
		/>
	));

	return (
		<div className={`floating-navbar-container ${props.className}`} id={props.id} style={props.style}>
			<div className="floating-navbar" >
				{items}
			</div>
		</div>
	);
};

export default FloatingNabvar;