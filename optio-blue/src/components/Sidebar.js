// Dependencies
import React, { useState } from 'react';

const Sidebar = () => {
    const [isSidBarOpen, setIsSidBarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidBarOpen(!isSidBarOpen);
    };

    return (
        <div>
            <h1>Side Bar</h1>
            <button onClick={toggleSidebar}>
                {isSidBarOpen ? 'Close' : 'Open'} Sidebar
            </button>
            {isSidBarOpen && (
                <ul>
                    <li><a href="#section1">Section 1</a></li>
                    <li><a href="#section2">Section 2</a></li>
                    <li><a href="#section3">Section 3</a></li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;