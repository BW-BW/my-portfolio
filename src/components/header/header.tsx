import React from 'react';
import './header.css'; // Import the CSS file for styling

const Header: React.FC = () => (
    <header className="header">
        <nav className="header-nav">
            <a href="home" className="nav-link">Home</a>
            <a href="projects" className="nav-link">Projects</a>
            <a href="history" className="nav-link">History</a>
            <a href="contact" className="nav-link">Contact</a>
        </nav>
    </header>
);

export default Header;
