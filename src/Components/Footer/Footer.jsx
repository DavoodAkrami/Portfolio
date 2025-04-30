import styles from './Footer.module.css';
import DavoodData from '../../data/DavoodData';
import { GithubIcon, LinkedinIcon, InstagramIcon, TelegramIcon } from '../Icons/Icons';


const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.Name_Job}>
                    <div className={styles.name}>
                        <h3>{DavoodData.name}</h3>
                    </div>
                    <div className={styles.jobTitle}>
                        <p>{DavoodData.jobTitle}</p>
                    </div>
                </div>
                <div className={styles.pageLinks}>
                    <h3>Links</h3>
                    <div className={styles.navigation}>
                    <div onClick={() => scrollToSection('home')}>Home</div>
                    <div onClick={() => scrollToSection('about')}>About</div>
                    <div onClick={() => scrollToSection('contact')}>Contact</div>
                    <div onClick={() => scrollToSection('resume')}>Resume</div>
                    <div onClick={() => scrollToSection('feedback')}>Feedback</div>
                    </div>
                </div>
                <div className={styles.contact}>
                    <h3>Contact</h3>
                    <div className={styles.contactIcons}>
                        <p>{DavoodData.email}</p>
                        <p>{DavoodData.phone}</p>
                    </div>
                </div>
                <div className={styles.socialLinks}>
                    <h3>Social Links</h3>
                    <div className={styles.socialIcons}>
                        <a href={DavoodData.github} target="_blank" rel="noopener noreferrer">
                            <GithubIcon color="white" className={styles.githubIcon}/>
                        </a>
                        <a href={DavoodData.linkedin} target="_blank" rel="noopener noreferrer">
                            <LinkedinIcon color="white" className={styles.linkedinIcon}/>
                        </a>
                        <a href={DavoodData.instagram} target="_blank" rel="noopener noreferrer">
                            <InstagramIcon color="white" className={styles.instagramIcon}/>
                        </a>
                        <a href={DavoodData.telegram} target="_blank" rel="noopener noreferrer">
                            <TelegramIcon color="white" className={styles.telegramIcon}/>
                        </a>                        
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.copyright}>
                    <p>Copyright &copy; {new Date().getFullYear()} Davood Akrami</p>
                </div>
        </div>
    )
}

export default Footer;


