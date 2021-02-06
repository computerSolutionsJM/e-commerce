import { Col } from "react-bootstrap";

import { connect } from "react-redux";

import styles from "../../styles/order/FormOrder.module.css";
import FormOrderMain from "./FormOrderMain";

const FormOrder = ({ productsOrder, priceTotal }) => {
	return (
		<>
			<Col xs={12}>
				<div className={styles.text_details_buildings}>
					<span>Detalles de facturación</span>
				</div>
			</Col>

			<Col xs={12} lg={8}>
				<FormOrderMain />
			</Col>
			<Col xs={12} lg={4}>
				<div className={styles.main_resume_order}>
					<h4>Tu Orden</h4>
					<div className={styles.checkout__order__products}>
						<span>Productos</span> <span>Total</span>
					</div>
					<ul className={styles.list_products} style={productsOrder.length > 5 ? { overflowY: "scroll" } : null}>
						{productsOrder.map((item, index) => {
							return (
								<li key={index}>
									<span>{item.nombreProducto}</span> <span style={{ fontWeight: "bold" }}>${item.precioTotal}</span>
								</li>
							);
						})}
					</ul>
					<div className={styles.checkout__order__products_sub}>
						<span>Subtotal</span> <span>${priceTotal}</span>
					</div>
					<div className={styles.checkout__order__products_sub}>
						<span>Total</span> <span style={{ color: "red" }}>${priceTotal}</span>
					</div>
				</div>
			</Col>
		</>
	);
};

const mapStateToProps = (state) => ({
	productsOrder: state.pedidos.itemsPedido.map((item, index) => {
		return {
			idProducto: item.idProducto,
			nombreProducto: item.nombreProducto,
			cantidad: item.cantidad,
			medida: item.medida,
			precioUnitario: item.precioUnitario,
			precioTotal: item.precioTotal,
		};
	}),
	priceTotal: state.pedidos.itemsPedido.reduce((sum, { precioTotal }) => sum + precioTotal, 0),
});

export default connect(mapStateToProps, null)(FormOrder);
