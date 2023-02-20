import { useState } from "react";
import { IoMoonOutline, IoPartlySunnyOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./Navbar.module.css";

const Navbar = () => {
	const [darkmode, setDarkmode] = useState(true);

	return (
		<div className={styles.container}>
			<div className={styles.navContainer}>
				<a href="#top" className={styles.signature}>
					Brad Babines
				</a>
				<div className={styles.linkContainer}>
					{/* {darkmode ? (
						<IoPartlySunnyOutline className={styles.navLinks} />
					) : (
						<IoMoonOutline className={styles.navLinks} />
					)} */}

					<a href="#top" className={styles.homeLink}>
						Home
					</a>
					<a href="#about" className={styles.navLinks}>
						About
					</a>
					<a href="#skills" className={styles.navLinks}>
						Skills
					</a>
					<a href="#projects" className={styles.navLinks}>
						Projects
					</a>
					{/* <a href="#contact" className={styles.navLinks}>
						Contact
					</a> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
