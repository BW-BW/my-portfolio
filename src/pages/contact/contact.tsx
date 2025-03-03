import React, { useEffect }  from 'react';
import './contact.css';
import assets from '../../assets/assets';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
    useEffect(() => {
            AOS.init({ duration: 1000, once: true });
        }, []);

    return (
        <section className="contact">
            <div className="contact-container" data-aos="fade up">
                <h2>Hello there 👋</h2>
                <h1>I'm <span style={{ color: "#523d35", fontWeight: "bold" }}>Brian Widjaja</span></h1>
                <h2>Software Developer in Agmo Studio</h2>
            </div>

            <div className="image-container" data-aos="fade up">
                <img src={assets.brian1} className="image-item" />
                <img src={assets.brian2} className="image-item" />
                <img src={assets.brian3} className="image-item" />
            </div>

            <div className="contact-container">
                <h3 data-aos="fade up">A little about me</h3>
                <p data-aos="fade up">
                    I'm a <strong>backend developer</strong> <span>🚀</span> with a strong focus on building efficient, scalable, and secure applications.
                </p>
                <p data-aos="fade up">
                    My experience spans working with backend areas, where I optimize performance, manage access control, and ensure seamless data flow between services.
                </p>
                <p data-aos="fade up">
                    I thrive in problem-solving, whether it's refining JWT authentication logic, handling complex database seeding, or debugging tricky logic function issues.
                </p>
                <p data-aos="fade up">
                    Lately, I've been exploring ways to expand my learning curve, seeking opportunities that push me toward new challenges and innovations. 
                </p>
            </div>

            <div className="contact-info">
                <h2>Want to know more? Contact me at:</h2>
                
                <div className="social-links">
                    <a href="mailto:brianwidjaja53@gmail.com" target="_blank" rel="noopener noreferrer">
                        📧 brianwidjaja53@gmail.com
                    </a>
                    
                    <a href="https://www.linkedin.com/in/brian-widjaja" target="_blank" rel="noopener noreferrer">
                        🔗 LinkedIn
                    </a>
                    <a href="https://github.com/BW-BW" target="_blank" rel="noopener noreferrer">
                        💻 GitHub
                    </a>
                </div>

                <div className="social-links">
                    <a href="https://wa.me/6282280011371" target="_blank" rel="noopener noreferrer"> 
                        📱 WhatsApp <img src="https://flagcdn.com/w40/id.png" alt="Indonesia Flag" width="20" />
                    </a>
                    <a href="https://wa.me/60146120744" target="_blank" rel="noopener noreferrer"> 
                        📱 WhatsApp <img src="https://flagcdn.com/w40/my.png" alt="Malaysia Flag" width="20" />
                    </a>
                </div>

                <button className="resume-btn" onClick={() => window.open('/documents/resume.pdf', '_blank')}>
                    📄 Download Resume
                </button>
            </div>
        </section>
    );
};

export default Contact;
