import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>TCG Card Collector</h1>
      <nav className="nav-menu">
        <button>My Collection</button>
        <button>Add Cards</button>
        <button>Settings</button>
      </nav>
    </header>
  );
}

export default Header;
