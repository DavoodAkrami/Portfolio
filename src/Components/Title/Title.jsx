import styles from './Title.module.css';
import DavoodData from '../../data/DavoodData';



const Title = () => {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.name}>
                    Davood Akrami
                </div>
                <div className={styles.jobTitle}>
                    {DavoodData.jobTitle}
                </div>
                <div className={styles.resume}>
                    <a href={DavoodData.resume} target="_blank" rel="noopener noreferrer">View Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Title;