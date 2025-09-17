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
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button>About simulator</button>
        </Link>{' '}
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <button>EU Parliament seats</button>
        </Link>{' '}
        <Link to="/about-country" style={{ textDecoration: 'none' }}>
          <button>Parliament seats per country</button>
        </Link>{' '}
        <Link to="/posts" style={{ textDecoration: 'none' }}>
          <button>Posts</button>
        </Link>{' '}
        <a
          href="https://drive.google.com/drive/folders/1oyuiDuoAAs88W-gMB8p4F2e5tX8Cgbb0?dmr=1&ec=wgc-drive-globalnav-goto"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button>Upload your post</button>
        </a>
        <div style={{ padding: 10, fontFamily: 'Arial, sans-serif' }}>
      <h1>Understanding Fake News Simulator</h1>
    </div>
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
