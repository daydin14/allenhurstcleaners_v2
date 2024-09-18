// Dependencies
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-text">
                    <p>Allenhurst Cleaners &copy; {new Date().getFullYear()} All rights reserved.</p>
                    <span className="tooltip">
                        By <a href="https://linkedin.com/in/daydin14" target="_blank" rel="noopener noreferrer">David Aydin</a>
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;