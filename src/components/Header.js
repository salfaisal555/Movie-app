// src/components/Header.js
import React from 'react';
import Search from './Search';

const Header = ({ onSearch }) => {
  return (
    <header className="bg-danger text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h3 className="m-0 w-75">FinProH8</h3>
        <Search onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
