import React from 'react';
import { Link } from 'react-router-dom';

// MUI Components
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Hooks
import useIsMobile from '../hooks/useIsMobile';

// Contexts
import { useSidePanel } from '../contexts/SidePanelContext';

// Components
import ThemeSwitcher from './ThemeSwitcher';

// Utils
import { logEvent } from '../utils/Ganalytics';

const SidePanel = () => {
    const { isSidePanelOpen, closeSidePanel } = useSidePanel();

    return (
        <Drawer anchor="left" open={isSidePanelOpen} onClose={handleCloseButtonClick}>
            <div className="side-panel">
                <div className="side-panel-header">
                    <ThemeSwitcher /> &emsp;
                    <IconButton onClick={closeSidePanel} className="close-button">
                        <CloseIcon />
                    </IconButton>
                </div>
                <List>
                    {/* Home */}
                    <ListItem
                        button
                        component={Link}
                        to="/"
                        onClick={() => handleLinkClick('Home')}
                        sx={{
                            color: 'text.primary',
                            textAlign: 'center',
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
                    {/* About */}
                    <ListItem
                        button
                        component={Link}
                        to="/about"
                        onClick={() => handleLinkClick('About')}
                        sx={{
                            color: 'text.primary',
                            textAlign: 'center',
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
                    {/* Services */}
                    <ListItem
                        button
                        component={Link}
                        to="/services"
                        onClick={() => handleLinkClick('Services')}
                        sx={{
                            color: 'text.primary',
                            textAlign: 'center',
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
                    {/* Contact */}
                    <ListItem
                        button
                        component={Link}
                        to="/reviews"
                        onClick={closeSidePanel}
                        sx={{
                            color: 'text.primary',
                            textAlign: 'center',
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
                        onClick={closeSidePanel}
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
                </List>
            </div>
        </Drawer>
    );
};

export default SidePanel;