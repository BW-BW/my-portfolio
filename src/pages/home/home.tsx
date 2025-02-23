import React from 'react';
import './home.css';
import assets from '../../assets/assets';

const Home: React.FC = () => {
    return (
        <section className="home">
            <div className="home-container">
                <h1 className="home-title">Welcome to Brian's Portfolio</h1>
                <img className='gif-container' src={assets.construction} alt="Animated GIF" />
                <p>This website is still under development.</p>
                <p>Come back at a later dates to see Brian's full portofio.</p>
            </div>
        </section>
    );
};

export default Home;
