// Gtag for Google Analytics
export const loadGoogleTag = () => {
    const googleTagId = process.env.REACT_APP_GOOGLE_TAG_ID;
    if (!googleTagId) {
        console.error('Google Tag ID is not defined in the environment variables');
        return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleTagId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', googleTagId);
};