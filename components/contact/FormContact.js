import { Col } from "react-bootstrap";

import styles from "../../styles/contact/formContact.module.css";

const FormContact = () => {
	return (
		<Col>
			<div className={styles.form_data_title}>
				<h3>Deja tu Mensaje</h3>
			</div>
			<div className={styles.form_data_input}>
				<input placeholder="Tu Nombre" />
				<input placeholder="Tu Correo" />
			</div>
			<div className={styles.form_data_text}>
				<textarea placeholder="Tu Mensaje" />
			</div>
			<div className={styles.form_data_send}>
				<button>ENVIAR MENSAJE</button>
			</div>
		</Col>
	);
};

export default FormContact;
