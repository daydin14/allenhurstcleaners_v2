// Dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import useIsMobile from '../hooks/useIsMobile';

// Components
import ThemeSwitcher from './ThemeSwitcher';

const SidePanel = () => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

    const toggleSidePanel = () => {
        setIsSidePanelOpen(!isSidePanelOpen);
    };

    const closeSidePanel = () => {
        setIsSidePanelOpen(false);
    };

    const isMobile = useIsMobile();

    return (
        <>
            <button className="hamburger" onClick={toggleSidePanel}>
                &#9776;&nbsp;Allenhurst Cleaners
            </button>
            <div className={`sidepanel ${isSidePanelOpen ? 'open' : ''}`}>
                <div className="sidepanel-header">
                    {!isMobile && <ThemeSwitcher />}
                    <button className="close-btn" onClick={closeSidePanel}>
                        &times;
                    </button>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/" onClick={closeSidePanel}>Home</Link></li>
                        <li><Link to="/about" onClick={closeSidePanel}>About</Link></li>
                        <li><Link to="/services" onClick={closeSidePanel}>Services</Link></li>
                        <li><Link to="/contact" onClick={closeSidePanel}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default SidePanel;