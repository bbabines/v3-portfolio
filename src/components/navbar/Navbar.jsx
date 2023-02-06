import { useState } from "react";
import { IoMoonOutline, IoPartlySunnyOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./Navbar.module.css";

const Navbar = () => {
	const [darkmode, setDarkmode] = useState(true);

	return (
		<div className={styles.container}>
			<p className={styles.signature}>Brad Babines</p>

			{darkmode ? (
				<IoPartlySunnyOutline className={styles.navLinks} />
			) : (
				<IoMoonOutline className={styles.navLinks} />
			)}

			<p className={styles.homeLink}>Home</p>
			<p className={styles.navLinks}>About</p>
			<p className={styles.navLinks}>Skills</p>
			<p className={styles.navLinks}>Projects</p>
		</div>
	);
};

export default Navbar;
