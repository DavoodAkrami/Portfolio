import styles from "./Projects.module.css"
import ProjectsData from "../../data/ProjectsData"

const ProjectCard = () => {
    const projects = ProjectsData.map((project, index) => (
        <div key={index} className={styles.container} onClick={() => window.open(project.url, '_blank')}>
            <div className={styles.logo}>
                <iframe 
                    src={project.url}
                    title={`${project.title} preview`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                />
            </div>
            <div className={styles.title}>
                <h3>{project.title}</h3>
            </div>
            <div className={styles.description}>
                <p>{project.description}</p>
            </div>
            <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
        </div>
    ))

    return (
        <div className={styles.projectsContainer}>
            <h1>Projects</h1>
            <div className={styles.projectsGrid}>
                {projects}
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <ProjectCard />
    )
}

export default Projects;