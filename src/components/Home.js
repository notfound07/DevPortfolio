import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import './Home.css';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import passport from '../assets/passportsize.jpg';

function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navbarRef = useRef(null);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            const brandImgWrapper = document.querySelector('.brand-img-wrapper');
            if (brandImgWrapper) {
                const brandImgWrapperRect = brandImgWrapper.getBoundingClientRect();
                setIsScrolled(brandImgWrapperRect.top <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, sectionIdOrTarget, adjustForNavbar = true) => {
        e.preventDefault();
        const target = document.querySelector(sectionIdOrTarget);
        
        if (target) {
            let scrollOptions = { behavior: 'smooth' };
    
            if (adjustForNavbar) {
                const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
                const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                scrollOptions.top = targetTop;
            } else {
                target.scrollIntoView(scrollOptions);
            }
    
            if (adjustForNavbar && typeof setDropdownOpen === 'function') {
                setDropdownOpen(false); // Close the dropdown if it's open
            }
    
            window.scrollTo(scrollOptions);
        }
    };
    

    const handleClickOutside = (event) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target) &&
            hamburgerRef.current && !hamburgerRef.current.contains(event.target)
        ) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <section id='header'>
                <Header />
            </section>
            <nav className="navbar" ref={navbarRef}>
                <div className="container-nav">
                    <div className="navbar-nav left-nav">
                        <li className="nav-link" onClick={(e) => handleNavClick(e, '#header')}>Home</li>
                        <li className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</li>
                    </div>
                    <div className="brand">
                        <div className={`brand-img-wrapper ${isScrolled ? 'hidden' : ''}`}>
                            <img src={passport} alt="Aman Bhatt" className="brand-img" />
                        </div>
                        <div className={`brand-text ${isScrolled ? 'visible' : ''}`}>
                            <h1 className="brand-title">Aman Bhatt</h1>
                            <h5 className="brand-subtitle">Web Designer | Developer</h5>
                        </div>
                    </div>
                    <div className="navbar-nav right-nav">
                        <li className="nav-link" onClick={(e) => handleNavClick(e, '#resume')}>Resume</li>
                        <li className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</li>
                    </div>
                </div>

                {/* Hamburger icon for dropdown */}
                <div 
                    className="hamburger" 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    ref={hamburgerRef}
                >
                    &#9776; {/* Unicode for hamburger icon */}
                </div>

                {/* Dropdown Menu */}
                <ul 
                    className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}
                    ref={menuRef}
                >
                    <li className="menu-text" onClick={(e) => handleNavClick(e, '#header')}>Home</li>
                    <li className="menu-text" onClick={(e) => handleNavClick(e, '#about')}>About</li>
                    <li className="menu-text" onClick={(e) => handleNavClick(e, '#resume')}>Resume</li>
                    <li className="menu-text-contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</li>
                </ul>
            </nav>
            <section id='about'>
                <About />
            </section>
            <section id='resume'>
                <Resume />
            </section>
            <section id='contact'>
                <Contact />
            </section>
        </div>
    );
}

export default Home;
