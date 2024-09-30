// Dependencies
import React, { useState, useRef, useCallback } from 'react';

// MUI Components
import { Box, Container, Paper, Typography } from '@mui/material';

// Components
import Gmap from '../components/GoogleMaps/Gmap';
import Gdetails from '../components/GoogleMaps/Gdetails';
import GmapEmbeded from '../components/GoogleMaps/GmapEmbeded';
import GmapEmbededToolBar from '../components/GoogleMaps/GmapEmbededToolBar';

const Contact = () => {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);

    const handleMapLoad = useCallback((mapInstance) => {
        mapRef.current = mapInstance;
        setMap(mapInstance);
    }, []);

    const [mode, setMode] = useState('place');
    const [mapType, setMapType] = useState('roadmap');
    const [searchQuery, setSearchQuery] = useState('Allenhurst, New Jersey');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const toggleMapType = () => {
        setMapType((prevType) => (prevType === 'roadmap' ? 'satellite' : 'roadmap'));
    };

    return (
        <>
            <Container>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Contact Us!
                    </Typography>
                </Paper>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Gdetails map={map} placeId={process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID} />
                    {map && (<></>)} {/* Removes warning for declared but unused 'map' */}
                    <Box display={'none'}>
                        <Gmap id="map-contact" onLoad={handleMapLoad} />
                    </Box>
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
                        height={450}
                    />
                </Paper>
            </Container>
        </>
    );
};

export default Contact;