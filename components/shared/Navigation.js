import Link from "next/link"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import { viewModalNavigation } from "../../redux/ModalNavigationDuck"
import ModalNavigation from "./ModalNavigation"
import styles from "../../styles/shared/Navigation.module.css"
import HeaderCart from "./HeaderCart"
import { FaBars } from "react-icons/fa"

const Navigation = ({ viewModalNavigation }) => {
      const router = useRouter()
      const handleShow = () => viewModalNavigation()

      return (
            <header className={styles.header_main}>
                  <div className={styles.navbar_main}>
                        <div className={styles.navbar_main_img}>
                              <img src="/logoMain.png" alt="logo" />
                        </div>
                        <nav className={styles.navbar_main_menu}>
                              <ul>
                                    <li>
                                          <Link href="/">
                                                <a style={router.pathname === "/" ? { color: "#7fad39" } : { color: "black" }}>HOME</a>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link href="/shop">
                                                <a style={router.pathname === "/shop" ? { color: "#7fad39" } : { color: "black" }}>SHOP</a>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link href="/page">
                                                <a style={router.pathname === "/page" ? { color: "#7fad39" } : { color: "black" }} href="/page">
                                                      PAGE
                                                </a>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link href="/contact">
                                                <a style={router.pathname === "/contact" ? { color: "#7fad39" } : { color: "black" }} href="/contact">
                                                      CONTACT
                                                </a>
                                          </Link>
                                    </li>
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
            </header>
      )
}

const mapDispatchToProps = dispatch => {
      return {
            viewModalNavigation: () => dispatch(viewModalNavigation("567"))
            //viewModalNavigation: bindActionCreators(viewModalNavigation, dispatch)
      }
}

export default connect(null, mapDispatchToProps)(Navigation)
