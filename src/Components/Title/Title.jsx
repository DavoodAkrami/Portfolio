import styles from './Title.module.css';

const Title = ({resume}) => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.name}>
                    Davood Akrami
                </div>
                <div className={styles.jobTitle}>
                    Junior Frontend Developer
                </div>
                <div className={styles.resume}>
                    <a href={resume} target="_blank" rel="noopener noreferrer">View Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Title;