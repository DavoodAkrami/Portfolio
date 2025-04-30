import styles from './About.module.css';
import DavoodData from '../../data/DavoodData';

const About = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.aboutMe}>
                    <h2>About Me</h2>
                    <p>{DavoodData.about}</p>
                </div>
                <div className={styles.photo}>
                    <img src={DavoodData.photo} alt="Davood Akrami" />
                </div>
            </div>
        </div>
    )
}

export default About;
