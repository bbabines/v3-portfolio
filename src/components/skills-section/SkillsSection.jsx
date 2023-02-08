import styles from "./SkillsSection.module.css";
import { FaReact, FaBootstrap, FaHtml5, FaSass, FaCode } from "react-icons/fa";
import {
	SiJavascript,
	SiStyledcomponents,
	SiTypescript,
	SiCss3,
	SiThreedotjs,
	SiNextdotjs,
	SiVite,
	SiFirebase,
	SiGithub,
	SiNetlify,
} from "react-icons/si";

const SkillsSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.skillsTitle}>Skills</h2>
			<div className={styles.frontEndTitle}>
				<h3>Front End Development Technologies</h3>
			</div>
			<div className={styles.skillsContainer}>
				<ul>
					<li>
						<FaReact className={styles.react} />
						React
					</li>
					<li>
						<SiTypescript className={styles.typescript} />
						Typescript
					</li>
					<li>
						<SiThreedotjs className={styles.threeJs} />
						Three.js
					</li>
					<li>
						<SiJavascript className={styles.javascript} /> JavasScript (ES6)
					</li>
					<li>
						<SiStyledcomponents className={styles.styledComponents} /> Styled
						Components
					</li>
					<li>
						<FaBootstrap className={styles.bootstrap} /> Bootstrap
					</li>
					<li>
						<FaSass className={styles.sass} /> SASS (SCSS)
					</li>
					<li>
						<SiCss3 className={styles.css} />
						CSS3
					</li>
					<li>
						<FaHtml5 className={styles.html} />
						HTML5
					</li>
				</ul>
			</div>
			<div className={styles.toolsTitle}>
				<h3>Tools</h3>
			</div>
			<div className={styles.toolsContainer}>
				<ul>
					<li>
						<SiNextdotjs /> Next.js
					</li>
					<li>
						<SiVite className={styles.vite} /> Vite
					</li>
					<li>
						<SiFirebase className={styles.firebase} />
						Firebase
					</li>
					<li>
						<SiNetlify className={styles.netlify} />
						Netlify
					</li>
					<li>
						<SiGithub />
						GitHub
					</li>
					<li>
						<FaCode className={styles.vsCode} />
						VSCode
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SkillsSection;
