import { useState, useEffect } from "react";

import { connect } from "react-redux";

import { agregarCantidadProductoPedido } from "../../redux/PedidoDuck";

const CountProducts = ({ index, cantidad, precioUnitario, addRemoveQuantity }) => {
	const [quantity, setQuantity] = useState(cantidad);

	useEffect(() => {
		if (cantidad !== quantity) {
			let quantityProduct = {
				index,
				cantidad: quantity,
				precioTotal: precioUnitario * quantity,
			};
			addRemoveQuantity(quantityProduct);
		}
	}, [quantity]);

	const addQuantityProduct = () => {
		setQuantity(quantity + 1);
	};

	const removeQuantityProduct = () => {
		setQuantity(quantity - 1);
	};

	return (
		<div style={{ display: "flex", background: "#f3f6fb", minWidth: "90px", justifyContent: "space-between", alignItems: "center", padding: "5px" }}>
			<span onClick={removeQuantityProduct} style={{ cursor: "pointer" }}>
				-
			</span>
			<span>{quantity}</span>
			<span onClick={addQuantityProduct} style={{ cursor: "pointer" }}>
				+
			</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addRemoveQuantity: (infoProduct) => dispatch(agregarCantidadProductoPedido(infoProduct)),
	};
};

export default connect(null, mapDispatchToProps)(CountProducts);
