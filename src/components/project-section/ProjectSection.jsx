import { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./ProjectSection.module.css";

// import { default as projects } from "../project-section/project-data.json";

import {
	PersonalProjectCards,
	ProjectCards,
} from "../project-card/ProjectCard";

const ProjectSection = () => {
	return (
		<div id="projects" className={styles.container}>
			<h2 className={styles.projectTitle}>Projects</h2>
			{/* <div className={styles.filterContainer}>
				<div className={styles.technologyFilterContainer}>
					<p className={styles.filterTitle}>Technology</p>
					<Button className={styles.filterButtons} type="button">
						HTML/CSS
					</Button>

					<Button className={styles.filterButtons} type="button">
						Vanilla JS
					</Button>

					<Button className={styles.filterButtons} type="button">
						Three.js
					</Button>
					<Button className={styles.filterButtons} type="button">
						React
					</Button>
				</div>

				<div className={styles.sizeFilterContainer}>
					<p className={styles.filterTitle}>Size</p>
					<Button className={styles.filterButtons} type="button">
						Small Projects
					</Button>
					<Button className={styles.filterButtons} type="button">
						Medium Projects
					</Button>
					<Button className={styles.filterButtons} type="button">
						Large Projects
					</Button>
				</div>
			</div> */}

			<div className={styles.projectsContainer}>
				{/* <h3 className={styles.freelanceTitle}>Freelance Work</h3> */}
				<div className={styles.freelanceContainer}>
					<ProjectCards />
					{/* <PersonalProjectCards /> */}
				</div>
				{/* <h3 className={styles.personalTitle}>Personal Projects</h3>
				<div className={styles.personalContainer}></div> */}
			</div>
		</div>
	);
};

export default ProjectSection;
