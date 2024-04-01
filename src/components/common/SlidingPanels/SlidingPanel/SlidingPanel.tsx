// modules

// components
import { Link } from "react-router-dom";

// styles
import "./SlidingPanel.scss";
import "./SlidingPanel_desktop.scss";
import "./SlidingPanel_mobile.scss";

interface SlidingPanelProps {
	isActive: boolean;
	panelSrc: string;
	link: string;
	buttonDescription: string;
	contentType: "image" | "gif" | "video";
}

const SlidingPanel = (props: SlidingPanelProps) => {
	const content = (props.contentType === "image" || props.contentType === "gif") ?
		<img className="sliding-panel-image" src={props.panelSrc} alt="panel" /> :
		<video className="sliding-panel-image" autoPlay muted loop>
			<source src={props.panelSrc} type="video/mp4" />
		</video>;

	return (
		<div className="sliding-panel">
			{ content }
			<Link to={props.link} className="sliding-panel-button" > {props.buttonDescription} </Link>
		</div>
	);
};

export default SlidingPanel;
