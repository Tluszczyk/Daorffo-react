// modules
import { useState, useEffect, useCallback } from "react";
import useSwipe from "../../../common/useSwipe";

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

	const setNextPanelActive = useCallback(() => {
		setActivePanel((activePanel + 1) % props.links.length);
	}, [activePanel, props.links.length])

	const setPreviousPanelActive = useCallback(() => {
		setActivePanel((activePanel - 1 + props.links.length) % props.links.length)
	}, [activePanel, props.links.length]);

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
		const timer = setInterval(setNextPanelActive, props.interval ?? 5000);

		return () => {
			clearInterval(timer);
		};
	}, [activePanel, numberOfPanels, props.interval, setNextPanelActive]);

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

	const swipeHandlers = useSwipe({ onSwipedLeft: setNextPanelActive, onSwipedRight: setPreviousPanelActive });

	return (
		<div className="sliding-panels-container" {...swipeHandlers}>
			<div className="sliding-panels" style={{ left: `${-activePanel*100}vw`}}>
				{panels}
			</div>
			<div className="panel-dots">{panelDots}</div>
		</div>
	);
};

export default SlidingPanels;
