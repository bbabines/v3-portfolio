import styles from "./ProjectCard.module.css";
import { default as projects } from "../project-section/project-data.json";

const ProjectCard = () => {
	const paidProjects = projects.filter((project) => project.paid === true);

	const personalProjects = projects.filter((project) => project.paid === false);

	return (
		<div className={styles.container}>
			<div className={styles.cardContainer}>
				{paidProjects.map((project) => (
					<div key={project.id}>
						<h6 className={styles.cardTitle}>{project.title}</h6>
						<div className={styles.description}>
							<p>This is the project description. It goes on and on</p>
						</div>
						<img src={`/${project.image}`} className={styles.cardImage} />
						<div className={styles.linkContainer}>
							<a
								href={project.site}
								target="_blank"
								className={styles.demoLink}
							>
								View Live Demo
							</a>
							<a
								href={project.github}
								target="_blank"
								className={styles.projectLink}
							>
								View Code
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;

{
	/* <h3 className={styles.personalTitle}>Personal Projects</h3>
				<div className={styles.personalContainer}>
					{personalProjects.map((project) => (
						<div key={project.id}>
							<h6>{project.title}</h6>
							<img src={`/${project.image}`} />
							<div>
								<a href={project.site} target="_blank">
									View Live Demo
								</a>
							</div>
							<div>
								<a href={project.github} target="_blank">
									View Code
								</a>
							</div>
						</div>
					))} */
}
