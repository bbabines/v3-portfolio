import styles from "./ProjectCard.module.css";
import { default as projects } from "../project-section/project-data.json";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { FaLess } from "react-icons/fa";

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
					<button onClick={() => handleSizeFilter("all")}>All</button>
					<button onClick={() => handleSizeFilter("small")}>
						Small Projects
					</button>
					<button onClick={() => handleSizeFilter("medium")}>
						Medium Projects
					</button>
					<button onClick={() => handleSizeFilter("large")}>
						Large Projects
					</button>
				</div>
				<div>
					<button onClick={() => handleTechFilter("all")}>All</button>
					<button onClick={() => handleTechFilter("react")}>React</button>
					<button onClick={() => handleTechFilter("three")}>Three.js</button>
					<button onClick={() => handleTechFilter("js")}>JavaScript</button>
					<button onClick={() => handleTechFilter("html")}>HTML</button>
				</div>
				<ul>
					{filteredProjects.map((project) => (
						<li key={project.id}>
							<h2>{project.title}</h2>
							<img src={project.image} alt={project.title} />
							<p>Size: {project.size}</p>
							<p>Technology: {project.technology}</p>
							<a href={project.site}>Live Site</a>
							<a href={project.github}>GitHub Repo</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

// const [largeFilterState, setLargeFilterState] = useState(false);
// const largeFilter = allProjects.filter((project) => project.size === "large");
// const toggleLargeFilter = () => {
// 	setLargeFilterState((prevFilter) => !prevFilter);
// };

// const [mediumFilterState, setMediumFilterState] = useState(false);
// const mediumFilter = allProjects.filter(
// 	(project) => project.size === "medium"
// );
// const toggleMediumFilter = () => {
// 	setMediumFilterState((prevFilter) => !prevFilter);
// };

// const [smallFilterState, setSmallFilterState] = useState(false);
// const smallFilter = allProjects.filter((project) => project.size === "small");
// const toggleSmallFilter = () => {
// 	setSmallFilterState((prevFilter) => !prevFilter);
// };

// const [paidFilterState, setPaidFilterState] = useState(false);
// const paidFilter = projects.filter((project) => project.paid === true);
// const togglePaidFilter = () => {
// 	setPaidFilterState((prevFilter) => !prevFilter);
// };

// const [personalFilterState, setPersonalFilterState] = useState(false);
// const personalFilter = projects.filter((project) => project.paid === false);
// const togglePersonalFilter = () => {
// 	setPersonalFilterState((prevFilter) => !prevFilter);
// };

// className={largeFilterState ? "btn btn-primary" : "btn btn-secondary"}
// onClick={toggleLargeFilter}
{
	/* <Button
				className={mediumFilterState ? "btn btn-primary" : "btn btn-secondary"}
				onClick={toggleMediumFilter}
			>
				Test Medium Filter
			</Button>
			<Button onClick={toggleSmallFilter}>Test Small Filter</Button>
			<Button onClick={togglePaidFilter}>Paid</Button>
			<Button onClick={togglePersonalFilter}>Personal</Button> */
}

// {
// 	largeFilterState && (
// 		<div className={styles.cardContainer}>
// 			{largeFilter.map((project) => (
// 				<div key={project.id}>
// 					<h6 className={styles.cardTitle}>{project.title}</h6>
// 					<div className={styles.description}>
// 						{/**Make Description into a component and/or part of the data.JSON */}
// 						{/* <p>This is the project description. It goes on and on</p> */}
// 					</div>
// 					<div className={styles.imageContainer}>
// 						<img src={`/${project.image}`} className={styles.cardImage} />
// 					</div>
// 					<div className={styles.linkContainer}>
// 						<a href={project.site} target="_blank" className={styles.demoLink}>
// 							Live Demo
// 						</a>
// 						<a
// 							href={project.github}
// 							target="_blank"
// 							className={styles.projectLink}
// 						>
// 							View Code
// 						</a>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// {
// 	personalFilterState && (
// 		<div className={styles.cardContainer}>
// 			{personalFilter.map((project) => (
// 				<div key={project.id}>
// 					<h6 className={styles.cardTitle}>{project.title}</h6>
// 					<div className={styles.description}>
// 						{/**Make Description into a component and/or part of the data.JSON */}
// 						{/* <p>This is the project description. It goes on and on</p> */}
// 					</div>
// 					<div className={styles.imageContainer}>
// 						<img src={`/${project.image}`} className={styles.cardImage} />
// 					</div>
// 					<div className={styles.linkContainer}>
// 						<a href={project.site} target="_blank" className={styles.demoLink}>
// 							Live Demo
// 						</a>
// 						<a
// 							href={project.github}
// 							target="_blank"
// 							className={styles.projectLink}
// 						>
// 							View Code
// 						</a>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// {
// 	mediumFilterState && (
// 		<div className={styles.cardContainer}>
// 			{mediumFilter.map((project) => (
// 				<div key={project.id}>
// 					<h6 className={styles.cardTitle}>{project.title}</h6>
// 					<div className={styles.description}>
// 						{/**Make Description into a component and/or part of the data.JSON */}
// 						{/* <p>This is the project description. It goes on and on</p> */}
// 					</div>
// 					<div className={styles.imageContainer}>
// 						<img src={`/${project.image}`} className={styles.cardImage} />
// 					</div>
// 					<div className={styles.linkContainer}>
// 						<a
// 							href={project.site}
// 							target="_blank"
// 							className={styles.demoLink}
// 						>
// 							Live Demo
// 						</a>
// 						<a
// 							href={project.github}
// 							target="_blank"
// 							className={styles.projectLink}
// 						>
// 							View Code
// 						</a>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// {
// 	smallFilterState && (
// 		<div className={styles.cardContainer}>
// 			{smallFilter.map((project) => (
// 				<div key={project.id}>
// 					<h6 className={styles.cardTitle}>{project.title}</h6>
// 					<div className={styles.description}>
// 						{/**Make Description into a component and/or part of the data.JSON */}
// 						{/* <p>This is the project description. It goes on and on</p> */}
// 					</div>
// 					<div className={styles.imageContainer}>
// 						<img src={`/${project.image}`} className={styles.cardImage} />
// 					</div>
// 					<div className={styles.linkContainer}>
// 						<a
// 							href={project.site}
// 							target="_blank"
// 							className={styles.demoLink}
// 						>
// 							Live Demo
// 						</a>
// 						<a
// 							href={project.github}
// 							target="_blank"
// 							className={styles.projectLink}
// 						>
// 							View Code
// 						</a>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// {
// 	paidFilterState && (
// 		<div className={styles.cardContainer}>
// 			{paidFilter.map((project) => (
// 				<div key={project.id}>
// 					<h6 className={styles.cardTitle}>{project.title}</h6>
// 					<div className={styles.description}>
// 						{/**Make Description into a component and/or part of the data.JSON */}
// 						{/* <p>This is the project description. It goes on and on</p> */}
// 					</div>
// 					<div className={styles.imageContainer}>
// 						<img src={`/${project.image}`} className={styles.cardImage} />
// 					</div>
// 					<div className={styles.linkContainer}>
// 						<a
// 							href={project.site}
// 							target="_blank"
// 							className={styles.demoLink}
// 						>
// 							Live Demo
// 						</a>
// 						<a
// 							href={project.github}
// 							target="_blank"
// 							className={styles.projectLink}
// 						>
// 							View Code
// 						</a>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }
