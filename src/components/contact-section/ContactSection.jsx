import styles from "./ContactSection.module.css";
import { Container, Col, Row } from "react-bootstrap";

const ContactSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<Container>
					<Col>
						<Row></Row>
						<textarea placeholder="Message" />
					</Col>
				</Container>
			</div>
		</div>
	);
};

export default ContactSection;

{
	/* <h1>Contact</h1>
					<h3>Form</h3>
					<p>Name</p>
					<p>Email</p>
					<p>Message</p> */
}
