import styles from "./HeroSection.module.css";
import { Button } from "react-bootstrap";
import AnimationText from "../animation-text/AnimationText";

const HeroSection = () => {
	const smallIntroWords = "Hi, my name is".split("");
	const nameWords = "Brad Babines".split("");
	const firstLineIntroWords = "Welcome to my portfolio!".split("");
	const secondLineIntroWords =
		`I'm a front-end software engineer that builds digital experiences with React and Three.js`.split(
			""
		);

	return (
		<div className={styles.container}>
			<div className={styles.secondContainer}>
				<div className={styles.textContainer}>
					<div className={styles.hideOnSmallScreens}>
						<div>
							{/* Small Intro Animation */}
							{smallIntroWords.map((letter) => {
								return (
									<AnimationText>
										<h6 className={styles.smallIntro}>
											{letter === " " ? "\u00A0" : letter}
										</h6>
									</AnimationText>
								);
							})}
						</div>

						{/* Name Word Animation */}
						<div>
							{nameWords.map((letter) => {
								return (
									<AnimationText>
										<h1 className={styles.name}>
											{letter === " " ? "\u00A0" : letter}
										</h1>
									</AnimationText>
								);
							})}
						</div>

						{/* Divs for Firefly animations */}
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>
						<div className={styles.firefly}></div>

						{/* Intro Word Animation */}
						<div>
							{firstLineIntroWords.map((letter) => {
								return (
									<AnimationText>
										<p className={styles.firstLineIntro}>
											{letter === " " ? "\u00A0" : letter}
										</p>
									</AnimationText>
								);
							})}
						</div>

						{/* Second Line Animation */}
						<div>
							{secondLineIntroWords.map((letter) => {
								return (
									<AnimationText>
										<p className={styles.secondLineIntro}>
											{letter === " " ? "\u00A0" : letter}
										</p>
									</AnimationText>
								);
							})}
						</div>
						<div className={styles.buttonContainer}>
							<a href="resume.pdf" target="_blank" rel="noopener noreferrer">
								<Button variant="info" className={styles.resumeButton}>
									Check out my resume
								</Button>
							</a>
						</div>
					</div>

					<div className={styles.hideOnBigScreens}>
						<div className={styles.secondContainer}>
							<div className={styles.textContainer}>
								<h6 className={styles.smallIntro}>Hi, my name is</h6>

								<h1 className={styles.name}>Brad Babines</h1>

								{/* Divs for Firefly animations */}
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>
								<div className={styles.firefly}></div>

								<p className={styles.firstLineIntro}>
									Welcome to my portfolio!
								</p>

								<p className={styles.secondLineIntro}>
									I'm a front-end software engineer that builds digital
									experiences with React and Three.js
								</p>
								<div className={styles.buttonContainer}>
									<a
										href="resume.pdf"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button variant="info" className={styles.resumeButton}>
											Check out my resume
										</Button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
