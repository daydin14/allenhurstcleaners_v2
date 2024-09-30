// Dependencies
import React, { useState } from 'react';

// Mui Components
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem, Switch, FormControlLabel, TextField, IconButton, InputAdornment } from '@mui/material';

// Mui Icons
import ClearIcon from '@mui/icons-material/Clear';

const GmapEmbededToolBar = ({ setMode, mapType, toggleMapType, setSearchQuery, setOrigin, setDestination, mode }) => {
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
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchSubmit();
        }
    };
    const handleClearSearch = () => {
        setSearchInput('');
    };

    // Menu Handlers
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (mode) => {
        setMode(mode);
        handleMenuClose();
    };

    // Directions Handlers
    const handleOriginChange = (event) => {
        setOriginInput(event.target.value);
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
    };
    const handleResetDirections = () => {
        setOriginInput('');
        setDestinationInput('');
        setOrigin('current+location');
        setDestination('Allenhurst+Cleaners');
        setMode('directions');
        setSearchInput('');
    };

    return (
        <AppBar position="static">
            <Toolbar style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                {/* Map Header and Mode Toggle */}
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px', marginBottom: '15px' }}>
                    <Typography variant="h6">Map Controls</Typography>
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
                                    <>
                                        <TextField
                                            label="Origin"
                                            variant="standard"
                                            size="small"
                                            value={originInput}
                                            onChange={handleOriginChange}
                                            onKeyPress={(event) => {
                                                if (event.key === 'Enter') {
                                                    handleFindDirections();
                                                }
                                            }}
                                            style={{ flexGrow: 1, marginRight: '10px' }}
                                        />
                                        <TextField
                                            label="Destination"
                                            variant="standard"
                                            size="small"
                                            value={destinationInput}
                                            onChange={handleDestinationChange}
                                            onKeyPress={(event) => {
                                                if (event.key === 'Enter') {
                                                    handleFindDirections();
                                                }
                                            }}
                                            style={{ flexGrow: 1, marginRight: '10px' }}
                                        />
                                        <Button color="inherit" onClick={handleFindDirections}>Find Directions</Button>
                                        <Button color="inherit" onClick={handleResetDirections}>Reset</Button>
                                    </>
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