// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// MUI Components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

// Hooks
import useIsMobile from '../hooks/useIsMobile';

// Components
import NavMenu from './NavMenu';
import ThemeSwitcher from './ThemeSwitcher';
import { useSidePanel } from '../contexts/SidePanelContext';

const Header = () => {
    const isMobile = useIsMobile();
    const { toggleSidePanel } = useSidePanel();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidePanel}>
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        Allenhurst Cleaners
                    </Link>
                </Typography>

                {isMobile ? <ThemeSwitcher /> : <NavMenu />}
            </Toolbar>
        </AppBar>
    );
};

export default Header;