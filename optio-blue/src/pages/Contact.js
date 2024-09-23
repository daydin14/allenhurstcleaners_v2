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
                <Typography variant="h1" gutterBottom>
                    Contact Us
                </Typography>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h4" mt={4}>
                        Leave us a Google Review!
                    </Typography>
                </Paper>
                <Box id="map-contact">
                    <Gmap onLoad={handleMapLoad} />
                </Box>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    {map && (
                        <Box mt={2}>
                            <Gdetails map={map} placeId={process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID} />
                        </Box>
                    )}
                </Paper>
            </Container>
        </>
    );
};

export default Contact;