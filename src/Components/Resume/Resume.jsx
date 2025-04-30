import DavoodData from "../../data/DavoodData";
import styles from "./Resume.module.css";

const Resume = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.resumeDownload}>
                <h2>My Resume</h2>
                    <a href={DavoodData.resume} download>Download Resume</a>
                </div>
                <div className={styles.resume}>
                    <div className={styles.Skills}>
                        <h3>Skills</h3>
                        <div className={styles.skillsList}>
                            {DavoodData.skills.map((skill, index) => (
                                <div key={index} className={styles.skill}>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <h3>Experience</h3>
                        <div className={styles.experienceList}>
                            {DavoodData.experience.map((experience, index) => (
                                <div key={index} className={styles.experienceItem}>
                                    <h4 className={styles.title}>{experience.title}</h4>
                                    <p className={styles.description}>{experience.description}</p>
                                    <p className={styles.date}>{experience.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
