import React, { createContext, useState, useMemo, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: themeMode,
                    ...(themeMode === 'light'
                        ? {
                            // Light mode palette
                            primary: {
                                main: '#1976d2',
                            },
                            secondary: {
                                main: '#dc004e',
                            },
                            background: {
                                default: '#f5f5f5',
                                paper: '#ffffff',
                            },
                            text: {
                                primary: '#000000', // Black text for light mode
                                secondary: '#555555', // Dark gray text for light mode
                            },
                        }
                        : {
                            // Dark mode palette
                            primary: {
                                main: '#90caf9',
                            },
                            secondary: {
                                main: '#f48fb1',
                            },
                            background: {
                                default: '#121212',
                                paper: '#1d1d1d',
                            },
                            text: {
                                primary: '#ffffff', // White text for dark mode
                                secondary: '#aaaaaa', // Light gray text for dark mode
                            },
                        }),
                },
                typography: {
                    fontFamily: 'Roboto, Arial, sans-serif',
                },
                components: {
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                borderRadius: '8px',
                            },
                        },
                    },
                },
            }),
        [themeMode]
    );

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};