// Dependencies
import React, { useState, useRef, useCallback } from 'react';

// MUI Components
import { Typography, Box, Container, Paper } from '@mui/material'

// Components
import Gmap from '../components/GoogleMaps/Gmap';
import Greviews from '../components/GoogleMaps/Greviews'

const Reviews = () => {
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
                    <Typography variant="h4">
                        Recent Reviews
                    </Typography>
                </Paper>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    {map && (
                        <Box mt={2}>
                            <Greviews map={map} placeId={process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID} />
                        </Box>
                    )}
                    <Box id="map-review" display={'none'}>
                        <Gmap onLoad={handleMapLoad} />
                    </Box>
                </Paper>
            </Container>
        </>
    );
}

export default Reviews
