// Dependencies
import React, { useCallback, useEffect, useRef, useState } from 'react';
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

    const mapRef = useRef(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    const onLoad = useCallback((map) => {
        mapRef.current = map;
        setMapLoaded(true);
        console.log('Map loaded:', map);

        // Add marker directly in onLoad
        const { AdvancedMarkerElement } = window.google.maps.Marker;

        if (AdvancedMarkerElement) {
            console.log('AdvancedMarkerElement is available');
            const marker = new AdvancedMarkerElement({
                map: mapRef.current,
                position: center,
                title: 'Allenhurst Cleaners'
            });

            console.log('AdvancedMarker added:', marker);
        } else {
            console.error('AdvancedMarkerElement is not available');

            // Fallback marker
            const fallbackMarker = new window.google.maps.Marker({
                position: center,
                map: mapRef.current,
                title: 'Fallback Marker'
            });

            console.log('Fallback Marker added:', fallbackMarker);
        }
    }, []);

    const onUnmount = useCallback((map) => {
        mapRef.current = null;
        setMapLoaded(false);
        console.log('Map unmounted:', map);
    }, []);

    useEffect(() => {
        console.log('useEffect called, isLoaded:', isLoaded, 'mapLoaded:', mapLoaded);
        if (isLoaded && mapLoaded && mapRef.current) {
            console.log('Map is loaded and mapRef is set');
        } else {
            console.log('Map is not loaded or mapRef is not set');
        }
    }, [isLoaded, mapLoaded]);

    if (loadError) {
        return <div>Error loading Google Maps API</div>;
    }

    return isLoaded ? (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
            </GoogleMap>
        </>
    ) : (
        <div>Loading...</div>
    );
};

export default Gmap;