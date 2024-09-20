import { useState, useEffect } from 'react';

let googleMapsPromise = null;
let googleMapsInstance = null;

const useGoogleMapsApi = (callback) => {
    const [googleMaps, setGoogleMaps] = useState(googleMapsInstance);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!googleMapsPromise) {
            console.log('Creating Google Maps API promise');
            googleMapsPromise = new Promise((resolve, reject) => {
                // Check if the Google Maps API is already loaded
                if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
                    console.log('Google Maps API already loaded');
                    resolve(window.google.maps);
                    return;
                }

                // Check if the Google Maps API script already exists
                const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
                if (existingScript) {
                    console.log('Using existing Google Maps API script');
                    existingScript.onload = () => {
                        if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
                            resolve(window.google.maps);
                        } else {
                            reject(new Error('Google Maps API failed to load'));
                        }
                    };
                    existingScript.onerror = (error) => reject(error);
                    return;
                }

                // Create the Google Maps API script
                console.log('Creating Google Maps API script');
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places,maps,marker&v=weekly&loading=async`;
                console.log('Google Maps API script created');

                // Set the Google Maps API script attributes
                console.log('Setting Google Maps API script attributes');
                script.async = true;
                script.defer = true;
                script.onload = () => {
                    console.log('Google Maps API script loaded');
                    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
                        resolve(window.google.maps);
                    } else {
                        reject(new Error('Google Maps API failed to load'));
                    }
                };
                script.onerror = (error) => {
                    console.error('Error loading Google Maps API script:', error);
                    reject(error);
                };
                console.log('Google Maps API script attributes set');

                // Append the Google Maps API script to the document head
                console.log('Appending Google Maps API script to document head');
                document.head.appendChild(script);
                console.log('Google Maps API script appended');
            });
        }

        googleMapsPromise
            .then((maps) => {
                console.log('Google Maps API promise resolved');
                googleMapsInstance = maps;
                setGoogleMaps(maps);
                if (callback) {
                    callback(maps); // Invoke the callback with the loaded maps instance
                }
            })
            .catch((err) => {
                console.error('Google Maps API promise rejected:', err);
                setError(err);
            });

        // Clean up
        return () => {
            googleMapsPromise = null; // Reset on unmount
            googleMapsInstance = null; // Reset instance on unmount
        };
    }, [callback]);

    return { googleMaps, error };
};

export default useGoogleMapsApi;