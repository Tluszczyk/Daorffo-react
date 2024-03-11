// modules
import { useState, useEffect } from "react";

// components
import SlidingPanel from "./SlidingPanel/SlidingPanel";

// styles
import "./SlidingPanels.scss";
import "./SlidingPanels_desktop.scss";
import "./SlidingPanels_mobile.scss";

interface SlidingPanelsProps {
	src: string;
	links: string[];
	buttonDescriptions: string[];

	interval?: number;
}

const SlidingPanels = (props: SlidingPanelsProps) => {
	const [activePanel, setActivePanel] = useState(0);

	const numberOfPanels = props.links.length;

	const panels = [];

	for (let i = 0; i < numberOfPanels; i++) {
		panels.push(
			<SlidingPanel
				isActive={i === activePanel}
				key={i}
				panelSrc={`${props.src}/${i}.jpg`}
				link={props.links[i]}
				buttonDescription={props.buttonDescriptions[i]}
			/>
		);
	}

	useEffect(() => {
		const timer = setInterval(() => {
			setActivePanel((activePanel + 1) % numberOfPanels);
		}, props.interval ?? 5000);

		return () => {
			clearInterval(timer);
		};
	}, [activePanel, numberOfPanels, props.interval]);

	const panelDots = [];

	for (let i = 0; i < numberOfPanels; i++) {
		panelDots.push(
			<div
				key={i}
				className={`panel-dot panel-dot-${i === activePanel ? "active" : "inactive"}`}
				onClick={() => setActivePanel(i)}
			></div>
		);
	}

	return (
		<div className="sliding-panels-container">
			<div className="sliding-panels" style={{ left: `${-activePanel*100}vw`}}>
				{panels}
			</div>
			<div className="panel-dots">{panelDots}</div>
		</div>
	);
};

export default SlidingPanels;
