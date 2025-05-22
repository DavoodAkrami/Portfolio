import { InstagramIcon, TelegramIcon, LinkedinIcon, GithubIcon } from "../Icons/Icons";
import styles from "./contact.module.css";
import DavoodData from "../../data/DavoodData";



const Contact = () => {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
            <h2>Contact With Me</h2>
                <div className={styles.contactInfo} >
                    <div className={styles.linkedin} onClick={() => window.open(DavoodData.linkedin, "_blank")}>
                        <LinkedinIcon size="50px" className={styles.LinkedinIcon}/>
                        <h4>Linkedin</h4>
                        <p>Connect with me professionally</p>
                    </div>
                    <div className={styles.telegram} onClick={() => window.open(DavoodData.telegram, "_blank")}>
                        <TelegramIcon size="50px" className={styles.TelegramIcon}/>
                        <h4>Telegram</h4>
                        <p>Chat with me on Telegram for quick communication</p>
                    </div>
                    <div className={styles.github} onClick={() => window.open(DavoodData.github, "_blank")}>
                        <GithubIcon size="50px" className={styles.GithubIcon}/>
                        <h4>Github</h4>
                        <p>Check out my latest projects and contributions</p>
                    </div>
                    <div className={styles.instagram} onClick={() => window.open(DavoodData.instagram, "_blank")}>
                        <InstagramIcon size="50px" className={styles.InstagramIcon}/>
                        <h4>Instagram</h4>
                        <p>Follow me on Instagram for updates and behind-the-scenes content</p>
                    </div>
                </div>
                <div className={styles.email}>
                        <p>Or Email me directly at: <a href={`mailto:${DavoodData.email}`}>{DavoodData.email}</a></p>
                </div>
            </div>
        </div>
    )
}






export default Contact;
