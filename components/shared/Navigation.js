import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { viewModalNavigation } from "../../redux/ModalNavigationDuck";
import ModalNavigation from "./ModalNavigation";
import styles from "../../styles/shared/Navigation.module.css";
import HeaderCart from "./HeaderCart";
import { FaBars } from "react-icons/fa";

import { motion } from 'framer-motion'

const Navigation = ({ viewModalNavigation }) => {
	const router = useRouter();
	const handleShow = () => viewModalNavigation();

	return (
		<motion.header className={styles.header_main}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay:0.5, duration: 0.5}} >
			<div className={styles.navbar_main}>
				<div className={styles.navbar_main_img}>
					<motion.img src="/logoMain.png" alt="logo" whileHover={{scale: 1.3}} />
				</div>
				<nav className={styles.navbar_main_menu}>
					<ul>
						<motion.li whileHover={{scale: 1.5}} transition={{type: 'spring', stiffness: 500}}>
							<Link href="/">
								<a style={router.pathname === "/" ? { color: "#7fad39" } : { color: "black" }}>INICIO</a>
							</Link>
						</motion.li>
						<motion.li whileHover={{scale: 1.5}} transition={{type: 'spring', stiffness: 500}}>
							<Link href="/contact">
								<a style={router.pathname === "/contact" ? { color: "#7fad39" } : { color: "black" }}>CONTACTO</a>
							</Link>
						</motion.li>
						<motion.li whileHover={{scale: 1.5}} transition={{type: 'spring', stiffness: 500}}>
							<Link href="/shoppingCart">
								<a style={router.pathname === "/shoppingCart" ? { color: "#7fad39" } : { color: "black" }}>CARRITO</a>
							</Link>
						</motion.li>
					</ul>
				</nav>
				<div className={styles.navbar_main_menu_desktop}>
					<HeaderCart />
				</div>
				<div className={styles.navbar_main_bars}>
					<div className={styles.navbar_main_bars_icon} onClick={handleShow}>
						<FaBars style={{ height: 19, width: 19 }} />
					</div>
				</div>
			</div>
			<div className={styles.navbar_main_menu_desktop_2}>
				<HeaderCart />
			</div>
			<ModalNavigation />
		</motion.header>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		viewModalNavigation: () => dispatch(viewModalNavigation("567")),
	};
};

export default connect(null, mapDispatchToProps)(Navigation);
