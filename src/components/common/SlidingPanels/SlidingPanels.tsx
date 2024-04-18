// modules
import { useState, useEffect, useCallback } from "react";
import useSwipe from "../../../common/useSwipe";
import { SlidingPanelTimerProvider } from "./SlidingPanelTimerProvider";

// components
import { WrapperProps } from "../../../common/commonProps";

// styles
import "./SlidingPanels.scss";
import "./SlidingPanels_desktop.scss";
import "./SlidingPanels_mobile.scss";

interface SlidingPanelsProps extends WrapperProps {}

const SlidingPanels = (props: SlidingPanelsProps) => {
	const [activePanel, setActivePanel] = useState(0);

	const panels = (props.children ?? []) as JSX.Element[];
	const numberOfPanels = panels.length;

	const setNextPanelActive = useCallback(() => {
		console.log("setNextPanelActive")
		setActivePanel((activePanel + 1) % numberOfPanels);
	}, [activePanel, numberOfPanels])

	const setPreviousPanelActive = useCallback(() => {
		setActivePanel((activePanel - 1 + numberOfPanels) % numberOfPanels)
	}, [activePanel, numberOfPanels]);
	
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
				<SlidingPanelTimerProvider activePanelId={activePanel} timeIsUpCallback={setNextPanelActive}>
					{panels}
				</SlidingPanelTimerProvider>
			</div>
			<div className="panel-dots">{panelDots}</div>
		</div>
	);
};

export default SlidingPanels;
