// Dependencies
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import './assets/styles/App.css';

// MUI Components
import { CssBaseline, Container, Box } from '@mui/material';

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
    <Router basename='/allenhurstcleaners_v2/'>
      <CssBaseline />
      <ThemeContextProvider>
        <SidePanelProvider>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <SidePanel />
            <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
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
        </SidePanelProvider>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;