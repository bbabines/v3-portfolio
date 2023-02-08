import styles from "./SkillsSection.module.css";

const SkillsSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.skillsContainer}>
				<h2>Skills</h2>
				<ul>
					<li>React</li>
					<li>Typescript</li>
					<li>Three.js</li>
					<li>JavasScript (ES6)</li>
					<li>Styled Components</li>
					<li>Bootstrap</li>
					<li>SASS (SCSS)</li>
					<li>CSS3</li>
					<li>HTML5</li>
				</ul>
			</div>
			<div className={styles.toolsContainer}>
				<h2>Tools</h2>
				<ul>
					<li>Next.js</li>
					<li>Vite</li>
					<li>Firebase</li>
					<li>Netlify</li>
					<li>GitHub</li>
					<li>VSCode</li>
				</ul>
			</div>
		</div>
	);
};

export default SkillsSection;
