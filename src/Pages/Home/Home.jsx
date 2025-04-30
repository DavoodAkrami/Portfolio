import DavoodData from '../../data/DavoodData';
import styles from './Home.module.css';
import Header from '../../Components/Header/Header';
import Title from '../../Components/Title/Title';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Resume from '../../Components/Resume/Resume';
import Feedback from '../../Components/Feedback/Feedback';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Header />
                <div id="home">
                    <Title resume={DavoodData.resume} />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="contact">
                    <Contact />
                </div>
                <div id="resume">
                    <Resume />
                </div>
                <div id="feedback">
                    <Feedback />
                </div>
                <div id="footer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home;

