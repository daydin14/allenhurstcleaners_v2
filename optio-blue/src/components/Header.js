// Dependencies
import React from 'react';

// Hooks
import useIsMobile from '../hooks/useIsMobile';

// Components
import SidePanel from './SidePanel';
import NavMenu from './NavMenu';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
    const isMobile = useIsMobile();
    return (
        <>
            <header className="header">
                <SidePanel />
                {isMobile ? <ThemeSwitcher /> : <NavMenu />}
                {/* {!isMobile && <NavMenu />} */}
            </header>
        </>
    );
};

export default Header;