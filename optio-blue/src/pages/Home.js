// Dependencies
import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to our local business website!</p>
            <iframe
                id="google-maps"
                title="Allenhurst Cleaners"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEzsheyINm_Nq00YrzuUAXEL_6VkfSpS8&q=Allenhurst+Cleaners"
                frameborder=""
                allowfullscreen
            ></iframe>
        </div>
    );
};

export default Home;