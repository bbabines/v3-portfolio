import { useState } from "react";

import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Footer = () => {
	const [showModal, setShowModal] = useState(false);

	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);

	return (
		<div className={styles.container}>
			{/* <h1 className={styles.logo}>3D Logo</h1> */}
			<div className={styles.iconContainer}>
				<a
					className={styles.githubIcon}
					href="https://github.com/bbabines"
					target="_blank"
				>
					<FaGithub className={styles.icons} />
				</a>
				{/* <FaLinkedin className={styles.icons} /> */}
			</div>
			<div className={styles.versionContainer}>
				<div
					className={styles.modalContainer}
					style={{ display: "block", position: "initial" }}
				>
					<Modal show={showModal} onHide={handleClose}>
						<Modal.Header>
							<Modal.Title>Previous Portfolio Versions</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<p>Version 1</p>
							<p>Version 2</p>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
				<p className={styles.version} onClick={handleShow}>
					v3.0
				</p>
			</div>
			<div className={styles.iconContainer}>
				{/* <FaGithub className={styles.icons} /> */}
				<a href="https://www.linkedin.com/in/bradbabines/" target="_blank">
					<FaLinkedin className={styles.icons} />
				</a>
			</div>
		</div>
	);
};

export default Footer;
