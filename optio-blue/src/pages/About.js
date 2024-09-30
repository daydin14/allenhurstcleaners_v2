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
                {/* Who We Are Section */}
                <>
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <Typography variant="h4" align='center'>
                            Who We Are:
                        </Typography>
                    </Paper>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        Located in the heart of Allenhurst, NJ, Allenhurst Dry Cleaners has been a cornerstone of the community for over 40 years. What began as a simple storefront for basic dry cleaning has evolved into a comprehensive multi-service production plant. Our commitment to excellence is reflected in our use of all organic solvents, ensuring a deep and thorough cleaning that revitalizes both old and new fabrics, textiles, and clothing. We pride ourselves on our rich history and our dedication to providing top-notch services to our valued customers.
                    </Typography>
                </>

                {/* What We Do: Section */}
                <>
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <Typography variant="h4" align='center'>
                            What We Do:
                        </Typography>
                    </Paper>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        At Allenhurst Dry Cleaners, we specialize in a variety of services tailored to meet your needs:
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        Laundry Services for Men’s Button-Down Shirts: We offer specialized laundry services exclusively for men’s button-down shirts. Each shirt is machine washed using high-quality detergents that effectively remove stains and odors while preserving the fabric’s integrity. After washing, the shirts are machine pressed to achieve a crisp and polished appearance. Our typical turnaround time for this service is two to three days, ensuring your shirts are ready when you need them.
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        Tailoring Services: Our expert tailoring services cater to a wide range of clothing and textile materials. Whether you need hemming, letting out or lengthening, adjusting side seams, sleeves, tapering, waist adjustments, cuffs or removal of cuffs, or even adding bra cups, our skilled tailors can handle it all. We ensure that your garments fit perfectly and look their best.
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        Packaging and Protection: Every order is meticulously packaged in travel-safe blue plastic wrap to protect your clothes from the elements when leaving the store. This packaging also guards against dust buildup and potential moth damage in closets, keeping your garments in pristine condition. Additionally, the bags help maintain the pressing of clothes during travel. For those looking to declutter, we offer hanger recycling services as well.
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        Specialty Services: We also provide specialized cleaning services for leather, fur, and bridal garments. Our leather cleaning process uses natural or synthetic substances to remove dirt and grime, while our fur cleaning service conditions the leather and frees the fur of dust particles, enhancing its longevity and sheen. Our bridal gown preservation service employs special cleaning and packaging techniques to ensure your wedding dress remains a cherished keepsake. For the most up-to-date details on these services and their turnaround times, please inquire in-store.
                    </Typography>
                </>

                {/* What Can We Provide: Section */}
                <>
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <Typography variant="h4" align='center'>
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