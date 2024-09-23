// Dependencies
import React from 'react';

// Hooks
import usePlaceDetails from '../../hooks/usePlaceDetails';

// Components
import Glink from './Glink';

const Gdetails = ({ map, placeId }) => {
    const { place, status, error } = usePlaceDetails(map, placeId);

    if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        return <div>Loading place details...</div>;
    }

    if (error) {
        return <div>Error loading place details: {error}</div>;
    }

    return (
        <div className='gdetails'>
            <p>Address: <Glink location="Allenhurst Cleaners" /></p>
            <h4>{place.name}</h4>
            <p>Address: <Glink location={place.formatted_address} /></p>
            <p>Rating: {place.rating}</p>
            <p>Phone: <a href={`tel:${place.formatted_phone_number}`}>{place.formatted_phone_number}</a></p>
            <p>Email: <a href="mailto:allenhurstcleaners@gmail.com">allenhurstcleaners@gmail.com</a></p>
        </div>
    );
};

export default Gdetails;