// Dependencies
import React from 'react'

// Components
import SidePanel from './SidePanel';
import NavMenu from './NavMenu';

const Header = () => {
    return (
        <header className="header">
            <SidePanel />
            <NavMenu />
        </header>
    );
};

export default Header;