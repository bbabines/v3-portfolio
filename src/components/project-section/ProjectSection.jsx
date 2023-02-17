import { Button } from "react-bootstrap";
import styles from "./ProjectSection.module.css";

import {
	PersonalProjectCards,
	PaidProjectCards,
} from "../project-card/ProjectCard";

const ProjectSection = () => {
	return (
		<div id="projects" className={styles.container}>
			<h2 className={styles.projectTitle}>Projects</h2>
			<div className={styles.filterContainer}>
				<div className={styles.technologyFilterContainer}>
					<p className={styles.filterTitle}>Technology</p>
					<Button className={styles.filterButtons} variant="info" type="button">
						HTML/CSS
					</Button>

					<Button className={styles.filterButtons} variant="info" type="button">
						Vanilla JS
					</Button>

					<Button className={styles.filterButtons} variant="info" type="button">
						Three.js
					</Button>
					<Button className={styles.filterButtons} variant="info" type="button">
						React
					</Button>
				</div>
				{/* <div className={styles.difficultyFilterContainer}>
					<p className={styles.filterTitle}>Difficulty</p>
					<Button className={styles.filterButtons} variant="info" type="button">
						Easy
					</Button>
					<Button className={styles.filterButtons} variant="info" type="button">
						Moderate
					</Button>
					<Button className={styles.filterButtons} variant="info" type="button">
						Advanced
					</Button>
				</div> */}
				<div className={styles.sizeFilterContainer}>
					<p className={styles.filterTitle}>Size</p>
					<Button className={styles.filterButtons} variant="info" type="button">
						Small Projects
					</Button>
					<Button className={styles.filterButtons} variant="info" type="button">
						Medium Projects
					</Button>
					<Button className={styles.filterButtons} variant="info" type="button">
						Large Projects
					</Button>
				</div>
			</div>
			<div className={styles.projectsContainer}>
				<h3 className={styles.freelanceTitle}>Freelance Work</h3>
				<div className={styles.freelanceContainer}>
					<PaidProjectCards />
				</div>
				<h3 className={styles.personalTitle}>Personal Projects</h3>
				<div className={styles.personalContainer}>
					<PersonalProjectCards />
				</div>
			</div>
		</div>
	);
};

export default ProjectSection;
