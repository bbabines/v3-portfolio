import { IoMoonOutline, IoPartlySunnyOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<p className={styles.signature}>Brad Babines</p>
			<IoMoonOutline className={styles.navLinks} />
			<IoPartlySunnyOutline className={styles.navLinks} />
			<p className={styles.navLinks}>Home</p>
			<p className={styles.navLinks}>About</p>
			<p className={styles.navLinks}>Skills</p>
			<p className={styles.navLinks}>Projects</p>
		</div>
	);
};

export default Navbar;
