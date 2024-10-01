// Dependencies
import React, { useState, useEffect, useRef } from 'react';

// Hooks
import useIsMobile from '../hooks/useIsMobile';

// MUI Components
import { Box, Typography, Modal, Paper } from '@mui/material';

// Utils
import { logEvent } from '../utils/Ganalytics';

const Tile = ({ frontText, backText, backgroundImage, reverse, moreInfo }) => {
    const [open, setOpen] = useState(false);
    const isMobile = useIsMobile();
    const tileRef = useRef(null);

    const handleOpen = () => {
        setOpen(true);
        logEvent('Tile', 'Open Modal', frontText);
    };

    const handleClose = () => {
        setOpen(false);
        logEvent('Tile', 'Close Modal', frontText);
    };

    useEffect(() => {
        if (isMobile) {
            const handleScroll = () => {
                const tile = tileRef.current;
                if (tile) {
                    const rectangle = tile.getBoundingClientRect();
                    const threeFourthsPoint = window.innerHeight - window.innerHeight / 4;
                    if (rectangle.top < threeFourthsPoint && rectangle.bottom >= threeFourthsPoint) {
                        tile.classList.add('scroll-animate');
                        tile.classList.remove('scroll-animate-reverse');
                    } else {
                        tile.classList.remove('scroll-animate');
                        tile.classList.add('scroll-animate-reverse');
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);

            // Cleanup event listener on component unmount
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isMobile]);

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

    const service = serviceDetails.find(service => service.title === frontText);

    return (
        <>
            <Box ref={tileRef} className={`tile ${reverse ? 'reverse' : ''}`} onClick={handleOpen}>
                <Box className="tile-inner">
                    <Box className="tile-front" style={{ backgroundImage: `url(${backgroundImage})` }}>
                        <Typography variant="h5" color="inherit">
                            {frontText}
                        </Typography>
                    </Box>
                    <Box className="tile-back">
                        <Typography variant="body1">
                            {backText}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Modal open={open} onClose={handleClose}>
                <Paper sx={{
                    padding: isMobile ? 1 : 2,
                    margin: 'auto',
                    maxWidth: isMobile ? '100%' : 500,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    position: 'absolute',
                    overflowY: 'auto',
                    maxHeight: '100vh'
                }}>
                    <Typography variant="h4" gutterBottom>
                        {frontText}
                    </Typography>
                    <Typography variant="body1">
                        {service ? service.description : 'No additional information available.'}
                    </Typography>
                </Paper>
            </Modal>
        </>
    );
};

export default Tile;