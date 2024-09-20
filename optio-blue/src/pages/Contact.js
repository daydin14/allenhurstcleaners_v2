// Dependencies
import React from 'react';

// Hooks

// Components
import Gmap from '../components/GoogleMaps/Gmap';
import Gdetails from '../components/GoogleMaps/Gdetails';

const Contact = () => {

    return (
        <>
            <h1>Contact Us</h1>
            <Gmap id="map-contact" />
            <Gdetails />
            <h4>Leave us a Google Review!</h4>
        </>
    );
};

export default Contact;