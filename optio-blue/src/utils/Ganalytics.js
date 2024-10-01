// Dependencies
import ReactGA from 'react-ga4';

export const initGA = () => {
    const googleTagId = process.env.REACT_APP_GOOGLE_TAG_ID;
    if (!googleTagId) {
        console.error('Google Tag ID is not defined in the environment variables');
        return;
    }
    ReactGA.initialize(googleTagId);
};

export const logPageView = () => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};

export const logEvent = (category, action, label) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    });
};

export const logTiming = (category, variable, value, label) => {
    ReactGA.timing({
        category: category,
        variable: variable,
        value: value, // in milliseconds
        label: label,
    });
};

// Assign object to a variable before exporting as module default
const Ganalytics = {
    initGA,
    logPageView,
    logEvent,
    logTiming,
};

export default Ganalytics;