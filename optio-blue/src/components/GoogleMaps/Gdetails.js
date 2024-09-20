// Dependencies
import React from 'react';

// Hooks

// Components
import Glink from './Glink';

const Gdetails = () => {
    // const [placeDetails, setPlaceDetails] = useState(null);
    // const { googleMaps, error } = useGoogleMapsApi();

    // useEffect(() => {
    //     if (googleMaps) {
    //         const service = new googleMaps.places.PlacesService(document.createElement('div'));
    //         const request = {
    //             placeId: process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID,
    //             fields: ['name', 'formatted_address', 'place_id', 'geometry', 'rating', 'formatted_phone_number', 'opening_hours'],
    //         };

    //         service.getDetails(request, (place, status) => {
    //             if (status === googleMaps.places.PlacesServiceStatus.OK) {
    //                 setPlaceDetails(place);
    //             }
    //         });
    //     }
    // }, [googleMaps]);

    // if (error) {
    //     return <div>Error loading Google Maps API: {error.message}</div>;
    // }

    // if (!placeDetails) {
    //     return <div>Loading place details...</div>;
    // }

    return (
        <div className='gdetails'>
            <p>Address: <Glink location="Allenhurst Cleaners" /></p>
            {/* <h4>{placeDetails.name}</h4>
            <p>Address: <Glink location={placeDetails.formatted_address} /></p>
            <p>Rating: {placeDetails.rating}</p>
            <p>Phone: <a href={`tel:${placeDetails.formatted_phone_number}`}>{placeDetails.formatted_phone_number}</a></p>
            <p>Email: <a href="mailto:allenhurstcleaners@gmail.com">allenhurstcleaners@gmail.com</a></p> */}
        </div>
    );
};

export default Gdetails;