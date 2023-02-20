import styles from "./AboutSection.module.css";

const AboutSection = () => {
	return (
		<div id="about" className={styles.container}>
			<h2 className={styles.aboutTitle}>About</h2>

			<div className={styles.aboutContainer}>
				<div className={styles.descriptionContainer}>
					<p>
						<span style={{ color: " #4bf1d0" }}>
							Hello! I'm a React developer and I enjoy building websites,
							applications, and immersive experiences.
						</span>
					</p>
					{/* <br /> */}
					<p>
						While I’ve always loved computers, my passion for coding is
						relatively new. I stumbled upon this new venture when a friend and I
						were trying to bring a concept to life. We were at the point where
						our ideas needed to be tested but there was no funding for the
						project. So I decided to learn to code. To my surprise, I loved it!
					</p>
					{/* <br /> */}
					<p>
						<span style={{ color: "white" }}>
							I began using The Odin Project, Free Code Camp, and Codecademy as
							introductory resources for this new chapter in my life.
							Afterwards, I further refined my coding skills from Bob Ziroll and
							Kevin Powell on Scrimba. I then decided to leave my formal
							education and career in healthcare behind. Fast-forward to today
							and I am working at a software company getting a foundation of
							technical knowledge under my belt while doing freelance web
							development on the side.
						</span>
					</p>
					{/* <br /> */}
					<p>
						I continue to refine my coding skills while building my passion
						project. I've recently discovered that 3D content, animations, and
						micro-interactions are a source of joy.
					</p>
					{/* <br /> */}
					<p>
						Outside of coding I have strong interests in Brazilian Jiu Jitsu
						(BJJ), working out, online-gaming, and spending time with my family.
					</p>
				</div>
				<div className={styles.pictureContainer}>
					<img
						src="Brad.jpeg"
						alt="a picture of Brad Babines"
						className={styles.profilePicture}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
