// Dependencies
import React, { useState, useRef, useCallback, useEffect } from 'react';

// MUI Components
import { Box, Container, Paper, Typography } from '@mui/material';

// Components
import Gmap from '../components/GoogleMaps/Gmap';
import Gdetails from '../components/GoogleMaps/Gdetails';
import GmapEmbeded from '../components/GoogleMaps/GmapEmbeded';
import GmapEmbededToolBar from '../components/GoogleMaps/GmapEmbededToolBar';
import ContactForm from '../components/ContactForm';

// Utils
import { logPageView, logTiming, logEvent } from '../utils/Ganalytics';

const Contact = () => {
    // Google Maps API Map (not embeded) & Details
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);
    const handleMapLoad = useCallback((mapInstance) => {
        mapRef.current = mapInstance;
        setMap(mapInstance);
        logEvent('Contact', 'Map Loaded', 'Google Maps');
    }, []);

    // Google Maps Embeded Map
    const [mode, setMode] = useState('directions');
    const [mapType, setMapType] = useState('roadmap');
    const [searchQuery, setSearchQuery] = useState('Allenhurst Cleaners');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const toggleMapType = () => {
        setMapType((prevType) => (prevType === 'roadmap' ? 'satellite' : 'roadmap'));
        logEvent('Contact', 'Toggle Map Type', mapType === 'roadmap' ? 'Satellite' : 'Roadmap');
    };

    // Get user's geolocation coordinates and set as origin for directions map (embeded) on page load
    useEffect(() => {
        // Google Analytics
        logPageView();
        const startTime = performance.now();
        setTimeout(() => {
            const endTime = performance.now();
            const duration = endTime - startTime;
            logTiming('User Engagement', 'Time on Contact Page', duration, 'Contact Page');
        }, 1000);

        if (window.navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const trimmedLatitude = String(latitude).trim();
                    const trimmedLongitude = String(longitude).trim();
                    setOrigin(`${trimmedLatitude},${trimmedLongitude}`);
                    if (mapRef.current) {
                        mapRef.current.setCenter({ lat: parseFloat(trimmedLatitude), lng: parseFloat(trimmedLongitude) });
                    }
                    logEvent('Contact', 'Geolocation Success', `Lat: ${trimmedLatitude}, Lng: ${trimmedLongitude}`);
                },
                (err) => {
                    console.error('Geolocation error:', err);
                    logEvent('Contact', 'Geolocation Error', err.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <>
            <Container>
                {/* Header */}
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Contact Us!
                    </Typography>
                </Paper>

                {/* Google Maps API Map (Hidden) & Details */}
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Gdetails map={map} placeId={process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID} />
                    {map && (<></>)} {/* Removes warning for declared but unused 'map' */}
                    {/* Gmap component is needed for Gdetails to work. */}
                    <Box display={'none'}>
                        <Gmap id="map-contact" onLoad={handleMapLoad} />
                    </Box>
                </Paper>

                {/* Embeded Google Maps */}
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

                {/* Contact Form */}
                <ContactForm />
            </Container>
        </>
    );
};

export default Contact;