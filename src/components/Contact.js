import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faGithub, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
    return (
        <div>
            <div className="contact-map-container">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.919144240116!2d77.22641257946625!3d28.6090700495697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1693829141227!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                <div className="contact-section">
                    <div className="contact-section__card">
                        <h3 className="contact-section__title">Get in touch</h3>
                        <ul className="contact-section__info">
                            <li className="contact-section__info-item"><span className='contact-section__info-title'>Email :</span> amanbhatt199916@gmail.com</li>
                            <li className="contact-section__info-item"><span className='contact-section__info-title'>Phone :</span> +91 9990106790</li>
                            <li className="contact-section__info-item"><span className='contact-section__info-title'>Address :</span> New Delhi, Delhi 110046</li>
                        </ul>
                        <ul className="contact-section__social-icons">
                            <li className="contact-section__social-item">
                                <a className="contact-section__social-link" href="https://www.linkedin.com/in/aman-216443306/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                    <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
                                </a>
                            </li>
                            <li className="contact-section__social-item">
                                <a className="contact-section__social-link" href="https://x.com/notfound_07_" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                                    <FontAwesomeIcon icon={faXTwitter} aria-hidden="true" />
                                </a>
                            </li>
                            <li className="contact-section__social-item">
                                <a className="contact-section__social-link" href="https://discord.gg/yxZ9UPBXS2" target="_blank" rel="noopener noreferrer" aria-label="Discord Server">
                                    <FontAwesomeIcon icon={faDiscord} aria-hidden="true" />
                                </a>
                            </li>
                            <li className="contact-section__social-item">
                                <a className="contact-section__social-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                                    <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
                                </a>
                            </li>
                            <li className="contact-section__social-item">
                                <a className="contact-section__social-link" href="https://github.com/notfound07" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                    <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container-foot">
                    <h2 className="text-center">Aman Bhatt @ 2024 All Rights Reserved</h2>
                </div>
            </div>
        </div>
    );
}

export default Contact;