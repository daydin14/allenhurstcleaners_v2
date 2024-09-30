// Dependencies
import React, { useState, useRef, useCallback, useEffect } from 'react';

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

    const [mode, setMode] = useState('directions');
    const [mapType, setMapType] = useState('roadmap');
    const [searchQuery, setSearchQuery] = useState('Allenhurst Cleaners');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const toggleMapType = () => {
        setMapType((prevType) => (prevType === 'roadmap' ? 'satellite' : 'roadmap'));
    };

    useEffect(() => {
        if (window.navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log('Geolocation coordinates:', latitude, longitude);
                    const trimmedLatitude = String(latitude).trim();
                    const trimmedLongitude = String(longitude).trim();
                    setOrigin(`${trimmedLatitude},${trimmedLongitude}`);
                    if (mapRef.current) {
                        mapRef.current.setCenter({ lat: parseFloat(trimmedLatitude), lng: parseFloat(trimmedLongitude) });
                    }
                },
                (err) => {
                    console.error('Geolocation error:', err);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

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
                    {/* Gmap component is needed for Gdetails to work. */}
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