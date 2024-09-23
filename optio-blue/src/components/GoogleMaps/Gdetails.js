// Dependencies
import React from 'react';

// MUI Components
import { CircularProgress, Typography, Link, Box } from '@mui/material';

// Hooks
import usePlaceDetails from '../../hooks/usePlaceDetails';

// Components
import Glink from './Glink';

const Gdetails = ({ map, placeId }) => {
    const { place, status, error } = usePlaceDetails(map, placeId);

    if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        return <Box display="flex" justifyContent="center" alignItems="center" height="100%"><CircularProgress /></Box>;
    }

    if (error) {
        return <Typography color="error">Error loading place details: {error}</Typography>;
    }

    return (
        <Box className='gdetails' p={2} border={1} borderColor="grey.300" borderRadius={2}>
            <Typography variant="h6">Address: <Glink location="Allenhurst Cleaners" /></Typography>
            <Typography variant="h4">{place.name}</Typography>
            <Typography variant="body1">Address: <Glink location={place.formatted_address} /></Typography>
            <Typography variant="body1">Rating: {place.rating}</Typography>
            <Typography variant="body1">Phone: <Link href={`tel:${place.formatted_phone_number}`}>{place.formatted_phone_number}</Link></Typography>
            <Typography variant="body1">Email: <Link href="mailto:allenhurstcleaners@gmail.com">allenhurstcleaners@gmail.com</Link></Typography>
        </Box>
    );
};

export default Gdetails;