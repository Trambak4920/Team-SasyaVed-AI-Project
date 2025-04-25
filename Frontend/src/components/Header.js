import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const loc = useLocation();
  const titleMap = {
    '/dashboard': 'Dashboard',
    '/recommend': 'Crop Recommendation',
    '/detect': 'Disease Detection',
    '/knowledge': 'Knowledge Hub',
    '/login': 'Login',
    '/register': 'Register',
  };
  const title = titleMap[loc.pathname] || 'KrishkAI';

  return (
    <header className="app-header">
      <img src="/logo.png" alt="KrishkAI Logo" className="logo" />
      <h1 className="page-title">{title}</h1>
    </header>
  );
};

export default Header;
