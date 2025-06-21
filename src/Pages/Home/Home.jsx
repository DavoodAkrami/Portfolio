import DavoodData from '../../data/DavoodData';
import styles from './Home.module.css';
import Header from '../../Components/Header/Header';
import Title from '../../Components/Title/Title';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Resume from '../../Components/Resume/Resume';
import Feedback from '../../Components/Feedback/Feedback';
import Footer from '../../Components/Footer/Footer';
import Projects from '../../Components/Projects/Projects';
import { useState, useEffect } from 'react';

const Home = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observerOptions = {
            root: null, 
            rootMargin: '-50% 0px', 
            threshold: 0
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Header activeSection={activeSection}/>
                </div>
                <section id="home">
                    <Title/>
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <section id="resume">
                    <Resume />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="feedback">
                    <Feedback />
                </section>
                <section id="footer">
                    <Footer />
                </section>
            </div>
        </div>
    )
}

export default Home;

