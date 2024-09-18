// Dependencies
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// Import images
import images from '../utils/ImportImages';
import Gmap from '../utils/Gmap';

const Home = () => {
    return (
        <>
            <h1>Welcome to Allenhurst Cleaners</h1>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                {Object.keys(images).map((key, index) => (
                    <div key={index}>
                        <img className='carousel-image' src={images[key]} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
            <br />
            <Gmap />
            <p>Hours of Operation:</p>
            <p>
                Monday-Friday, 8:00AM - 4:00PM Saturday, 8:00AM - 3:00PM
            </p>
            <p>
                Only accepting alterations Monday-Saturday, 10:00AM - 3:00PM <br />
                <small>
                    <i>Subject to change dependent on the four seasons</i>
                </small>
            </p>
            <p>Minimum $10 credit/debit card purchase</p>
            <p>
                Acceptable payments include: Amex, Apple Pay, Cash, Checks, Credit and
                Debit Cards
            </p>
        </>
    );
};

export default Home;