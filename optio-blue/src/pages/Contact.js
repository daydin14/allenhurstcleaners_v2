// Dependencies
import React, { useState, useRef, useCallback } from 'react';

// Components
import Gmap from '../components/GoogleMaps/Gmap';
import Gdetails from '../components/GoogleMaps/Gdetails';

const Contact = () => {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);

    const handleMapLoad = useCallback((mapInstance) => {
        mapRef.current = mapInstance;
        setMap(mapInstance);
    }, []);

    return (
        <>
            <h1>Contact Us</h1>
            <Gmap id="map-contact" onLoad={handleMapLoad} />
            {map && <Gdetails map={map} placeId={process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID} />}
            <h4>Leave us a Google Review!</h4>
        </>
    );
};

export default Contact;