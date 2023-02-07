import { useState } from "react";
import { IoMoonOutline, IoPartlySunnyOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./Navbar.module.css";

const Navbar = () => {
	const [darkmode, setDarkmode] = useState(true);

	return (
		<div className={styles.container}>
			<a className={styles.signature}>Brad Babines</a>

			{darkmode ? (
				<IoPartlySunnyOutline className={styles.navLinks} />
			) : (
				<IoMoonOutline className={styles.navLinks} />
			)}

			<a className={styles.homeLink}>Home</a>
			<a className={styles.navLinks}>About</a>
			<a className={styles.navLinks}>Skills</a>
			<a className={styles.navLinks}>Projects</a>
		</div>
	);
};

export default Navbar;
