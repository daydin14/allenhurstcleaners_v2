import React from 'react';
import { Link } from 'react-router-dom';

// MUI Components
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Hooks
import { useSidePanel } from '../contexts/SidePanelContext';
import ThemeSwitcher from './ThemeSwitcher';

const SidePanel = () => {
    const { isSidePanelOpen, closeSidePanel } = useSidePanel();

    return (
        <Drawer anchor="left" open={isSidePanelOpen} onClose={closeSidePanel}>
            <div className="side-panel">
                <div className="side-panel-header">
                    <ThemeSwitcher /> &emsp;
                    <IconButton onClick={closeSidePanel} className="close-button">
                        <CloseIcon />
                    </IconButton>
                </div>
                <List>
                    <ListItem
                        button
                        component={Link}
                        to="/"
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
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/about"
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
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/services"
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
                        <ListItemText primary="Services" />
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