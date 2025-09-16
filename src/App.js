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
          <Link to="/about" style={{ textDecoration: 'none' }}>EU Parliament seats</Link>
        </button>{' '}
             <button>
          <Link to="/about-country" style={{ textDecoration: 'none' }}>Parliament seats per country</Link>
        </button>{' '}
        <button>
          <Link to="/posts" style={{ textDecoration: 'none' }}>Posts</Link>
        </button>{' '}
  <button>
    <a 
      href="https://drive.google.com/drive/folders/1oyuiDuoAAs88W-gMB8p4F2e5tX8Cgbb0?dmr=1&ec=wgc-drive-globalnav-goto" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      Upload your post
    </a>
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
