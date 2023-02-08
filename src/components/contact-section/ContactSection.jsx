import styles from "./ContactSection.module.css";

const ContactSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<h1>Contact</h1>
				<h3>Form</h3>
				<p>Name</p>
				<p>Email</p>
				<p>Message</p>
			</div>
		</div>
	);
};

export default ContactSection;
