import styles from "./ProjectSection.module.css";

const ProjectSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.projectContainer}>
				<h1>Projects</h1>
				<h3>Freelance Work</h3>
				<h3>Personal Projects</h3>
				<h5>Button Filters</h5>
				<h6>Large, Medium, or Small</h6>
				<h6>React, Three.js, Vanilla JS, HTML/CSS</h6>
				<p>Picture</p>
				<p>Title</p>
				<p>Description over picture upon hover</p>
				<p>GitHub</p>
				<p>Live Demo</p>
			</div>
		</div>
	);
};

export default ProjectSection;
