import React, { createContext, useContext } from "react";

export const SlidingPanelTimerContext = createContext<[number, () => void]>([0, () => {}]);

export const SlidingPanelTimerProvider = ({
        activePanelId,
        timeIsUpCallback,
        children,
    }: {
        activePanelId: number;
        timeIsUpCallback: () => void,
        children: React.ReactNode;
    }) => {console.log("SlidingPanelTimerProvider");return (
        <SlidingPanelTimerContext.Provider value={[activePanelId, timeIsUpCallback]}>
            {children}
        </SlidingPanelTimerContext.Provider>
)};

export const useSlidingPanelTimer = () => {
	return useContext(SlidingPanelTimerContext);
};

