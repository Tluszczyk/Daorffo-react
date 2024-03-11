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
}

const SlidingPanel = (props: SlidingPanelProps) => {
	return (
		<div className="sliding-panel">
			<img className="sliding-panel-image" src={props.panelSrc} alt="panel" />
			<Link to={props.link} className="sliding-panel-button" > {props.buttonDescription} </Link>
		</div>
	);
};

export default SlidingPanel;
