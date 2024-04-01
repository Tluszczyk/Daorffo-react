import React, { createContext, useContext } from "react";

export const ActiveSlidingPanelContext = createContext<number | null>(null);

export const ActiveSlidingPanelProvider = ({
        activePanelId,
        children,
    }: {
        activePanelId: number;
        children: React.ReactNode;
    }) => (
        <ActiveSlidingPanelContext.Provider value={activePanelId}>
            {children}
        </ActiveSlidingPanelContext.Provider>
);

export const useActiveSlidingPanelId = () => {
	const activePanelId = useContext(ActiveSlidingPanelContext);
    
	if (activePanelId === null) {
		throw new Error("useActiveSlidingPanelId must be used within an ActiveSlidingPanelProvider.");
	}
	return activePanelId;
};

