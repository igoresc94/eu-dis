import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import AboutCountry from './pages/AboutCountry';

const App = () => {
  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <button>
          <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </button>{' '}
        <button>
          <Link to="/posts" style={{ textDecoration: 'none' }}>Posts</Link>
        </button>{' '}
        <button>
          <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
        </button>{' '}
        <button>
          <Link to="/about-country" style={{ textDecoration: 'none' }}>About Country</Link>
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-country" element={<AboutCountry />} />
      </Routes>
    </Router>
  );
};

export default App;
