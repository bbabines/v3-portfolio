import styles from "./ProjectCard.module.css";
import { default as projects } from "../project-section/project-data.json";
import { Button } from "react-bootstrap";
import { useState } from "react";

export const PaidProjectCards = () => {
	// Render array with everything as default
	// Create <Projects /> component
	// onClick button adds a filter and returns projects array. May need nested if/else or ternary logic
	// Create logic for two filters
	// Test if both filters reduce array together.

	const [paidFilter, setPaidFilter] = useState(true);

	const togglePaidFilter = () => {
		setPaidFilter((prevFilter) => !prevFilter);
	};

	const paidProjects = projects.filter((project) => project.paid === true);

	return (
		<div className={styles.container}>
			<Button onClick={togglePaidFilter}>Test HTML Button</Button>
			{paidFilter && (
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
								<Button disabled className={styles.demoLink}>
									Live Demo
								</Button>
								{/* <a
								href={project.site}
								target="_blank"
								className={styles.demoLink}
							>
								Live Demo
							</a> */}
								<Button disabled className={styles.projectLink}>
									View Code
								</Button>
								{/* <a
								href={project.github}
								target="_blank"
								className={styles.projectLink}
							>
								View Code
							</a> */}
							</div>
						</div>
					))}
				</div>
			)}
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
								Live Demo
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
