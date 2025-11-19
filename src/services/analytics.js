import ReactGA from 'react-ga4';

export const initGA = () => {
    ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS);
};

export const trackPageView = (url) => {
    ReactGA.send({ hitType: 'pageview', page: url });
};

export const trackEvent = ({ action, category, label, value }) => {
    ReactGA.event({
        action,
        category,
        label,
        value,
    });
};
