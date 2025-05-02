import React from 'react';
import styles from './Header.module.css';

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Header = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.name} onClick={() => scrollToSection('home')}>
                    <img src="https://i.ibb.co/WpG7WkrZ/5ba44c5d-fa62-4b08-b73e-b509c3cef93e-removebg-preview.png" alt="Davood Akrami" />
                </div>
                
                <div className={styles.navigation}>
                    <div onClick={() => scrollToSection('home')}>Home</div>
                    <div onClick={() => scrollToSection('about')}>About</div>
                    <div onClick={() => scrollToSection('contact')}>Contact</div>
                    <div onClick={() => scrollToSection('resume')}>Resume</div>
                    <div onClick={() => scrollToSection('feedback')}>Feedback</div>
                </div>
            </div>
            <hr className={styles.hr} />
        </div>
    )
}

export default Header;
