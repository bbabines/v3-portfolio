import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.container}>
			<h1>Footer</h1>
			<div className={styles.iconContainer}>
				<p>Icon</p>
				<p>Icon</p>
				<p>Icon</p>
			</div>
		</div>
	);
};

export default Footer;
