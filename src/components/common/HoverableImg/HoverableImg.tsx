// modules
import { useState } from "react";

// components

// styles
import "./HoverableImg.scss";
import "./HoverableImg_desktop.scss";
import "./HoverableImg_mobile.scss";

import { WrapperProps } from "../../../common/commonProps";

interface HoverableImgProps extends WrapperProps {
	dirPath: string
}

const HoverableImg = (props: HoverableImgProps) => {
	const [active, setActive] = useState(false);

	const onMouseEnter = () => setActive(true);
	const onMouseLeave = () => setActive(false);

	const src = props.dirPath + "/icon-" + (active ? "active" : "inactive") + ".png";

	return <img id={props.id} className={`hoverable-img ${props.className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} src={src} alt="not found"/>
};

export default HoverableImg;
