import styles from "./ProjectSection.module.css";
import { Button, Card } from "react-bootstrap";
import { default as projects } from "../../project-data.json";

const ProjectSection = () => {
	console.log(projects);

	return (
		<div className={styles.container}>
			<h2 className={styles.projectTitle}>Projects</h2>
			<div className={styles.projectsContainer}>
				<h3 className={styles.freelanceTitle}>Freelance Work</h3>

				{projects.map((project) => (
					<div key={project.id}>
						<h4>{project.title}</h4>
						<img src={`/${project.image}`} />
						<div>
							<a href={project.site} target="_blank">
								View Live Demo
							</a>
						</div>
						<div>
							<a href={project.github} target="_blank">
								View Code
							</a>
						</div>
					</div>
				))}

				{/** Create Card Component  */}
				{/* <div className={styles.freelanceContainer}>
					<Card style={{ width: "20rem", height: "30rem" }}>
						<Card.Img
							className={styles.cardImage}
							variant="top"
							src="/brads-clothing-thumb.png"
						/>
						<Card.Body>
							<Card.Title>Brad's Clothing</Card.Title>
							<Card.Text>
								This is an e-commerce clothing store made with React that has
								user authentication and database support via firebase.
							</Card.Text>
							<Button variant="primary">Live Demo</Button> {""}
							<Button variant="secondary">Check Out The Code</Button>
						</Card.Body>
					</Card>
				</div> */}
				{/** End Card Component  */}
				<h3 className={styles.personalTitle}>Personal Projects</h3>
				<div className={styles.personalContainer}>
					<Card style={{ width: "20rem", height: "30rem" }}>
						<Card.Img
							className={styles.cardImage}
							variant="top"
							src="/brads-clothing-thumb.png"
						/>
						<Card.Body>
							<Card.Title>Brad's Clothing</Card.Title>
							<Card.Text>
								This is an e-commerce clothing store made with React that has
								user authentication and database support via firebase.
							</Card.Text>
							<Button variant="primary">Live Demo</Button> {""}
							<Button variant="secondary">Check Out The Code</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ProjectSection;

{
	/* 
	<h3>Freelance Work</h3>
	<h3>Personal Projects</h3>
	<h5>Button Filters</h5>
	<h6>Large, Medium, or Small</h6>
	<h6>React, Three.js, Vanilla JS, HTML/CSS</h6>
	<p>Live Demo</p> 
	

	CARD 
	1. Remove description and expand picture in the Card.
	2. Create a hover effect that displays the description
	3. Create a data file that will map over the info and build cards.
	
	FILTER
	1. Create filtering buttons and generate a overall style of the filtering section
	2. Create the logic to filter the projects with conditionally rendering the sections.
	
	
	
	
	
	*/
}
