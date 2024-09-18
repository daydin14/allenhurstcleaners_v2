// Dependencies
import React, { useState } from 'react';

// Components
import NavMenu from './NavMenu';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div>
            <button onClick={toggleSidebar}>
                {isSidebarOpen ? ' <' : ' >'}
            </button>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={closeSidebar}>
                    {'<'}
                </button>
                <h1>Side Bar</h1>
                <NavMenu onClick={closeSidebar} />
            </div>
        </div >
    );
};

export default Sidebar;