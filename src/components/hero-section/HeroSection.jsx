import styles from "./HeroSection.module.css";

const HeroSection = () => {
	return (
		<div className={styles.container}>
			<h6>Hi, my name is</h6>
			<h1>Brad Babines</h1>
			<p>Welcome to my portfolio!</p>
			<p>
				I'm a front-end software engineer that builds digital experiences with
				React and Three.js
			</p>
			<button className={styles.resumeButton} type="button">
				Check out my resume
			</button>
		</div>
	);
};

export default HeroSection;
