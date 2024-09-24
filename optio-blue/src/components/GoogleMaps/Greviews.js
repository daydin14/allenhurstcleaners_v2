// Dependencies
import React from 'react';

// MUI Components
import { CircularProgress, Typography, Box, useMediaQuery, useTheme, Card, CardContent, CardHeader, Avatar } from '@mui/material';

// Hooks
import usePlaceDetails from '../../hooks/usePlaceDetails';

const Greviews = ({ map, placeId }) => {
    const { place, status, error } = usePlaceDetails(map, placeId);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        return <Box display="flex" justifyContent="center" alignItems="center" height="100%"><CircularProgress /></Box>;
    }

    if (error) {
        return <Typography color="error">Error loading place details: {error}</Typography>;
    }

    return (
        <>
            {place.rating && (
                <Typography variant="h6" gutterBottom>Rating: {place.rating} ({place.user_ratings_total} reviews)</Typography>
            )}
            {place.reviews && place.reviews.length > 0 && (
                <Box>
                    {place.reviews.slice(0, 15).map((review, index) => (
                        <Card key={index} variant="outlined" sx={{ marginBottom: 2 }}>
                            <Box display="flex" flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'} alignItems="center">
                                <CardHeader
                                    avatar={<Avatar src={review.profile_photo_url} alt={review.author_name} />}
                                    title={review.author_name}
                                    subheader={new Date(review.time * 1000).toLocaleDateString()}
                                    sx={{ flex: '0 0 auto' }}
                                />
                            </Box>
                            <CardContent sx={{ width: '100%' }}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {review.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            )}
        </>
    );
};

export default Greviews;

/*
    // Dependencies
    import React from 'react';

    // MUI Components
    import { CircularProgress, Typography, Box, useMediaQuery, useTheme, Card, CardContent, CardHeader, Avatar } from '@mui/material';

    // Hooks
    import usePlaceDetails from '../../hooks/usePlaceDetails';

    const Greviews = ({ map, placeId }) => {
        const { place, status, error } = usePlaceDetails(map, placeId);
        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

        if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
            return <Box display="flex" justifyContent="center" alignItems="center" height="100%"><CircularProgress /></Box>;
        }

        if (error) {
            return <Typography color="error">Error loading place details: {error}</Typography>;
        }

        return (
            <>
                {place.rating && (
                    <Typography variant="h6" gutterBottom>Rating: {place.rating} ({place.user_ratings_total} reviews)</Typography>
                )}
                {place.reviews && place.reviews.length > 0 && (
                    <Box>
                        {place.reviews.slice(0, 15).map((review, index) => (
                            <Card key={index} variant="outlined" sx={{ marginBottom: 2 }}>
                                <Box display="flex" flexDirection="column" alignItems={index % 2 === 0 ? 'flex-start' : 'flex-end'}>
                                    <CardHeader
                                        avatar={<Avatar src={review.profile_photo_url} alt={review.author_name} />}
                                        title={review.author_name}
                                        subheader={new Date(review.time * 1000).toLocaleDateString()}
                                        sx={{ width: '100%' }}
                                    />
                                    <CardContent sx={{ width: '100%' }}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {review.text}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        ))}
                    </Box>
                )}
            </>
        );
    };

    export default Greviews;
*/