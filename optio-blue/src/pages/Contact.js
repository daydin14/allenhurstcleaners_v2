// Dependencies
import React, { useState, useRef, useCallback } from 'react';

// MUI Components
import { Typography, Container, Box } from '@mui/material';

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
                <Box id="map-contact">
                    <Gmap onLoad={handleMapLoad} />
                </Box>
                {map && (
                    <Box mt={2}>
                        <Gdetails map={map} placeId={process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID} />
                    </Box>
                )}
                <Typography variant="h4" mt={4}>
                    Leave us a Google Review!
                </Typography>
            </Container>
        </>
    );
};

export default Contact;