// Dependencies
import React, { useState } from 'react';

// MUI Components
import { Box, Typography } from '@mui/material';

const ServiceSquare = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box
            className="service-square"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center', // Center content horizontally
                padding: 2,
                border: '1px solid',
                borderRadius: 1,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minHeight: '200px', // Set a minimum height
                '&:hover': {
                    boxShadow: 3,
                },
            }}
            onClick={handleToggle}
        >
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
                {title}
            </Typography>
            {isOpen && (
                <Typography variant="body2" sx={{ marginTop: 1, textAlign: 'center' }}>
                    {description}
                </Typography>
            )}
        </Box>
    );
};

export default ServiceSquare;