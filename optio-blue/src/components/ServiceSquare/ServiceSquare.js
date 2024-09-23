// Dependencies
import React from 'react';

// MUI Components
import { Box, Typography } from '@mui/material';

const ServiceSquare = ({ title }) => {
    return (
        <Box className="service-square" sx={{ padding: 2, border: '1px solid', borderRadius: 1 }}>
            <Typography variant="h4">{title}</Typography>
        </Box>
    );
};

export default ServiceSquare;