// Dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <header className="header">
            <button className="hamburger" onClick={toggleSidebar}>
                &#9776;
            </button>
            <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={closeSidebar}>
                    &times;
                </button>
                <ul>
                    <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
                    <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
                    <li><Link to="/services" onClick={closeSidebar}>Services</Link></li>
                    <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;