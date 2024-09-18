// utils/Gmap.js
import React, { useEffect, useRef, useState } from 'react';

// Utility function to load Google Maps API
const loadGoogleMapsApi = () => {
    return new Promise((resolve, reject) => {
        if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
            resolve(window.google.maps);
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            resolve(window.google.maps);
        };
        script.onerror = (error) => {
            reject(error);
        };

        document.head.appendChild(script);
    });
};

// Google Maps component
const Gmap = () => {
    const mapRef = useRef(null);
    const [placeDetails, setPlaceDetails] = useState(null);

    useEffect(() => {
        loadGoogleMapsApi()
            .then((googleMaps) => {
                const map = new googleMaps.Map(mapRef.current, {
                    center: { lat: 40.23369598388672, lng: -74.00714111328125 },
                    zoom: 14,
                    mapId: process.env.REACT_APP_GOOGLE_MAPS_MAP_ID,
                });

                const service = new googleMaps.places.PlacesService(map);
                const request = {
                    placeId: process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID,
                    fields: ['name', 'formatted_address', 'place_id', 'geometry', 'rating', 'formatted_phone_number'],
                };

                service.getDetails(request, (place, status) => {
                    if (status === googleMaps.places.PlacesServiceStatus.OK) {
                        setPlaceDetails(place);

                        // Extract latitude and longitude from the place details
                        const location = place.geometry.location;
                        const lat = location.lat();
                        const lng = location.lng();

                        // Update the map center and marker position
                        map.setCenter({ lat, lng });
                        new googleMaps.Marker({
                            position: { lat, lng },
                            map,
                            title: place.name,
                        });
                    }
                });
            })
            .catch((error) => {
                console.error('Error loading Google Maps API:', error);
            });
    }, []);

    return (
        <>
            <div className='gmap'>
                {placeDetails && (
                    <div className='gmap-details'>
                        <h4>{placeDetails.name}</h4>
                        <p>{placeDetails.formatted_address}</p>
                        <p>Rating: {placeDetails.rating}</p>
                        <p>Phone: {placeDetails.formatted_phone_number}</p>
                    </div>
                )}
                <div ref={mapRef} style={{ height: '400px', width: '100%' }} />
            </div>
        </>
    );
};

export default Gmap;