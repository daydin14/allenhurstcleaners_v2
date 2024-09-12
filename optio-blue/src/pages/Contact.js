// Dependencies
import React from 'react';

const Contact = () => {
    return (
        <>
            <h4>Location:</h4>
            <a href="https://www.google.com/maps/place/Allenhurst+Cleaners/@40.2336282,-74.00932,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2260d488df47d:0x908175fc51c575c8!8m2!3d40.2336234!4d-74.0071391">
                530 Main St. Allenhurst, NJ 07711
            </a>
            <iframe
                id="google-maps"
                title="Allenhurst Cleaners"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEzsheyINm_Nq00YrzuUAXEL_6VkfSpS8&q=Allenhurst+Cleaners"
                frameborder=""
                allowfullscreen
            ></iframe>
            <h4>Leave us a Google Review!</h4>

            <h4>Phone#:</h4>
            <p>
                Call us @ &emsp; <a href="tel:7325314213">732-531-4213</a>
            </p>
            <p>Leave us message with your name and number.</p>

            <h4>Email:</h4>
            <p>
                <a href="mailto:allenhurstcleaners@gmail.com">
                    allenhurstcleaners@gmail.com
                </a>
            </p>
            <p>For in-depth inquiries and concerns, email us!</p>

            <button type="submit">
                <a href="mailto:allenhurstcleaners@gmail.com">Message Us Here!</a>
            </button>
            <br />
        </>
    );
};

export default Contact;