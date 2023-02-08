import styles from "./ProjectSection.module.css";
import { Button, Card } from "react-bootstrap";

const ProjectSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.projectTitle}>Projects</h2>
			<div className={styles.projectsContainer}>
				<h3 className={styles.freelanceTitle}>Freelance Work</h3>
				<div className={styles.freelanceContainer}>
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
	*/
}
