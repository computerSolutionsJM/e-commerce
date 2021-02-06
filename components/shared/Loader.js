import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
	return (
		<div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
			<Spinner animation="grow" variant="success" />
		</div>
	);
};

export default Loader;
