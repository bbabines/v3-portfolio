import styles from "./ProjectSection.module.css";

import {
	PersonalProjectCards,
	PaidProjectCards,
} from "../project-card/ProjectCard";

const ProjectSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.projectTitle}>Projects</h2>
			<div className={styles.filterContainer}>
				<p>Technology</p>
				<button type="button">HTML/CSS</button>
				<button type="button">Vanilla JS</button>
				<button type="button">Three.js</button>
				<button type="button">React</button>
				<div>
					<p>Difficulty</p>
					<button type="button">Easy</button>
					<button type="button">Moderate</button>
					<button type="button">Advanced</button>
				</div>
				<div>
					<p>Size</p>
					<button type="button">Small Projects</button>
					<button type="button">Medium Projects</button>
					<button type="button">Large Projects</button>
				</div>
			</div>
			<div className={styles.projectsContainer}>
				<h3 className={styles.freelanceTitle}>Freelance Work</h3>
				<PaidProjectCards />
				<h3 className={styles.personalTitle}>Personal Projects</h3>
				<PersonalProjectCards />
			</div>
		</div>
	);
};

export default ProjectSection;
