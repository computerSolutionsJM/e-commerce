import styles from "../../styles/shared/Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className={styles.footer_main}>
			<Container>
				<Row>
					<Col>
						<h3>hola</h3>
					</Col>
					<Col>
						<span>hola</span>
					</Col>
					<Col>
						<span>hola</span>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
