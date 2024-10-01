// Dependencies
import React from 'react';

// MUI Components
import { Container, Paper, Typography, Grid2 } from '@mui/material';

// Components
import Tile from '../components/Tile';

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
                        <Grid2 container spacing={2} display={'flex'} justifyContent={'center'} alignContent={'center'}>
                            {tilesData.map((tile, index) => (
                                <Grid2 item key={index} xs={6} sm={4} md={3} lg={3} xl={3}>
                                    <Tile
                                        frontText={tile.frontText}
                                        backText={tile.backText}
                                        backgroundImage={tile.backgroundImage}
                                        reverse={index % 2 === 1} // Apply reverse class to every other tile
                                    />
                                </Grid2>
                            ))}
                        </Grid2>
                    </Paper>
                </>

            </Container>
        </>
    );
};

export default About;