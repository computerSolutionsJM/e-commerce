import { connect } from "react-redux"
import { useRouter } from "next/router"

import { Col } from "react-bootstrap"

import styles from "../../styles/shoppingCart/ResumeCart.module.css"

const Resumecart = ({ precioTotalPedido }) => {
      const router = useRouter()

      const routeIndex = () => {
            router.push("/")
      }

      const routeOrders = () => {
            router.push("/order")
      }

      return (
            <>
                  <div style={{ display: "flex", width: "100%" }}>
                        <Col>
                              <div className={styles.button_continue_cart}>
                                    <button onClick={routeIndex}>CONTINUAR COMPRANDO</button>
                              </div>
                        </Col>
                        <Col>
                              <div className={styles.button_actualizar_cart}>
                                    <button>ACTUALIZAR CARRITO</button>
                              </div>
                        </Col>
                  </div>
                  <div className={styles.main_total_cart}>
                        <Col>
                              <div>
                                    <h5>CUPONES</h5>
                                    <div className={styles.cupons}>
                                          <input placeholder="Ingresa codigo cupon" />
                                          <button>Aplicar Cupon</button>
                                    </div>
                              </div>
                        </Col>
                        <Col>
                              <div className={styles.text_total_cart}>
                                    <span>Total Carrito</span>
                                    <div className={styles.subtotal}>
                                          <span style={{ fontSize: 14 }}>SubTotal</span>
                                          <span style={{ fontSize: 15, color: "red" }}>${precioTotalPedido}</span>
                                    </div>
                                    <div className={styles.total}>
                                          <span style={{ fontSize: 14 }}>Total</span>
                                          <span style={{ fontSize: 15, color: "red" }}>${precioTotalPedido}</span>
                                    </div>
                                    <button onClick={routeOrders}>Solicitar Domicilio</button>
                              </div>
                        </Col>
                  </div>
            </>
      )
}

const mapStateToProps = state => ({
      precioTotalPedido: state.pedidos.itemsPedido.reduce((sum, { precioTotal }) => sum + precioTotal, 0),
})

export default connect(mapStateToProps, null)(Resumecart)
