// Dependencies
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

// Styles
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// Hooks

// Components
import Gmap from '../components/GoogleMaps/Gmap';

// Utils
import images from '../utils/ImportImages';

const Home = () => {

    return (
        <>
            <Carousel showThumbs={false} emulateTouch={true} autoPlay infiniteLoop>
                {Object.keys(images).map((key, index) => (
                    <div key={index}>
                        <img className='carousel-image' src={images[key]} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
            <h1>530 Main Street</h1>
            <Gmap id="map-home" />
            <p>Hours of Operation:</p>
            <p>Monday-Friday, 8:00AM - 4:00PM Saturday, 8:00AM - 3:00PM</p>
            <p>
                Only accepting alterations Monday-Saturday, 10:00AM - 3:00PM
                <br />
                <small>
                    <i>Subject to change dependent on the four seasons</i>
                </small>
            </p>
            <p>Minimum $10 credit/debit card purchase</p>
            <p>Acceptable payments include: Amex, Apple Pay, Cash, Checks, Credit and Debit Cards</p>
        </>
    );
};

export default Home;