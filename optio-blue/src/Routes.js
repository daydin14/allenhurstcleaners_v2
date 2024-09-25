// Dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default AppRoutes;