// Dependencies
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';

// Mui Components
import { Button, Container, Paper, Typography } from '@mui/material'

// Components
import GmapEmbeded from '../components/GoogleMaps/GmapEmbeded'
import GmapEmbededToolBar from '../components/GoogleMaps/GmapEmbededToolBar';


const Sandbox = () => {
    const [mode, setMode] = useState('place');
    const [mapType, setMapType] = useState('roadmap');
    const [searchQuery, setSearchQuery] = useState('Allenhurst, New Jersey');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const toggleMapType = () => {
        setMapType((prevType) => (prevType === 'roadmap' ? 'satellite' : 'roadmap'));
    };

    if (process.env.NODE_ENV !== 'development') {
        return (
            <Container>
                <Paper>
                    <Typography variant="h4">
                        Access Denied
                    </Typography>
                    <Typography variant="body1">
                        This page is only available in development mode.
                    </Typography>
                    <Typography variant="body1">
                        Please use the site as intended with the navigation menu.
                        <Button component={RouterLink} to="/" color="primary">
                            Back to Home Page
                        </Button>
                    </Typography>
                </Paper>
            </Container>
        );
    }

    return (
        <Container>
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, textAlign: 'center' }}>
                <Typography variant="h4">
                    Sandbox
                </Typography>
            </Paper>
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <GmapEmbededToolBar
                    setMode={setMode}
                    mapType={mapType}
                    toggleMapType={toggleMapType}
                    setSearchQuery={setSearchQuery}
                    setOrigin={setOrigin}
                    setDestination={setDestination}
                    mode={mode}
                />
                <GmapEmbeded
                    mode={mode}
                    mapType={mapType}
                    searchQuery={searchQuery}
                    origin={origin}
                    destination={destination}
                />
            </Paper>
        </Container>
    );
};

export default Sandbox;
