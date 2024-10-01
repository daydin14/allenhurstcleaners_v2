import React from 'react';
import { Link } from 'react-router-dom';

// MUI Components
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Hooks
import { useSidePanel } from '../contexts/SidePanelContext';
import ThemeSwitcher from './ThemeSwitcher';

// Utils
import { logEvent } from '../utils/Ganalytics';

const SidePanel = () => {
    const { isSidePanelOpen, closeSidePanel } = useSidePanel();

    const handleLinkClick = (label) => {
        closeSidePanel();
        logEvent('SidePanel', 'Navigation Click', label);
    };

    const handleCloseButtonClick = () => {
        closeSidePanel();
        logEvent('SidePanel', 'Close Button Click', 'Close Side Panel');
    };

    return (
        <Drawer anchor="left" open={isSidePanelOpen} onClose={handleCloseButtonClick}>
            <div className="side-panel">
                <div className="side-panel-header">
                    <ThemeSwitcher /> &emsp;
                    <IconButton onClick={handleCloseButtonClick} className="close-button">
                        <CloseIcon />
                    </IconButton>
                </div>
                <List>
                    <ListItem
                        button
                        component={Link}
                        to="/"
                        onClick={() => handleLinkClick('Home')}
                        sx={{
                            color: 'text.primary',
                            '&:hover': {
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? theme.palette.grey[300]
                                        : theme.palette.grey[700],
                            },
                        }}
                    >
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/about"
                        onClick={() => handleLinkClick('About')}
                        sx={{
                            color: 'text.primary',
                            '&:hover': {
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? theme.palette.grey[300]
                                        : theme.palette.grey[700],
                            },
                        }}
                    >
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/services"
                        onClick={() => handleLinkClick('Services')}
                        sx={{
                            color: 'text.primary',
                            '&:hover': {
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? theme.palette.grey[300]
                                        : theme.palette.grey[700],
                            },
                        }}
                    >
                        <ListItemText primary="Services" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/reviews"
                        onClick={() => handleLinkClick('Reviews')}
                        sx={{
                            color: 'text.primary',
                            '&:hover': {
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? theme.palette.grey[300]
                                        : theme.palette.grey[700],
                            },
                        }}
                    >
                        <ListItemText primary="Reviews" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/contact"
                        onClick={() => handleLinkClick('Contact')}
                        sx={{
                            color: 'text.primary',
                            '&:hover': {
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? theme.palette.grey[300]
                                        : theme.palette.grey[700],
                            },
                        }}
                    >
                        <ListItemText primary="Contact" />
                    </ListItem>
                    {process.env.NODE_ENV === 'development' && (
                        <ListItem
                            button
                            component={Link}
                            to="/sandbox"
                            onClick={() => handleLinkClick('Sandbox')}
                            sx={{
                                color: 'text.primary',
                                '&:hover': {
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[300]
                                            : theme.palette.grey[700],
                                },
                            }}
                        >
                            <ListItemText primary="Sandbox" />
                        </ListItem>
                    )}
                </List>
            </div>
        </Drawer>
    );
};

export default SidePanel;