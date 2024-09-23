// Dependencies
import React from 'react';

// MUI Components
import { Container, Typography, Grid, Box } from '@mui/material';

// Components
import ServiceSquare from '../components/ServiceSquare/ServiceSquare';

const About = () => {
    return (
        <>
            <Container>
                <Typography variant="h1" gutterBottom>
                    About Us!
                </Typography>

                <Typography variant="h4" gutterBottom>
                    Who We Are:
                </Typography>
                <Typography paragraph>
                    Located in Allenhurst NJ, Allenhurst Dry Cleaners is a store front for
                    more than basic dry cleaning. Throughout the 40+ years of operation,
                    we have grown and developed into a multi-service production plant.
                    Today, we use all organic solvents and provide a deep cleaning to
                    liven old and new fabrics, textiles, and clothing.
                </Typography>

                <Typography variant="h4" gutterBottom>
                    What We Do:
                </Typography>
                <Typography paragraph>
                    We offer laundry services for men's button down shirts only;
                    outsourced with a typical turn around rate to be two-three days. These
                    men shirts are machine washed and machine pressed, which differs from
                    dry cleaning using our organic solvent followed by hand pressing.
                </Typography>

                <Typography paragraph>
                    In addition, we provide tailoring services altering a wide range of
                    clothes and textile materials. Some alterations include hemming,
                    letting out or lengthening, side seams, sleeves, tapering, waist,
                    cuffs or removal of cuffs, bra cups and more.
                </Typography>

                <Typography paragraph>
                    Every order is packaged in travel safe blue plastic wrap to protect
                    the clothes from the weather when leaving the store as well as dust
                    build ups and potential moths in closets. The bags also keep the
                    pressing of clothes in good condition for traveling. If you're looking
                    to clear clutter in your closet, we do recycle hangers as well.
                </Typography>

                <Typography paragraph>
                    Ask in store about our Leather, Fur, and Bridal services for the most
                    up to date details on cleaning them, and what the turn around rate may
                    look like.
                </Typography>

                <Typography variant="h4" gutterBottom>
                    What Can We Provide:
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceSquare title="Dry Cleaning" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceSquare title="Laundry" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceSquare title="Alterations" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceSquare title="Pressing" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceSquare title="Leather" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceSquare title="Fur" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceSquare title="Bridal" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceSquare title="Drapes" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceSquare title="Table & Bedding" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default About;