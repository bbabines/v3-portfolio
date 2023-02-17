import styles from "./ProjectCard.module.css";
import { default as projects } from "../project-section/project-data.json";

export const PaidProjectCards = () => {
	const paidProjects = projects.filter((project) => project.paid === true);

	return (
		<div className={styles.container}>
			<div className={styles.cardContainer}>
				{paidProjects.map((project) => (
					<div key={project.id}>
						<h6 className={styles.cardTitle}>{project.title}</h6>
						<div className={styles.description}>
							{/**Make Description into a component and/or part of the data.JSON */}
							{/* <p>This is the project description. It goes on and on</p> */}
						</div>
						<div className={styles.imageContainer}>
							<img src={`/${project.image}`} className={styles.cardImage} />
						</div>
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

export const PersonalProjectCards = () => {
	const personalProjects = projects.filter((project) => project.paid === false);

	return (
		<div className={styles.container}>
			<div className={styles.cardContainer}>
				{personalProjects.map((project) => (
					<div key={project.id}>
						<h6 className={styles.cardTitle}>{project.title}</h6>
						{/* <div className={styles.description}> */}
						{/**Make Description into a component and/or part of the data.JSON */}
						{/* <p>This is the project description. It goes on and on</p> */}
						{/* </div> */}
						<div className={styles.imageContainer}>
							<img src={`/${project.image}`} className={styles.cardImage} />
						</div>
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
