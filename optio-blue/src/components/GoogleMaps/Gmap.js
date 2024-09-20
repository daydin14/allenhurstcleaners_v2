// Dependencies
import React, { useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Map Styles
const containerStyle = {
    width: '100%',
    height: '400px'
};

// Allenhurst Cleaners [latitude, longitude] Coordinates
const center = {
    lat: 40.23369598388672,
    lng: -74.00714111328125
};

// Libraries to be loaded with the Google Maps API
const libraries = ['places', 'maps', 'marker'];

const Gmap = ({ id }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });

    const onLoad = useCallback((map) => {
        console.log('Map loaded:', map);
    }, []);

    const onUnmount = useCallback((map) => {
        console.log('Map unmounted:', map);
    }, []);

    if (loadError) {
        return <div>Error loading Google Maps API</div>;
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        </GoogleMap>
    ) : (
        <>Loading...</>
    );
};

export default Gmap;