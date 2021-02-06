import styles from "../../styles/shared/ContainerMain.module.css";
import Navigation from "./Navigation";
import NavSearch from "./NavSearch";
import NavbarHeader from "./NavbarHeader";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

const ContainerMain = (props) => {
	return (
		<div className={styles.main_structure}>
			<NavbarHeader />
			<Container className={styles.body_structure}>
				<Navigation />
				<NavSearch />
				<div>{props.children}</div>
			</Container>
			<Footer />
		</div>
	);
};

export default ContainerMain;
