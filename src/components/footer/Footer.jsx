import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Modal } from "bootstrap";

const Footer = () => {
	return (
		<div className={styles.container}>
			<h1>3D Logo</h1>
			<div className={styles.versionContainer}>
				<p className={styles.version}>v3.0</p>
			</div>
			<div className={styles.iconContainer}>
				<FaGithub className={styles.icons} />
				<FaLinkedin className={styles.icons} />
			</div>
		</div>
	);
};

export default Footer;
