// Dependencies
import React, { useState, useEffect } from 'react';

// Hooks
import useGoogleMapsApi from '../hooks/useGoogleMapsApi';

// Components
import ErrorBoundary from '../components/GoogleMaps/ErrorBoundary';
import Gmap from '../components/GoogleMaps/Gmap';
import Gdetails from '../components/GoogleMaps/Gdetails';

const Contact = () => {
    const { googleMaps, error } = useGoogleMapsApi();
    const [apiLoaded, setApiLoaded] = useState(false);

    useEffect(() => {
        if (googleMaps) {
            setApiLoaded(true);
        }
    }, [googleMaps]);

    if (error) {
        return <div>Error loading Google Maps API: {error.message}</div>;
    }

    return (
        <>
            <h1>Contact Us</h1>
            <ErrorBoundary>
                {apiLoaded ? <><Gmap id="map-contact" /> <Gdetails /></> : <div>Loading Google Maps API...</div>}
            </ErrorBoundary>
            <h4>Leave us a Google Review!</h4>
        </>
    );
};

export default Contact;