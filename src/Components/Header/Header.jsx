import React from 'react';
import styles from './Header.module.css';


const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Header = ({ activeSection }) => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.name} onClick={() => scrollToSection('home')}>
                    <img src="https://i.ibb.co/WpG7WkrZ/5ba44c5d-fa62-4b08-b73e-b509c3cef93e-removebg-preview.png" alt="Davood Akrami" />
                </div>
                
                <nav className={styles.navigation}>
                    <div onClick={() => scrollToSection('home')} className={activeSection === 'home' ? styles.active : ''}>Home</div>
                    <div onClick={() => scrollToSection('about')} className={activeSection === 'about' ? styles.active : ''}>About</div>
                    <div onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? styles.active : ''}>Contact</div>
                    <div onClick={() => scrollToSection('resume')} className={activeSection === 'resume' ? styles.active : ''}>Resume</div>
                    <div onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? styles.active : ''}>Projects</div>
                    <div onClick={() => scrollToSection('feedback')} className={activeSection === 'feedback' ? styles.active : ''}>Feedback</div>
                </nav>
            </div>
            <hr className={styles.hr} />
        </div>
    )
}

export default Header;
