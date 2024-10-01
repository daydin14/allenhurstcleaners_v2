// Dependencies
import { useState, useEffect } from 'react';

// Utils
import { logEvent } from '../utils/Ganalytics';

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            const newIsMobile = window.innerWidth <= breakpoint;
            if (newIsMobile !== isMobile) {
                setIsMobile(newIsMobile);
                logEvent('useIsMobile', 'Resize', newIsMobile ? 'Mobile View' : 'Desktop View');
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint, isMobile]);

    return isMobile;
};

export default useIsMobile;