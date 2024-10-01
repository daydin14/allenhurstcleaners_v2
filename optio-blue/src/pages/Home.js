// Dependencies
import React, { useState, useRef, useCallback, useEffect } from 'react';

// MUI Components
import { Container, Paper, Typography, Box } from '@mui/material';

// Carousel Styles and Component
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// Components
import Gmap from '../components/GoogleMaps/Gmap';

// Utils
import images from '../utils/ImportImages';
import { logPageView, logTiming } from '../utils/Ganalytics';

const Home = () => {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);

    const handleMapLoad = useCallback((mapInstance) => {
        mapRef.current = mapInstance;
        setMap(mapInstance);
    }, []);

    useEffect(() => {
        logPageView();
        const startTime = performance.now();
        setTimeout(() => {
            const endTime = performance.now();
            const duration = endTime - startTime;
            logTiming('User Engagement', 'Time on Home Page', duration, 'Home Page');
        }, 1000);
    }, []);

    return (
        <>
            <Container>

                {/* Carousel of Store Images */}
                <Box my={4}>
                    <Carousel showThumbs={false} emulateTouch={true} autoPlay infiniteLoop>
                        {Object.keys(images).map((key, index) => (
                            <div key={index}>
                                <img className='carousel-image' src={images[key]} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                </Box>

                {/* Address Branding */}
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', textDecoration: 'underline' }}>
                        530 Main Street
                    </Typography>
                </Paper>

                {/* Google Map Component */}
                <Gmap id="map-home" onLoad={handleMapLoad} />
                {map && (<></>)} {/* Removes warning for declared but unused 'map' */}

                {/* Quick Info */}
                <Paper elevation={3} sx={{ padding: 2 }}>
                    <Typography variant="h6" component="p" gutterBottom>
                        Hours of Operation:
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Monday-Friday: 8:00AM - 4:00PM
                        <br />
                        Saturday: 8:00AM - 3:00PM
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" gutterBottom>
                        Alterations: Monday-Saturday, 10:00AM - 3:00PM
                        <br />
                        <small>
                            <i>Subject to seasonal changes</i>
                        </small>
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" gutterBottom>
                        Minimum $10 for card purchases
                        <br />
                        We accept:
                    </Typography>
                    <ul>
                        <li>Amex</li>
                        <li>Apple Pay</li>
                        <li>Cash</li>
                        <li>Checks</li>
                        <li>Credit and Debit Cards</li>
                    </ul>
                </Paper>
            </Container>
        </>
    );
};

export default Home;