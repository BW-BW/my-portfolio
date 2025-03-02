import React from 'react';
import './header.css'; // Import the CSS file for styling
import assets from '../../assets/assets';

const Header: React.FC = () => (
    <header className="header">
        <nav className="header-nav">
            <a href="/contact" className="nav-item">
                <img className="header-icon" src={assets.contact} alt="Contact" />
                <span className="nav-link">Contact</span>
            </a>
            <a href="/projects" className="nav-item">
                <img className="header-icon" src={assets.project} alt="Projects" />
                <span className="nav-link">Projects</span>
            </a>
            <a href="/history" className="nav-item">
                <img className="header-icon" src={assets.history} alt="History" />
                <span className="nav-link">History</span>
            </a>
        </nav>
    </header>
);

export default Header;
