// Dependencies
import React, { createContext, useState, useContext } from 'react';

// Utils
import { logEvent } from '../utils/Ganalytics';

const SidePanelContext = createContext();

export const useSidePanel = () => useContext(SidePanelContext);

export const SidePanelProvider = ({ children }) => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

    const toggleSidePanel = () => {
        const newIsSidePanelOpen = !isSidePanelOpen;
        setIsSidePanelOpen(newIsSidePanelOpen);
        logEvent('SidePanel', 'Toggle', newIsSidePanelOpen ? 'Open' : 'Close');
    };

    const closeSidePanel = () => {
        setIsSidePanelOpen(false);
        logEvent('SidePanel', 'Close', 'Close Side Panel');
    };

    return (
        <SidePanelContext.Provider value={{ isSidePanelOpen, toggleSidePanel, closeSidePanel }}>
            {children}
        </SidePanelContext.Provider>
    );
};