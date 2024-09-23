import React, { createContext, useState, useContext } from 'react';

const SidePanelContext = createContext();

export const useSidePanel = () => useContext(SidePanelContext);

export const SidePanelProvider = ({ children }) => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

    const toggleSidePanel = () => {
        setIsSidePanelOpen(!isSidePanelOpen);
    };

    const closeSidePanel = () => {
        setIsSidePanelOpen(false);
    };

    return (
        <SidePanelContext.Provider value={{ isSidePanelOpen, toggleSidePanel, closeSidePanel }}>
            {children}
        </SidePanelContext.Provider>
    );
};