// Dependencies
import React, { useEffect, useRef, useState } from 'react';

// Hooks
import useGoogleMapsApi from '../../hooks/useGoogleMapsApi';

// Google Maps component
const Gmap = ({ id }) => {
    const mapRef = useRef(null);
    const { googleMaps, error } = useGoogleMapsApi();
    const [mapLoaded, setMapLoaded] = useState(false);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (googleMaps && mapRef.current && !mapInstanceRef.current) {
            console.log('Creating Gmap Instance');
            if (typeof googleMaps.Map === 'function') {
                const map = new googleMaps.Map(mapRef.current, {
                    center: { lat: 40.23369598388672, lng: -74.00714111328125 },
                    zoom: 14,
                    mapId: process.env.REACT_APP_GOOGLE_MAPS_MAP_ID,
                });
                console.log('Mounting Gmap Instance to DOM element reference');
                mapInstanceRef.current = map;
                setMapLoaded(true);
                console.log('Gmap mounted');
            } else {
                console.error('googleMaps.Map is not a constructor');
                console.log('googleMaps:', googleMaps);
            }
        }
        return () => {
            console.log('Component CleanUp Process... Unmounting Gmap Instance');
            if (mapInstanceRef.current) {
                console.log('Clearing Event Listeners');
                window.google.maps.event.clearInstanceListeners(mapInstanceRef.current);
                mapInstanceRef.current = null;
                console.log('Gmap unmounted');
            }
        };
    }, [googleMaps]);

    if (error) {
        return <div>Error loading Google Maps: {error.message}</div>;
    }

    return (
        <div id={id} ref={mapRef} className='gmap' style={{ height: '400px', width: '100%' }}>
            {!mapLoaded && <div>Loading map...</div>}
        </div>
    );
};

export default Gmap;