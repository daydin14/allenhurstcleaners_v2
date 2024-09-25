// Dependencies
import React from 'react';

// MUI Components
import { Typography, Link, Box } from '@mui/material';

// Components
import Glink from './Glink';

const Gtooltip = ({ place }) => {
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            {place.photos && place.photos.length > 0 && (
                <img
                    src={place.photos[0].getUrl({ maxWidth: 400, maxHeight: 300 })}
                    alt={place.name}
                    style={{ width: '35%', height: 'auto', borderRadius: '8px' }}
                />
            )}
            <Box>
                <Typography variant="h6">{place.name}</Typography>
                <Glink location={place.formatted_address} />
                <br />
                <Link href={`tel:${place.formatted_phone_number}`} variant="body1">
                    {place.formatted_phone_number}
                </Link>
            </Box>
        </Box>
    );
};

export default Gtooltip;