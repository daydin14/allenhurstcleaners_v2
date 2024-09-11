// Dependencies
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import './assets/styles/App.css';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;