// Dependencies
import React, { useState, useEffect } from 'react';

// Hooks
import useIsMobile from '../hooks/useIsMobile';

// MUI Components
import { Container, Paper, Typography, Button, Switch, FormControlLabel, Box, Toolbar, Tab, Tabs } from '@mui/material';

const Services = () => {
    const [isListView, setIsListView] = useState(false);
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const isMobile = useIsMobile();

    const handleViewChange = () => {
        setIsListView(!isListView);
    };

    const handleNext = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % serviceDetails.length);
    };

    const handlePrev = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex - 1 + serviceDetails.length) % serviceDetails.length);
    };

    const handleTabChange = (event, newValue) => {
        event.preventDefault();
        setCurrentServiceIndex(newValue);
    };

    useEffect(() => {
        setCurrentServiceIndex(null);
    }, []);

    const serviceDetails = [
        {
            title: 'Dry Cleaning',
            description: 'Dry cleaning is a process that utilizes organic solvents other than water to clean clothes, bedding, upholstery, and other types of fabrics. This method is particularly effective for delicate fabrics that might be damaged by water or traditional washing methods. The process involves pre-treating stains, immersing the items in a solvent, and then using specialized machines to remove the solvent and any dissolved dirt.',
        },
        {
            title: 'Laundry',
            description: 'Our laundry service for men\'s button- down shirts ensures that each shirt is meticulously cleaned and machine pressed to perfection.Shirts are machine washed using high - quality detergents that effectively remove stains and odors while preserving the fabric\'s integrity. After washing, each shirt is machine pressed to remove wrinkles, giving it a crisp and polished appearance. This service is ideal for maintaining the professional look of your dress shirts, ensuring they are always ready for any occasion.',
        },
        {
            title: 'Alterations',
            description: 'Alteration services involve tailoring clothes to fit an individual\'s unique body shape.This includes adjusting hems, taking in or letting out seams, and resizing garments.Additionally, alterations can fix rips, replace zippers, and reinforce stitching on almost all materials.This service ensures that your clothes fit perfectly and look their best.',
        },
        {
            title: 'Pressing',
            description: 'Pressing services remove wrinkles from garments by steaming and ironing. Steaming uses a blowing system to relax the fibers, while pressing involves rubbing an iron across the fabric to smooth out creases. This service is essential for maintaining the appearance of formal wear, business attire, and other garments that require a polished look.',
        },
        {
            title: 'Leather',
            description: 'Leather cleaning services use natural or synthetic substances to loosen and remove accumulated dirt and grime from leather-based materials. This process helps to maintain the leather\'s appearance and prolong its lifespan.Specialized treatments can also condition the leather, keeping it soft and supple, and protect it from future damage.',
        },
        {
            title: 'Fur',
            description: 'Fur cleaning and conditioning services enhance the longevity of your fur garments. The process makes the fur soft and supple, conditions the leather, and frees the fur of dust particles that rob it of its sheen. Regular cleaning and conditioning help maintain the fur\'s natural beauty and extend its lifespan.',
        },
        {
            title: 'Bridal',
            description: 'Bridal gown preservation involves a series of special cleaning and packaging techniques to ensure that wedding dress styles are retained over time. This service includes careful cleaning to remove stains, pressing to restore the gown\'s shape, and packaging in acid- free materials to prevent yellowing and fabric deterioration.This ensures that your wedding dress remains a cherished keepsake for years to come.',
        },
        {
            title: 'Drapes',
            description: 'Drapery cleaning services involve dry cleaning and pressing drapes and textiles used for decorative purposes. This process helps to bring out the original color and liven up rooms once again. Regular cleaning of drapes removes dust, allergens, and other particles, maintaining a fresh and vibrant appearance.',
        },
        {
            title: 'Table & Bedding',
            description: 'Table and bedding cleaning services include processing sheets and comforters in a special cycle that makes comforters look brand new and sheets crisp and clean. This service ensures that your bedding is hygienic, fresh, and comfortable, providing a better night\'s sleep.',
        },
    ];

    return (
        <Container>
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
                <Typography variant="h4">Services</Typography>
                <FormControlLabel
                    control={<Switch checked={isListView} onChange={handleViewChange} />}
                    label={isListView ? 'List View' : 'Panel View'}
                />
            </Box>

            {/* List View */}
            {isListView ? (
                serviceDetails.map((service, index) => (
                    // Display service details
                    <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <Typography variant="h5">{service.title}</Typography>
                        <Typography>{service.description}</Typography>
                    </Paper>
                ))
            ) : (
                // Panel View
                <Paper elevation={3} sx={{ padding: 4, marginBottom: 4, textAlign: 'center' }}>
                    {/* Toolbar of Tabs */}
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Tabs
                            value={currentServiceIndex}
                            onChange={handleTabChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="service tabs"
                        >
                            {serviceDetails.map((service, index) => (
                                <Tab key={index} label={service.title} />
                            ))}
                        </Tabs>
                    </Toolbar>

                    {/* Content */}
                    <Box sx={{ padding: 4, marginTop: 4, minHeight: isMobile ? '600px' : '350px' }}>
                        {currentServiceIndex === null ? (
                            // Initial state
                            <Typography variant={isMobile ? "h3" : "h4"} align="center">
                                Select a service above for more details
                            </Typography>
                        ) : (
                            // Display service details
                            <>
                                <Typography variant="h5">{serviceDetails[currentServiceIndex].title}</Typography>
                                <br />
                                <Typography>{serviceDetails[currentServiceIndex].description}</Typography>
                            </>
                        )}
                    </Box>

                    {/* Navgiation Buttons */}
                    <Box display="flex" justifyContent="space-between" sx={{ marginTop: 4 }}>
                        <Button variant="contained" onClick={handlePrev}>
                            &lt; Prev
                        </Button>
                        <Button variant="contained" onClick={handleNext}>
                            Next &gt;
                        </Button>
                    </Box>
                </Paper>
            )}
        </Container>
    );
};

export default Services;