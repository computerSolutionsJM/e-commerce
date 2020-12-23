import { connect } from "react-redux"

import { Badge } from "react-bootstrap"
import { FiShoppingCart } from "react-icons/fi"
import { BsHeartFill } from "react-icons/bs"

import styles from "../../styles/shared/HeaderCart.module.css"

const HeaderCart = ({ cantidadProductos }) => {
      return (
            <div className={styles.headerCart_main}>
                  <ul>
                        <li style={{ display: "flex" }}>
                              <div>
                                    <BsHeartFill />
                              </div>
                              <div style={{ display: "flex", alignItems: "flex-start" }}>
                                    <Badge pill={true} variant="success" style={{ fontSize: 9, background: "#7fad39" }}>
                                          1
                                    </Badge>
                              </div>
                        </li>
                        <li style={{ display: "flex" }}>
                              <div>
                                    <FiShoppingCart />
                              </div>
                              <div style={{ display: "flex", alignItems: "flex-start" }}>
                                    <Badge pill={true} variant="success" style={{ fontSize: 9, background: "#7fad39" }}>
                                          {cantidadProductos}
                                    </Badge>
                              </div>
                        </li>
                  </ul>
                  <div style={{ marginLeft: 10 }}>
                        Total:<span style={{ fontWeight: 700 }}>$150.000</span>
                  </div>
            </div>
      )
}

const mapStateToProps = state => ({
      cantidadProductos: state.pedidos.itemsPedido.length,
})

export default connect(mapStateToProps, null)(HeaderCart)
