import styles from "../../styles/shared/NavbarHeader.module.css";
import { Container } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import { motion } from 'framer-motion'

const NavbarHeader = () => {
	return (
		<motion.div className={styles.navbar_main}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5}}>
			<Container>
				<div className={styles.navbar_main_container}>
					<div>
						<HiMail style={{ height: 20, width: 20 }} />
						<span style={{ borderRight: "2px solid #DDDDDD", paddingRight: 25, fontSize: 15 }}>hello@colorlib.com</span>
						<span style={{ paddingLeft: 25, fontSize: 15 }}>Free Shipping for all Order of $99</span>
					</div>
					<div>
						<FaFacebook />
						<FaTwitter style={{ margin: "0 10px" }} />
						<FaInstagram />
					</div>
				</div>
			</Container>
		</motion.div>
	);
};

export default NavbarHeader;
