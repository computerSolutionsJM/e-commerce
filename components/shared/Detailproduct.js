import { useState } from "react";

import { connect } from "react-redux";
import { detalleProducto } from "../../redux/productosDuck";
import { agregarItemPedido } from "../../redux/PedidoDuck";

import { Modal } from "react-bootstrap";
import { RiCloseCircleFill } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

import styles from "../../styles/shared/DetailProduct.module.css";

const DetailProduct = ({ showModalDetail, triggerModalDetail, detalleProducto, addItemOrderDetail }) => {
	const [quantity, setQuantity] = useState(1);

	const triggerModal = () => {
		triggerModalDetail();
	};

	const addCart = () => {
		let itemSend = {
			idProducto: detalleProducto.id,
			nombreProducto: detalleProducto.nombre,
			cantidad: quantity,
			medida: detalleProducto.nomenclaturaMedida,
			urlImagen: detalleProducto.urlImagen,
			precioUnitario: detalleProducto.precio,
			precioTotal: detalleProducto.precio * quantity,
		};
		addItemOrderDetail(itemSend);
		triggerModalDetail();
		setQuantity(1);
		toast.success("Producto Agregado!");
	};

	return (
		<>
			<Modal show={showModalDetail} onHide={triggerModal} centered>
				<div className={styles.detail_main}>
					{detalleProducto === undefined ? null : detalleProducto.disponible ? (
						<span className={styles.product_available}>En Venta</span>
					) : (
						<span className={styles.product_not_available}>No disponible</span>
					)}
					<RiCloseCircleFill onClick={triggerModal} className={styles.close_modal} />
					<div className={styles.detail_main_img}>
						<img src={detalleProducto === undefined ? "" : detalleProducto.urlImagen} alt={detalleProducto === undefined ? "" : detalleProducto.nombre} />
					</div>
					<div className={styles.detail_main_text}>
						<h4>{detalleProducto === undefined ? "" : detalleProducto.nombre}</h4>
						<h5>$ {detalleProducto === undefined ? "" : detalleProducto.precio}</h5>
						<p>{detalleProducto === undefined ? "" : detalleProducto.descripcion}</p>
						<div className={styles.characters_product_main}>
							<div className={styles.characters_product_main_title}>
								<span>Unidad</span>
								<span>Nomenclatura</span>
							</div>
							<div className={styles.characters_product_main_specifics}>
								<span>{detalleProducto === undefined ? "" : detalleProducto.unidadMedida}</span>
								<span>{detalleProducto === undefined ? "" : detalleProducto.nomenclaturaMedida}</span>
							</div>
						</div>
						<div className={styles.addCart_main}>
							<div className={styles.addCart_main_add_unity}>
								<span onClick={() => setQuantity(quantity - 1)}>-</span>
								<span>{quantity}</span>
								<span onClick={() => setQuantity(quantity + 1)}>+</span>
							</div>
							<div className={styles.addCart_main_add_cart}>
								<button
									onClick={() => {
										addCart();
									}}
								>
									Agregar al Carrito
								</button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
			<Toaster />
		</>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		triggerModalDetail: () => dispatch(detalleProducto()),
		addItemOrderDetail: (item) => dispatch(agregarItemPedido(item)),
	};
};

const mapStateToProps = (state) => ({
	showModalDetail: state.productos.showModalDetail,
	detalleProducto: state.productos.detalleProducto,
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
