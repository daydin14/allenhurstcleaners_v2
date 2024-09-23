import { useState, useEffect } from 'react';

const usePlaceDetails = (map, placeId) => {
    const [place, setPlace] = useState(null);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!map || !placeId) return;

        const service = new window.google.maps.places.PlacesService(map);

        service.getDetails({ placeId }, (result, serviceStatus) => {
            if (serviceStatus === window.google.maps.places.PlacesServiceStatus.OK) {
                setPlace(result);
                setStatus(serviceStatus);
            } else {
                setError(`Error fetching place details: ${serviceStatus}`);
                setStatus(serviceStatus);
            }
        });
    }, [map, placeId]);

    return { place, status, error };
};

export default usePlaceDetails;