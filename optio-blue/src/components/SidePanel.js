// Dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidePanel = () => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

    const toggleSidePanel = () => {
        setIsSidePanelOpen(!isSidePanelOpen);
    };

    const closeSidePanel = () => {
        setIsSidePanelOpen(false);
    };

    return (
        <div>
            <button className="hamburger" onClick={toggleSidePanel}>
                &#9776;
            </button>
            <div className={`sidepanel ${isSidePanelOpen ? 'open' : ''}`}>
                <h1>Side Panel</h1>
                <nav>
                    <button className="close-btn" onClick={closeSidePanel}>
                        &times;
                    </button>
                    <ul>
                        <li><Link to="/" onClick={closeSidePanel}>Home</Link></li>
                        <li><Link to="/about" onClick={closeSidePanel}>About</Link></li>
                        <li><Link to="/services" onClick={closeSidePanel}>Services</Link></li>
                        <li><Link to="/contact" onClick={closeSidePanel}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SidePanel
