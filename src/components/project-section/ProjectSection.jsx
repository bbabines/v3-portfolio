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

			<div className={styles.projectsContainer}>
				{/* <h3 className={styles.freelanceTitle}>Freelance Work</h3> */}
				<div className={styles.freelanceContainer}>
					<ProjectCards />
					{/* <PersonalProjectCards /> */}
				</div>
			</div>
		</div>
	);
};

export default ProjectSection;

// Paid projects removed until site and code is available
// {
// 		"id": 1,
// 		"title": "Kubera Link",
// 		"image": "kubera-thumb.png",
// 		"site": "#",
// 		"github": "#",
// 		"paid": true,
// 		"technology": "react",
// 		"size": "large"
// 	},

// 	{
// 		"id": 2,
// 		"title": "Cohering Minds",
// 		"image": "cohering-thumb.jpeg",
// 		"site": "#",
// 		"github": "#",
// 		"paid": true,
// 		"technology": "react",
// 		"size": "large"
// 	},
