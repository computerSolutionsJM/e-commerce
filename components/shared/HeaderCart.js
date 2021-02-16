import { connect } from "react-redux";
import { useRouter } from "next/router";

import { motion } from 'framer-motion'

import { Badge } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { BsHeartFill } from "react-icons/bs";

import styles from "../../styles/shared/HeaderCart.module.css";
import { viewModalNavigation } from "../../redux/ModalNavigationDuck";

const HeaderCart = ({ cantidadProductos, viewModalNavigation, showModal, precioTotalPedido }) => {
	const router = useRouter();

	const route = (route_) => {
		if (showModal) {
			viewModalNavigation();
		}
		router.push(route_);
	};

	return (
		<div className={styles.headerCart_main}>
			<ul>
				<li style={{ display: "flex" }}>
					<div>
						<BsHeartFill />
					</div>
					<div style={{ display: "flex", alignItems: "flex-start" }}>
						<Badge pill={true} variant="success" style={{ fontSize: 9, background: "#7fad39" }}>
							1
						</Badge>
					</div>
				</li>
				<motion.li style={{ display: "flex" }} whileHover={{scale: 1.5}} transition={{type: 'spring', stiffness: 500}}>
					<div style={{ cursor: "pointer" }} onClick={() => route("/shoppingCart")}>
						<FiShoppingCart />
					</div>
					<div style={{ display: "flex", alignItems: "flex-start" }}>
						<Badge pill={true} variant="success" style={{ fontSize: 9, background: "#7fad39" }}>
							{cantidadProductos}
						</Badge>
					</div>
				</motion.li>
			</ul>
			<div style={{ marginLeft: 10 }}>
				Total:<span style={{ fontWeight: 700 }}>$ {precioTotalPedido}</span>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cantidadProductos: state.pedidos.itemsPedido.length,
	showModal: state.modalNavigation.showModal,
	precioTotalPedido: state.pedidos.itemsPedido.reduce((sum, { precioTotal }) => sum + precioTotal, 0),
});

const mapDispatchToProps = (dispatch) => {
	return {
		viewModalNavigation: (f) => dispatch(viewModalNavigation(f)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCart);
