// Dependencies
import React, { useState, useRef, useCallback } from 'react';

// MUI Components
import { Container, Paper, Typography, Box } from '@mui/material';

// Components
import Gmap from '../components/GoogleMaps/Gmap';
import Gdetails from '../components/GoogleMaps/Gdetails';

const Contact = () => {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);

    const handleMapLoad = useCallback((mapInstance) => {
        mapRef.current = mapInstance;
        setMap(mapInstance);
    }, []);

    return (
        <>
            <Container>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, textAlign: 'center' }}>
                    <Typography variant="h4" mt={4}>
                        Contact Us!
                    </Typography>
                </Paper>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    {map && (
                        <Box mt={2}>
                            <Gdetails map={map} placeId={process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID} />
                        </Box>
                    )}
                    <Box id="map-contact">
                        <Gmap onLoad={handleMapLoad} />
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