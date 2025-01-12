import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPaintBrush, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faXTwitter, faDiscord, faGithub, faInstagram, faAndroid} from '@fortawesome/free-brands-svg-icons';
import './About.css';
import PDF from '../assets/AmanBhattDev.pdf';

function About() {
    const openPdf = () => {
        const pdfUrl = PDF; 
        window.open(pdfUrl, '_blank'); 
      };

    return (
        <div className="container-fluid">
            <div id="about" className="about-section">
                <div className="about-section__card">
                    <h3 className="about-section__title">Who am I?</h3>
                    <span className="about-section__line"></span>
                    <h5 className="about-section__subtitle">MERN Stack Developer | Just One Ping Away</h5>
                    <p className="about-section__description">
                    I am a MERN Stack Developer based in New Delhi, specializing in building responsive and scalable web applications with MongoDB, Express.js, React.js, and Node.js. As an MCA student with a BCA from GGSIPU and 6 months of freelance experience, I have a strong foundation in full-stack development, with a focus on creating user-friendly solutions. Passionate about learning, problem-solving, and teamwork, I’m eager to grow in dynamic environments and deliver impactful results. Always just one ping away!</p>
                    <button className="about-section__btn" type="button" onClick={openPdf}>
                        <FontAwesomeIcon icon={faDownload} /> Download My CV
                    </button>
                </div>
                <div className="about-section__card">
                    <h3 className="about-section__title">Personal Info</h3>
                    <span className="about-section__line"></span>
                    <ul className="about-section__info">
                        <li className="about-section__info-item"><span className='about-section__info-title'>Email :</span> amanbhatt199916@gmail.com</li>
                        <li className="about-section__info-item"><span className='about-section__info-title'>Phone :</span> +91 9990106790</li>
                        <li className="about-section__info-item"><span className='about-section__info-title'>Address :</span> New Delhi, Delhi 110046</li>
                    </ul>
                    <ul className="about-section__social-icons">
                        <li className="about-section__social-item">
                            <a className="about-section__social-link" href="https://www.linkedin.com/in/aman-bhatt-216443306/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
                            </a>
                        </li>
                        <li className="about-section__social-item">
                            <a className="about-section__social-link" href="https://x.com/notfound_07_" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                                <FontAwesomeIcon icon={faXTwitter} aria-hidden="true" />
                            </a>
                        </li>
                        <li className="about-section__social-item">
                            <a className="about-section__social-link" href="https://discord.gg/yxZ9UPBXS2" target="_blank" rel="noopener noreferrer" aria-label="Discord Server">
                                <FontAwesomeIcon icon={faDiscord} aria-hidden="true" />
                            </a>
                        </li>
                        <li className="about-section__social-item">
                            <a className="about-section__social-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
                            </a>
                        </li>
                        <li className="about-section__social-item">
                            <a className="about-section__social-link" href="https://github.com/notfound07" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="about-section__card">
                    <h3 className="about-section__title">My Expertise</h3>
                    <span className="about-section__line"></span>
                    <div className="about-section__expertise">
                        <div className="about-section__icon">
                            <FontAwesomeIcon icon={faCogs} className="icon-lg" />
                        </div>
                        <div className="about-section__expertise-content">
                            <h6>UI & UX Design</h6>
                            <p className="subtitle">
                            I design user-friendly interfaces using Figma to make digital experiences simple and enjoyable. I focus on creating clean, functional, and visually appealing designs that work seamlessly across all devices.                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="about-section__expertise">
                        <div className="about-section__icon">
                            <FontAwesomeIcon icon={faPaintBrush} className="icon-lg" />
                        </div>
                        <div className="about-section__expertise-content">
                            <h6>Web Development</h6>
                            <p className="subtitle">
                            I build responsive, dynamic websites using the MERN stack. My expertise ensures fast performance, smooth functionality, and a user-focused experience tailored to your needs.</p>
                            <hr />
                        </div>
                    </div>
                    <div className="about-section__expertise">
                        <div className="about-section__icon">
                            <FontAwesomeIcon icon={faAndroid} className="icon-lg" />
                        </div>
                        <div className="about-section__expertise-content">
                            <h6>Website Deployment</h6>
                            <p className="subtitle">
                            I handle smooth and secure website launches using tools like AWS, ensuring scalability and seamless performance. From development to live production, I make the deployment process hassle-free.</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;