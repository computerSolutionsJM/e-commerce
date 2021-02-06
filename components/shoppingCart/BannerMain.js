import { Col } from "react-bootstrap";

import styles from "../../styles/shoppingCart/ShoppingCart.module.css";

const BannerMain = ({ title, title_ }) => {
	return (
		<Col>
			<div className={styles.banner_main}>
				<span className={styles.banner_main_carrito}>{title}</span>
				<span className={styles.banner_main_ogani}>{title_} - Ogani</span>
			</div>
		</Col>
	);
};

export default BannerMain;
