import React from 'react';
import './contact.css';
import assets from '../../assets/assets';

const Contact: React.FC = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <h2>Hello there 👋</h2>
                <h1>I'm <span style={{ color: "#523d35", fontWeight: "bold" }}>Brian Widjaja</span></h1>
                <h2>Software Developer in Agmo Studio</h2>
            </div>

            <div className="image-container">
                <img src={assets.brian1} className="image-item" />
                <img src={assets.brian2} className="image-item" />
                <img src={assets.brian3} className="image-item" />
            </div>
        </section>
    );
};

export default Contact;
