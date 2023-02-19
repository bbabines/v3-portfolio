import styles from "./ProjectCard.module.css";
import { default as projects } from "../project-section/project-data.json";
import { Button } from "react-bootstrap";
import { useState } from "react";

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
				<div>
					Technology:
					<Button
						className={
							techFilter === "all" ? "btn btn-secondary" : "btn btn-primary"
						}
						onClick={() => handleTechFilter("all")}
					>
						All
					</Button>
					<Button
						className={
							techFilter === "react" ? "btn btn-secondary" : "btn btn-primary"
						}
						onClick={() => handleTechFilter("react")}
					>
						React
					</Button>
					<Button
						className={
							techFilter === "three" ? "btn btn-secondary" : "btn btn-primary"
						}
						onClick={() => handleTechFilter("three")}
					>
						Three.js
					</Button>
					<Button
						className={
							techFilter === "js" ? "btn btn-secondary" : "btn btn-primary"
						}
						onClick={() => handleTechFilter("js")}
					>
						JavaScript
					</Button>
					<Button
						className={
							techFilter === "html" ? "btn btn-secondary" : "btn btn-primary"
						}
						onClick={() => handleTechFilter("html")}
					>
						HTML
					</Button>
				</div>
				<div>
					Size:
					<Button
						className={
							sizeFilter === "all" ? "btn btn-secondary" : "btn btn-primary"
						}
						onClick={() => handleSizeFilter("all")}
					>
						All
					</Button>
					<Button
						className={
							sizeFilter === "large" ? "btn btn-secondary" : "btn btn-primary"
						}
						onClick={() => handleSizeFilter("large")}
					>
						Large Projects
					</Button>
					<Button
						className={
							sizeFilter === "medium" ? "btn btn-secondary" : "btn btn-primary"
						}
						onClick={() => handleSizeFilter("medium")}
					>
						Medium Projects
					</Button>
					<Button
						className={
							sizeFilter === "small" ? "btn btn-secondary" : "btn btn-primary"
						}
						onClick={() => handleSizeFilter("small")}
					>
						Small Projects
					</Button>
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
