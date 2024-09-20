// Dependencies
import React from 'react';

// Components
import Glink from './Glink';

const Gtooltip = ({ place }) => {
    return (
        <>
            {place.name}<br />
            <Glink location={place.formatted_address} /><br />
            <a href={`tel:${place.formatted_phone_number}`}>
                {place.formatted_phone_number}
            </a>
        </>
    );
};

export default Gtooltip;