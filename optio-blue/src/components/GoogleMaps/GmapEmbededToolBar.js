// Dependencies
import React, { useState } from 'react';

// Hooks
import useIsMobile from '../../hooks/useIsMobile';

// Mui Components
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem, Switch, FormControlLabel, TextField, IconButton, InputAdornment } from '@mui/material';

// Mui Icons
import ClearIcon from '@mui/icons-material/Clear';

// Utils
import { logEvent } from '../../utils/Ganalytics';

const GmapEmbededToolBar = ({ setMode, mapType, toggleMapType, setSearchQuery, setOrigin, setDestination, mode }) => {
    const isMobile = useIsMobile();
    const [searchInput, setSearchInput] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [originInput, setOriginInput] = useState('');
    const [destinationInput, setDestinationInput] = useState('');

    // Search Bar Handlers
    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };
    const handleSearchSubmit = () => {
        const query = searchInput.trim() === '' ? 'Allenhurst Cleaners' : searchInput;
        setSearchQuery(query);
        setMode('search');
        logEvent('GmapEmbededToolBar', 'Search Submit', `Query: ${query}`);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchSubmit();
        }
    };
    const handleClearSearch = () => {
        setSearchInput('');
        logEvent('GmapEmbededToolBar', 'Clear Search', 'Search input cleared');
    };

    // Menu Handlers
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        logEvent('GmapEmbededToolBar', 'Menu Open', 'Menu opened');
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        logEvent('GmapEmbededToolBar', 'Menu Close', 'Menu closed');
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (mode) => {
        setMode(mode);
        handleMenuClose();
        logEvent('GmapEmbededToolBar', 'Menu Item Click', `Mode: ${mode}`);
    };

    // Directions Handlers
    const handleOriginChange = (event) => {
        setOriginInput(event.target.value);
        logEvent('GmapEmbededToolBar', 'Origin Change', `Origin: ${event.target.value}`);
    };
    const handleDestinationChange = (event) => {
        setDestinationInput(event.target.value);
        logEvent('GmapEmbededToolBar', 'Destination Change', `Destination: ${event.target.value}`);
    };
    const handleDestinationChange = (event) => {
        setDestinationInput(event.target.value);
    };
    const handleFindDirections = () => {
        const origin = originInput.trim() === '' ? 'current+location' : originInput;
        const destination = destinationInput.trim() === '' ? 'Allenhurst+Cleaners' : destinationInput;
        setOrigin(origin);
        setDestination(destination);
        setMode('directions');
        logEvent('GmapEmbededToolBar', 'Find Directions', `Origin: ${origin}, Destination: ${destination}`);
    };
    const handleResetDirections = () => {
        setOriginInput('');
        setDestinationInput('');
        setOrigin('current+location');
        setDestination('Allenhurst+Cleaners');
        setMode('directions');
        setSearchInput('');
        logEvent('GmapEmbededToolBar', 'Reset Directions', 'Directions reset');
    };

    return (
        <AppBar position="static">
            <Toolbar style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                {/* Map Header and Mode Toggle */}
                <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    flexDirection: isMobile ? 'column' : 'row',
                    marginTop: '15px',
                    marginBottom: '15px'
                }}>
                    <Typography variant="h6" style={{ marginBottom: isMobile ? '10px' : '0' }}>Map Controls</Typography>
                    {mode === 'directions' && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body1" style={{ marginBottom: isMobile ? '10px' : '0' }}>
                                Map Type: &emsp;
                            </Typography>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={mapType === 'satellite'}
                                        onChange={toggleMapType}
                                        name="mapTypeSwitch"
                                        color="default"
                                    />
                                }
                                label={`${mapType.charAt(0).toUpperCase() + mapType.slice(1)}`}
                            />
                        </div>
                    )}
                    <>
                        <Button color="inherit" onClick={handleMenuOpen}>Map Mode</Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={() => handleMenuItemClick('place')}>Place</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick('directions')}>Directions</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick('view')}>View</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick('streetview')}>Street View</MenuItem>
                        </Menu>
                    </>
                </div>

                {/* Search Bar */}
                <div style={{ display: 'flex', width: '100%', marginTop: '15px', marginBottom: '15px' }}>
                    <TextField
                        label="Search"
                        variant="filled"
                        size="small"
                        value={searchInput}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyPress}
                        style={{ flexGrow: 1, marginRight: '10px' }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="clear search"
                                            onClick={handleClearSearch}
                                            edge="end"
                                        >
                                            <ClearIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    <Button color="inherit" onClick={handleSearchSubmit}>Search</Button>
                </div>

                {/* Map Controls */}
                <div style={{ display: 'flex', width: '100%', marginTop: '15px', marginBottom: '15px' }}>
                    {(() => {
                        switch (mode) {
                            case 'place':
                            case 'search':
                                return (
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={mapType === 'satellite'}
                                                onChange={toggleMapType}
                                                name="mapTypeSwitch"
                                                color="default"
                                            />
                                        }
                                        label={`Map Type: ${mapType.charAt(0).toUpperCase() + mapType.slice(1)}`}
                                    />
                                );
                            case 'directions':
                                return (
                                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', width: '100%' }}>
                                        <TextField
                                            label="Origin"
                                            variant="standard"
                                            size="small"
                                            value={originInput}
                                            onChange={handleOriginChange}
                                            onKeyDown={(event) => {
                                                if (event.key === 'Enter') {
                                                    handleFindDirections();
                                                }
                                            }}
                                            style={{ flexGrow: 1, marginRight: isMobile ? '0' : '10px', marginBottom: isMobile ? '10px' : '0', width: '100%' }}
                                        />
                                        <TextField
                                            label="Destination"
                                            variant="standard"
                                            size="small"
                                            value={destinationInput}
                                            onChange={handleDestinationChange}
                                            onKeyDown={(event) => {
                                                if (event.key === 'Enter') {
                                                    handleFindDirections();
                                                }
                                            }}
                                            style={{ flexGrow: 1, marginRight: isMobile ? '0' : '10px', marginBottom: isMobile ? '10px' : '0', width: '100%' }}
                                        />
                                        <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'row', justifyContent: isMobile ? 'space-between' : 'flex-end', width: '100%' }}>
                                            <>
                                                <Button color="inherit" onClick={handleResetDirections} style={{ marginRight: '10px' }}>Reset</Button>
                                                <Button color="inherit" onClick={handleFindDirections}>Find Directions</Button>
                                            </>
                                            {/* {isMobile ? (
                                                <>
                                                    <Button color="inherit" onClick={handleResetDirections} style={{ marginRight: '10px' }}>Reset</Button>
                                                    <Button color="inherit" onClick={handleFindDirections}>Find Directions</Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button color="inherit" onClick={handleFindDirections} style={{ marginRight: '10px' }}>Find Directions</Button>
                                                    <Button color="inherit" onClick={handleResetDirections}>Reset</Button>
                                                </>
                                            )} */}
                                        </div>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })()}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default GmapEmbededToolBar;