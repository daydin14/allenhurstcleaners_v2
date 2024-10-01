// Dependencies
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// MUI Components
import { Box, CircularProgress, Typography } from '@mui/material';

// Hooks
import usePlaceDetails from '../../hooks/usePlaceDetails';

// Components
import Gtooltip from './Gtooltip';

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

// Map ID
const mapId = process.env.REACT_APP_GOOGLE_MAPS_MAP_ID;

const Gmap = ({ id, onLoad }) => {
    // Map reference and state
    const mapRef = useRef(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const markerRef = useRef(null);
    const infoWindowRef = useRef(null);
    const rootRef = useRef(null);

    // Load Google Maps API
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: libraries,
        mapIds: [mapId],
    });

    // Use the custom hook to get place details
    const { place } = usePlaceDetails(mapRef.current, process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID);

    // Load the map
    const handleMapLoad = useCallback((map) => {
        mapRef.current = map;
        setMapLoaded(true);
        console.log('Map loaded:', map);

        if (onLoad) {
            onLoad(map);
        }
    }, [onLoad]);

    // Add marker when place details are available
    useEffect(() => {
        if (mapRef.current && place) {
            console.log('Adding marker with place details:', place);

            if (window.google && window.google.maps && window.google.maps.marker) {
                const { AdvancedMarkerElement } = window.google.maps.marker.AdvancedMarkerElement;
                try {
                    if (AdvancedMarkerElement) {
                        const marker = new AdvancedMarkerElement({
                            map: mapRef.current,
                            position: center,
                            title: 'Allenhurst Cleaners',
                            mapId,
                        });
                        console.log('AdvancedMarker added:', marker);
                    } else {
                        console.warn('AdvancedMarkerElement is not available');
                        const marker = new window.google.maps.Marker({
                            position: center,
                            map: mapRef.current,
                            draggable: true,
                            animation: window.google.maps.Animation.DROP,
                            title: place.name,
                            icon: {
                                url: `${process.env.PUBLIC_URL}/favicon.ico`,
                                labelOrigin: new window.google.maps.Point(15, 65), // Adjust label position
                            },
                            label: {
                                text: place.name,
                                color: 'red',
                                fontSize: '16px',
                                fontWeight: 'bold',
                            },
                        });
                        console.log('Deprecated Marker added:', marker);

                        // Store the marker reference
                        markerRef.current = marker;
                        // Store the original position
                        const originalPosition = marker.getPosition();
                        // Create an info window tooltip for the marker
                        const infoWindow = new window.google.maps.InfoWindow();
                        infoWindowRef.current = infoWindow;

                        // Add a click event listener to the marker
                        marker.addListener('click', () => {
                            if (!isLoaded) return; // Ensure the component is still mounted
                            // Check if the marker is at the original position
                            if (marker.getPosition().equals(originalPosition) && !infoWindow.getMap()) {
                                const infoWindowDiv = document.createElement('div');
                                infoWindowDiv.className = 'info-window';
                                const root = createRoot(infoWindowDiv);
                                rootRef.current = root;
                                root.render(<Gtooltip place={place} />);
                                infoWindow.setContent(infoWindowDiv);
                                infoWindow.open(mapRef.current, marker);
                            } else {
                                infoWindow.close();
                                // Toggle bounce animation
                                marker.setAnimation(window.google.maps.Animation.BOUNCE);
                                setTimeout(() => {
                                    if (!isLoaded) return; // Ensure the component is still mounted
                                    marker.setAnimation(null);  // Stop bounce animation after duration
                                    marker.setPosition(originalPosition); // Reset to original position after bounce animation
                                }, 1400); // Bounce animation duration in milliseconds
                            }
                        });
                    }
                } catch (error) {
                    console.error('Error adding marker:', error);
                }
            } else {
                console.error('Google Maps API is not fully loaded');
            }
        } else {
            if (!mapRef.current) {
                console.log('Map reference is not available yet');
            }
            if (!place) {
                console.log('Place details are not available yet');
            }
        }
    }, [place, isLoaded]);

    // CleanUp & Unmount the map
    const onUnmount = useCallback((map) => {
        mapRef.current = null;
        setMapLoaded(false);
        // console.log('Map unmounted:', map);
    }, []);

    // Check if map is loaded and mapRef is set
    useEffect(() => {
        // console.log('useEffect called, isLoaded:', isLoaded, 'mapLoaded:', mapLoaded);
        if (isLoaded && mapLoaded && mapRef.current) {
            console.log('Map is loaded and mapRef is set');
        } else {
            console.log('Map is not loaded or mapRef is not set');
        }
    }, [isLoaded, mapLoaded]);

    if (loadError) {
        return <Typography color="error">Error loading Google Maps API</Typography>;
    }

    return isLoaded ? (
        <Box position="relative">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
                onLoad={handleMapLoad}
                onUnmount={onUnmount}
                mapId={mapId}
            />
        </Box>
    ) : (
        <Box display="flex" justifyContent="center" alignItems="center" height="400px">
            <CircularProgress />
        </Box>
    );
};

export default Gmap;