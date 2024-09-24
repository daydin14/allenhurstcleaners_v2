// Dependencies
import React from 'react';

// MUI Components
import { Container, Paper, Typography, Grid, Box } from '@mui/material';

// Components
import ServiceSquare from '../components/ServiceSquare';

const serviceSquareData = [
    {
        title: 'Dry Cleaning',
        description: 'Dry cleaning is a process that utilizes organic solvents other than water to clean clothes, bedding, upholstery and other types of fabrics.',
    },
    {
        title: 'Laundry',
        description: 'Laundered clothes and linens. Machine wash and press.',
    },
    {
        title: 'Alterations',
        description: 'Tailored clothes, suited to an individual. Adjusting clothes to fit a particular person\'s unique body shape. Fixed rips and reinforced stitching to almost all materials.',
    },
    {
        title: 'Pressing',
        description: 'Removes wrinkles by steaming and ironing garments. Steaming is a blowing system whereas pressing rubs an iron across.',
    },
    {
        title: 'Leather',
        description: 'Natural or synthetic substance that helps loosen and remove accumulated dirt and grime on leather-based material.',
    },
    {
        title: 'Fur',
        description: 'Process that adds to the longevity of your fur, makes it soft and supple, conditions the leather, frees the fur of dust particles that rob your fur of its sheen.',
    },
    {
        title: 'Bridal',
        description: 'Wedding dress preservation where a series of special cleaning and packaging techniques are used to ensure bridal gown styles are retained over time.',
    },
    {
        title: 'Drapes',
        description: 'Drapery and textile for decorative purposes can be dry cleaned and pressed to bring out the original color and liven rooms once again.',
    },
    {
        title: 'Table & Bedding',
        description: 'Sheets and comforters process in a special cycle that make comforters look brand new and the sheets crisp and clean.',
    },
];

const About = () => {
    return (
        <>
            <Container>
                <Typography variant="h1" gutterBottom>
                    About Us!
                </Typography>

                {/* Who We Are Section */}
                <>
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <Typography variant="h4" gutterBottom>
                            Who We Are:
                        </Typography>
                    </Paper>
                    <Typography paragraph>
                        Located in Allenhurst NJ, Allenhurst Dry Cleaners is a store front for
                        more than basic dry cleaning. Throughout the 40+ years of operation,
                        we have grown and developed into a multi-service production plant.
                        Today, we use all organic solvents and provide a deep cleaning to
                        liven old and new fabrics, textiles, and clothing.
                    </Typography>
                </>

                {/* What We Do: Section */}
                <>
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <Typography variant="h4" gutterBottom>
                            What We Do:
                        </Typography>
                    </Paper>
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
                </>

                {/* What Can We Provide: Section */}
                <>
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <Typography variant="h4" gutterBottom>
                            What Can We Provide:
                        </Typography>
                    </Paper>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {serviceSquareData.map((service, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <ServiceSquare title={service.title} description={service.description} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </>

            </Container>
        </>
    );
};

export default About;