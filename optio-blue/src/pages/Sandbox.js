// Dependencies
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI Components
import { Container, Paper, Typography, Grid2, Button } from '@mui/material';

// Components
import Tile from '../components/Tile';

const Sandbox = () => {
    // If not in development mode, display an access denied message
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

    const tilesData = [
        {
            frontText: 'Dry Cleaning',
            backText: 'Treat, Clean, and Steam!',
            backgroundImage: 'url-to-image-1.jpg'
        },
        {
            frontText: 'Laundry',
            backText: 'Our laundry service for men\'s button- down shirts ensures that each shirt is machine washed and machine pressed to perfection. On a hanger or in a box!',
            backgroundImage: 'url-to-image-1.jpg'
        },
        {
            frontText: 'Alterations',
            backText: 'Tailors, seemstresses, and dressmakers can alter clothes to fit an individual\'s unique body shape.',
            backgroundImage: 'url-to-image-1.jpg'
        },
        {
            frontText: 'Pressing',
            backText: 'Hand pressing services, steaming and ironing.',
            backgroundImage: 'url-to-image-1.jpg'
        },
        {
            frontText: 'Leather',
            backText: 'Revitalizes and brings back the original shine and vitality to your leather and suede items.',
            backgroundImage: 'url-to-image-1.jpg'
        },
        {
            frontText: 'Fur',
            backText: 'Restores the luxurious feel and appearance of your fur items.',
            backgroundImage: 'url-to-image-1.jpg'
        },
        {
            frontText: 'Bridal',
            backText: 'Protects and preserves your wedding dress, keeping its charm and splendor intact.',
            backgroundImage: 'url-to-image-1.jpg'
        },
        {
            frontText: 'Drapes',
            backText: 'Refreshes and cleans your drapes, restoring their original beauty.',
            backgroundImage: 'url-to-image-1.jpg'
        },
        {
            frontText: 'Table & Bedding',
            backText: 'We can process sheets, comforters, table cloths, napkins, and limited blankets in a special cycle that freshens your linens and revitalizes them.',
            backgroundImage: 'url-to-image-1.jpg'
        },
    ];

    return (
        <Container>
            {/* Header */}
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, textAlign: 'center' }}>
                <Typography variant="h4">
                    Sandbox
                </Typography>
            </Paper>

            {/* Test Components */}
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Grid2 container spacing={2} display={'flex'} justifyContent={'center'} alignContent={'center'}>
                    {tilesData.map((tile, index) => (
                        <Grid2 item key={index} xs={6} sm={4} md={3} lg={3} xl={3}>
                            <Tile
                                frontText={tile.frontText}
                                backText={tile.backText}
                                backgroundImage={tile.backgroundImage}
                                reverse={index % 2 === 1} // Apply reverse class to every other tile
                                moreInfo="Detailed information about this tile."
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </Paper>
        </Container>
    );
};

export default Sandbox;