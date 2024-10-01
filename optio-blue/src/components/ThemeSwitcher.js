// Dependencies
import React from 'react';

// MUI Components
import Button from '@mui/material/Button';

// Context
import { useThemeContext } from '../contexts/ThemeContext';

// Utils
import { logEvent } from '../utils/Ganalytics';

const ThemeSwitcher = () => {
    const { themeMode, toggleTheme } = useThemeContext();
    const handleToggleTheme = () => {
        toggleTheme();
        // Google Analytics
        logEvent('ThemeSwitcher', 'Toggle Theme', themeMode === 'light' ? 'Dark Mode' : 'Light Mode');
    };

    return (
        <>
            <Button
                variant="contained"
                onClick={handleToggleTheme}
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[800] // Darker color for light mode
                            : theme.palette.primary.main, // Original blue for dark mode
                    color: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.primary.contrastText
                            : theme.palette.primary.contrastText,
                    '&:hover': {
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[900] // Even darker color for hover in light mode
                                : theme.palette.primary.dark, // Darker blue for hover in dark mode
                    },
                }}
            >
                {themeMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
        </>
    );
};

export default ThemeSwitcher;