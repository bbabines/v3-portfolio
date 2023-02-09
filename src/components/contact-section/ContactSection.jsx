import styles from "./ContactSection.module.css";
import { Button } from "react-bootstrap";

const ContactSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.formTitle}>Get In Touch</h2>
			<div className={styles.formContainer}>
				<div className={styles.nameContainer}>
					<input
						placeholder="First Name"
						type="text"
						required
						className={styles.contactForm}
					/>
					<input
						placeholder="Last Name"
						type="text"
						className={styles.contactForm}
					/>
				</div>
				<div className={styles.formInfoContainer}>
					<input
						placeholder="Email Address"
						type="email"
						required
						className={styles.contactForm}
					/>
					<input
						placeholder="Phone No."
						type="number"
						className={styles.contactForm}
					/>
				</div>
				<textarea
					placeholder="Message"
					type="text"
					required
					className={styles.textArea}
				/>
				<Button type="submit" className={styles.contactButton}>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default ContactSection;
