import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faGithub, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <ul className="social-icons pt-3">
          <li className="social-item">
            <a
              className="social-link text-light"
              href="https://www.linkedin.com/in/aman-216443306/"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link text-light"
              href="https://x.com/notfound_07_"
              target="_blank" rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <FontAwesomeIcon icon={faXTwitter} aria-hidden="true" />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link text-light"
              href="https://discord.gg/yxZ9UPBXS2"
              target="_blank" rel="noopener noreferrer"
              aria-label="Discord Server"
            >
              <FontAwesomeIcon icon={faDiscord} aria-hidden="true" />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link text-light"
              href="https://www.instagram.com/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link text-light"
              href="https://github.com/notfound07"
              target="_blank" rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            </a>
          </li>
        </ul>
        <div className="header-content">
          <h4 className="header-subtitle">Hello, I am</h4>
          <h1 className="header-title">Aman Bhatt</h1>
          <h6 className="header-mono">MERN Full Stack Developer | Specializing in Front-End Design</h6>
        </div>
      </div>
    </header>
  );
}

export default Header;
