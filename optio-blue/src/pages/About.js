// Dependencies
import React from 'react';

// Components
import ServiceSquare from '../components/ServiceSquare/ServiceSquare';

const About = () => {
    return (
        <>
            <h1>About Us!</h1>

            <h4>Who We Are:</h4>
            Located in Allenhurst NJ, Allenhurst Dry Cleaners is a store front for
            more than basic dry cleaning. Throughout the 40+ years of operation,
            we have grown and developed into a multi-service production plant.
            Today, we use all organic solevents and provide a deep cleaning to
            liven old and new fabrics, text-tiles, and clothing.
            <br />

            <h4>What We Do:</h4>
            We offer laundry services for men's button down shirts only;
            outsourced with a typical turn around rate to be two-three days. These
            men shirts are machine washed and machine pressed, which differs from
            dry cleaning using our organic solevant followed by hand pressing.
            <br />

            In addition, we provide tailoring services altering a wide range of
            clothes and text-tile materials. Some alterations include heming,
            letting out or lengthening, side seams, sleeves, tapering, waist,
            cuffs or removal of cuffs, bra cups and more.
            <br />

            Every order is packaged in travel safe blue plastic wrap to protect
            the clothes from the weather when leaving the store as well as dust
            build ups and potential moths in closets. The bags also keep the
            pressing of clothes in good condition for traveling. If you're looking
            to clear clutter in your closet, we do recycle hangers as well.
            <br />

            Ask in store about our Leather, Fur, and Bridal services for the most
            up to date details on cleaning them, and what the turn around rate my
            look like.
            <br />

            <h4>What Can We Provide:</h4>
            <div className="service-grid">
                <ServiceSquare title="Dry Cleaning" />
                <ServiceSquare title="Laundry" />
                <ServiceSquare title="Alterations" />
                <ServiceSquare title="Pressing" />
                <ServiceSquare title="Leather" />
                <ServiceSquare title="Fur" />
                <ServiceSquare title="Bridal" />
                <ServiceSquare title="Drapes" />
                <ServiceSquare title="Table & Bedding" />
            </div>
        </>
    );
};

export default About;