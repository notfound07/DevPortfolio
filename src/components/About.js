import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPaintBrush, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faInstagram, faGithub, faDiscord, faAndroid, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
                    <h5 className="about-section__subtitle">MERN Stack Developer Located in New Delhi</h5>
                    <p className="about-section__description">
                        I am a dedicated MERN Stack Developer in New Delhi, specializing in creating efficient, scalable web applications using MongoDB, Express.js, React.js, and Node.js. I build responsive, full-stack solutions tailored to your needs, ensuring seamless performance and a user-friendly experience across all platforms.
                    </p>
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
                            <a className="about-section__social-link" href="https://www.linkedin.com/in/aman-216443306/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
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
                                Using Figma, I create user-friendly UI and UX designs that make digital experiences smooth and enjoyable. My goal is to ensure that interfaces are easy to use and satisfy users across all devices. I focus on making designs both functional and visually appealing.
                            </p>
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
                                Creating dynamic, responsive websites using the MERN stack and front-end tools, ensuring smooth functionality, great performance, and a user-friendly experience tailored to your needs.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="about-section__expertise">
                        <div className="about-section__icon">
                            <FontAwesomeIcon icon={faAndroid} className="icon-lg" />
                        </div>
                        <div className="about-section__expertise-content">
                            <h6>Websites Deployment</h6>
                            <p className="subtitle">
                                Ensuring smooth and efficient website launches with AWS infrastructure for scalable, secure, and seamless deployment from development to live production environments.
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;