// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = ({ onClick }) => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" onClick={onClick}>Home</Link></li>
                    <li><Link to="/about" onClick={onClick}>About</Link></li>
                    <li><Link to="/services" onClick={onClick}>Services</Link></li>
                    <li><Link to="/contact" onClick={onClick}>Contact</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default NavMenu;