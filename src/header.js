// components/Header.js
import React from 'react';
import { FiMenu, FiUser } from 'react-icons/fi';

const Header = ({ onMenuClick }) => {
  return (
    <header className="app-header">
      <button className="menu-button" onClick={onMenuClick}>
        <FiMenu size={24} />
      </button>
      <h1 className="app-title">SmartGym</h1>
      <div className="user-avatar">
        <FiUser size={20} />
      </div>
    </header>
  );
};

export default Header;