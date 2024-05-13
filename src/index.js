import React from 'react';
import ReactDOM from 'react-dom/client';
import { LandingPage } from './pages/LandingPage';

import './index.css';
import { BlogPage } from './pages/BlogPage';
import { MainPage } from './pages/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LandingPage /> */}
    <MainPage />
  </React.StrictMode>
);
