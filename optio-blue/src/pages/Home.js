// Dependencies
import React, { useState, useRef, useCallback } from 'react';

// MUI Components
import { Container, Paper, Typography, Box } from '@mui/material';

// Carousel Styles and Component
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// Components
import Gmap from '../components/GoogleMaps/Gmap';

// Utils
import images from '../utils/ImportImages';

const Home = () => {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);

    const handleMapLoad = useCallback((mapInstance) => {
        mapRef.current = mapInstance;
        setMap(mapInstance);
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
                    <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
                        530 Main Street
                    </Typography>
                </Paper>

                {/* Google Map Component */}
                <Box my={2}>
                    <Gmap id="map-home" onLoad={handleMapLoad} />
                </Box>

                {/* Quick Info */}
                <Paper elevation={3} sx={{ padding: 2 }}>
                    <Typography variant="h6" component="p">
                        Hours of Operation:
                    </Typography>
                    <Typography variant="body1" component="p">
                        Monday-Friday, 8:00AM - 4:00PM Saturday, 8:00AM - 3:00PM
                    </Typography>
                    <Typography variant="body1" component="p">
                        Only accepting alterations Monday-Saturday, 10:00AM - 3:00PM
                        <br />
                        <small>
                            <i>Subject to change dependent on the four seasons</i>
                        </small>
                    </Typography>
                    <Typography variant="body1" component="p">
                        Minimum $10 credit/debit card purchase
                    </Typography>
                    <Typography variant="body1" component="p">
                        Acceptable payments include: Amex, Apple Pay, Cash, Checks, Credit and Debit Cards
                    </Typography>
                </Paper>
            </Container>
        </>
    );
};

export default Home;