import { useState } from "react";
import styles from "./ProjectCard.module.css";
import { Button } from "react-bootstrap";
import { default as projects } from "../project-section/project-data.json";

export const ProjectCards = () => {
	const projectsData = projects;

	const [filteredProjects, setFilteredProjects] = useState(projectsData);
	const [sizeFilter, setSizeFilter] = useState("all");
	const [techFilter, setTechFilter] = useState("all");

	const handleSizeFilter = (size) => {
		setSizeFilter(size);
		const filteredBySize =
			size === "all"
				? projectsData
				: projectsData.filter((project) => project.size === size);
		const filteredByTech =
			techFilter === "all"
				? filteredBySize
				: filteredBySize.filter((project) => project.technology === techFilter);
		setFilteredProjects(filteredByTech);
	};

	const handleTechFilter = (tech) => {
		setTechFilter(tech);
		const filteredByTech =
			tech === "all"
				? projectsData
				: projectsData.filter((project) => project.technology === tech);
		const filteredBySize =
			sizeFilter === "all"
				? filteredByTech
				: filteredByTech.filter((project) => project.size === sizeFilter);
		setFilteredProjects(filteredBySize);
	};

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.filterContainer}>
					<div className={styles.technologyFilterContainer}>
						<p className={styles.filterTitle}>Technology</p>
						<Button
							id={styles.filterButton}
							className={
								techFilter === "all" ? "btn btn-secondary" : "btn btn-primary"
							}
							onClick={() => handleTechFilter("all")}
						>
							All
						</Button>
						<Button
							id={styles.filterButton}
							className={
								techFilter === "react" ? "btn btn-secondary" : "btn btn-primary"
							}
							onClick={() => handleTechFilter("react")}
						>
							React
						</Button>
						<Button
							id={styles.filterButton}
							className={
								techFilter === "three" ? "btn btn-secondary" : "btn btn-primary"
							}
							onClick={() => handleTechFilter("three")}
						>
							Three.js
						</Button>
						<Button
							id={styles.filterButton}
							className={
								techFilter === "js" ? "btn btn-secondary" : "btn btn-primary"
							}
							onClick={() => handleTechFilter("js")}
						>
							JavaScript
						</Button>
						<Button
							id={styles.filterButton}
							className={
								techFilter === "html" ? "btn btn-secondary" : "btn btn-primary"
							}
							onClick={() => handleTechFilter("html")}
						>
							HTML
						</Button>
					</div>
					<div className={styles.sizeFilterContainer}>
						<p className={styles.filterTitle}>Size</p>
						<Button
							id={styles.filterButton}
							className={
								sizeFilter === "all" ? "btn btn-secondary" : "btn btn-primary"
							}
							onClick={() => handleSizeFilter("all")}
						>
							All
						</Button>
						<Button
							id={styles.filterButton}
							className={
								sizeFilter === "large" ? "btn btn-secondary" : "btn btn-primary"
							}
							onClick={() => handleSizeFilter("large")}
						>
							Large Projects
						</Button>
						<Button
							id={styles.filterButton}
							className={
								sizeFilter === "medium"
									? "btn btn-secondary"
									: "btn btn-primary"
							}
							onClick={() => handleSizeFilter("medium")}
						>
							Medium Projects
						</Button>
						<Button
							id={styles.filterButton}
							className={
								sizeFilter === "small" ? "btn btn-secondary" : "btn btn-primary"
							}
							onClick={() => handleSizeFilter("small")}
						>
							Small Projects
						</Button>
					</div>
				</div>
				<div className={styles.cardContainer}>
					{filteredProjects.map((project) => (
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
		</div>
	);
};

// className={largeFilterState ? "btn btn-primary" : "btn btn-secondary"}
