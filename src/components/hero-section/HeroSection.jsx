import styles from "./HeroSection.module.css";
import { Button } from "react-bootstrap";

const HeroSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.secondContainer}>
				<div className={styles.textContainer}>
					<h6>Hi, my name is</h6>
					<h1>Brad Babines</h1>
					<p>Welcome to my portfolio!</p>
					<p>
						I'm a front-end software engineer that builds digital experiences
						with React and Three.js
					</p>
					<div className={styles.buttonContainer}>
						<Button variant="info">Check out my resume</Button>
					</div>
				</div>
				<div className={styles.animationContainer}>
					<h2>3D Element</h2>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
