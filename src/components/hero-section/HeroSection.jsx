import styles from "./HeroSection.module.css";

const HeroSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h6>Hi, my name is</h6>
				<h1>Brad Babines</h1>
				<p>Welcome to my portfolio!</p>
				<p>
					I'm a front-end software engineer that builds digital experiences with
					React and Three.js
				</p>
			</div>
			<div className={styles.buttonContainer}>
				<button className={styles.resumeButton} type="button">
					Check out my resume
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
