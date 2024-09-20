// Dependencies
import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Light' : 'Dark'} Mode
            </button>
        </>
    );
};

export default ThemeSwitcher;