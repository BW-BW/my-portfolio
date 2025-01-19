import React from 'react';
import './home.css'; // Import the CSS file for styling

const Home: React.FC = () => {
    return (
        <section className="home">
            <div className="home-container">
                <h1 className="home-title">Welcome to Brian's Portfolio</h1>
                <p className="home-description">
                    Hi! I'm [Your Name], a passionate [Your Profession] specializing in building modern web applications. Explore my work, learn about my skills, and feel free to get in touch!
                </p>
                <button className="home-button">Learn More</button>
            </div>
        </section>
    );
};

export default Home;
