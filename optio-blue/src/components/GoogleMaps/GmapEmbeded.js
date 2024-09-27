import React from 'react';

const GmapEmbeded = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const placeId = 'Allenhurst+Cleaners';

    return (
        <>
            <iframe
                width="600"
                height="450"
                title='Allenhurst Cleaners'
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${placeId}`}
                frameborder=""
                allowFullScreen
            >
            </iframe>
        </>
    );
};

export default GmapEmbeded;