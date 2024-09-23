// Dependencies
import React from 'react';

// MUI Components
import { Typography, Link, Box } from '@mui/material';

// Components
import Glink from './Glink';

const Gtooltip = ({ place }) => {
    return (
        <Box>
            <Typography variant="h6">{place.name}</Typography>
            <Glink location={place.formatted_address} />
            <br />
            <Link href={`tel:${place.formatted_phone_number}`} variant="body1">
                {place.formatted_phone_number}
            </Link>
        </Box>
    );
};

export default Gtooltip;