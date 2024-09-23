// Dependencies
import React from 'react';

// MUI Components
import { Container, Typography, Paper } from '@mui/material';

const Services = () => {
    return (
        <>
            <Container>
                <Typography variant="h1" gutterBottom>
                    Services
                </Typography>

                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h5">Dry Cleaning</Typography>
                    <Typography>
                        Dry cleaning is a process that utilizes organic solvents other than
                        water to clean clothes, bedding, upholstery and other types of
                        fabrics.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h5">Laundry</Typography>
                    <Typography>Laundered clothes and linens. Machine wash and press.</Typography>
                </Paper>

                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h5">Alterations</Typography>
                    <Typography>
                        Tailored clothes, suited to an individual. Adjusting clothes to fit a
                        particular person's unique body shape. Fixed rips and reinforced
                        stitching to almost all materials.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h5">Pressing</Typography>
                    <Typography>
                        Removes wrinkles by steaming and ironing garments. Steaming is a
                        blowing system whereas pressing rubs an iron across.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h5">Leather</Typography>
                    <Typography>
                        Natural or synthetic substance that helps loosen and remove accumulated
                        dirt and grime on leather-based material.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h5">Fur</Typography>
                    <Typography>
                        Process that adds to the longevity of your fur, makes it soft and
                        supple, conditions the leather, frees the fur of dust particles that
                        rob your fur of its sheen.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h5">Bridal</Typography>
                    <Typography>
                        Wedding dress preservation where a series of special cleaning and
                        packaging techniques are used to ensure bridal gown styles are
                        retained over time.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h5">Drapes</Typography>
                    <Typography>
                        Drapery and textile for decorative purposes can be dry cleaned and
                        pressed to bring out the original color and liven rooms once again.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h5">Table & Bedding</Typography>
                    <Typography>
                        Sheets and comforters process in a special cycle that make comforters
                        look brand new and the sheets crisp and clean.
                    </Typography>
                </Paper>
            </Container >
        </>
    );
};

export default Services;