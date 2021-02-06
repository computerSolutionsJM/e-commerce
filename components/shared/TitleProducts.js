import { connect } from "react-redux";
import { Col } from "react-bootstrap";

const TitleProducts = ({ title, numeroProductos, flag, categoria_nombre, categoria_productos }) => {
	return (
		<>
			<Col style={{ marginTop: 10 }}>
				<span style={{ fontWeight: "bold", fontSize: 20, borderBottom: "5px solid #7fad39" }}>{flag === 1 ? title : categoria_nombre}</span>
			</Col>
			<Col style={{ marginTop: 10 }}>
				<span style={{ fontWeight: "bold", fontSize: 20 }}>
					{flag === 1 ? numeroProductos : categoria_productos}
					<span style={{ fontSize: 14, fontWeight: "lighter", color: "#b2b2b2" }}> Productos</span>
				</span>
			</Col>
		</>
	);
};

const mapStateToProps = (state) => ({
	numeroProductos: state.productos.productos.length,
	categoria_productos: state.categorias.categoriaProducts.length,
	categoria_nombre: state.categorias.categoriaNombre,
});

export default connect(mapStateToProps, null)(TitleProducts);
