// Dependencies
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import './assets/styles/App.css';

// MUI Components
import { CssBaseline, Container, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';
import SidePanel from './components/SidePanel';

// Contexts
import { SidePanelProvider } from './contexts/SidePanelContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Router basename='/allenhurstcleaners_v2/' >
        {/*  
          basename='/allenhurstcleaners_v2/' is used to set the base URL for all locations.
          This is needed for GitHub Pages deployment.
          Must be removed for Netlify deployment.
        */}
        <CssBaseline />
        <SidePanelProvider>
          <ThemedAppContent />
        </SidePanelProvider>
      </Router>
    </ThemeContextProvider>
  );
}

function ThemedAppContent() {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    }}>
      <Header />
      <SidePanel />
      <Container maxWidth="xl" sx={{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
      }}>
        <Box my={4}>
          <div className="main-content">
            <div className="content">
              <Routes />
            </div>
          </div>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;