import { useState } from "react";

import { connect } from "react-redux";

import { Popover, Overlay, Button, ButtonGroup } from "react-bootstrap";
import { MdDelete, MdCheckCircle, MdCancel } from "react-icons/md";

import { eliminarItemPedido } from "../../redux/PedidoDuck";

const RemoveItem = ({ id, removeItem }) => {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);

	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};

	const succesRemoveItem = () => {
		removeItem(id);
		setShow(!show);
	};

	return (
		<>
			<MdDelete onClick={handleClick} style={{ width: 20, height: 20, cursor: "pointer" }} color="red" />
			<Overlay show={show} placement="top" target={target}>
				<Popover id="popover-contained">
					<Popover.Title as="h3">¡Seguro de Eliminar!</Popover.Title>
					<Popover.Content>
						<ButtonGroup style={{ width: "100%" }} aria-label="Basic example">
							<Button onClick={succesRemoveItem} style={{ display: "flex", alignItems: "center", backgroundColor: "#7fad39", border: "none" }}>
								<MdCheckCircle style={{ width: 18, height: 18, marginRight: 5 }} />
								Si
							</Button>
							<Button onClick={handleClick} variant="light" style={{ display: "flex", alignItems: "center", border: "none" }}>
								<MdCancel style={{ width: 18, height: 18, marginRight: 5 }} />
								No
							</Button>
						</ButtonGroup>
					</Popover.Content>
				</Popover>
			</Overlay>
		</>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeItem: (idProducto) => dispatch(eliminarItemPedido(idProducto)),
	};
};

export default connect(null, mapDispatchToProps)(RemoveItem);
