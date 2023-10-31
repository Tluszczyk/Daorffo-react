// modules
import React, { useState } from "react";
import { WrapperProps } from "../../../common/commonProps";

// components

// styles
import "./SoonInfoTip.scss";

interface SoonInfoTipProps extends WrapperProps {}

const SoonInfoTip = (props: SoonInfoTipProps) => {
	const [show, setShow] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const onMouseEnter = () => {
		setShow(true);
	};

	const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const x = e.clientX + 10;
		const y = e.clientY + 10;

		setPosition({ x, y });
	};

	const onMouseLeave = () => {
		setShow(false);
	};

	return <div 
		className="soon-info-tip-wrapper"
		onMouseEnter={onMouseEnter}
		onMouseMove={onMouseMove}
		onMouseLeave={onMouseLeave}
	>
		<div className="soon-info-tip-children-wrapper">
			{props.children}
		</div>

		{show &&
			<div className="soon-div" style={{
				position: "fixed",
				top: position.y,
				left: position.x
			}}>
				soon...
			</div>
		}
	</div>
};

export default SoonInfoTip;
