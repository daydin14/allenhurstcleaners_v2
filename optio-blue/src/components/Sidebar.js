// Dependencies
import React, { useState } from 'react';

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
                <ul>
                    <li><a href="#section1">Section 1</a></li>
                    <li><a href="#section2">Section 2</a></li>
                    <li><a href="#section3">Section 3</a></li>
                </ul>
            </div>
        </div >
    );
};

export default Sidebar;