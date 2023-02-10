import styles from "./ContactSection.module.css";
import { Button } from "react-bootstrap";

const ContactSection = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.animation}>Animation</h1>
			<div className={styles.formContainer}>
				<h2 className={styles.formTitle}>Get In Touch</h2>
				<form
					action="mailto:bbabines@gmail.com"
					method="POST"
					encType="text"
					name="EmailForm"
				>
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
							required
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
							type="tel"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							className={styles.contactForm}
						/>
					</div>
					<textarea
						placeholder="Message"
						type="text"
						required
						className={styles.textArea}
					/>
				</form>
				<Button type="submit" className={styles.contactButton}>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default ContactSection;
