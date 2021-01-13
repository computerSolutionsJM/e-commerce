import { useEffect } from "react"
import { connect } from "react-redux"
import { FiShoppingCart, FiSearch } from "react-icons/fi"
import { BsFillStarFill } from "react-icons/bs"
import { Col } from "react-bootstrap"

import styles from "../../styles/index/products.module.css"
import DetailProduct from "../shared/Detailproduct"

const Products = ({ productos, triggerModal, addCart, changeSort, changeSortCategory }) => {

      useEffect(() => {}, [changeSort, changeSortCategory])

      return (
            <>
                  {productos.map((item, index) => {
                        return (
                              <Col key={index} xs={6} md={4} style={{ marginTop: 15 }}>
                                    <div className={styles.product_grid} style={{ marginBottom: 8 }}>
                                          <div className={styles.product_image}>
                                                <span className={styles.image}>
                                                      <img className={styles.pic_1} src={item.urlImagen} alt={item.nombre} />
                                                </span>
                                                {item.disponible ? (
                                                      <span className={styles.product_sale_label} style={{ background: "#7fad39" }}>
                                                            En Venta
                                                      </span>
                                                ) : (
                                                      <span className={styles.product_sale_label} style={{ background: "red" }}>
                                                            No disponible
                                                      </span>
                                                )}
                                                <ul className={styles.product_links}>
                                                      <li
                                                            onClick={() => {
                                                                  addCart(item)
                                                            }}
                                                      >
                                                            <span>
                                                                  <i />
                                                                  <FiShoppingCart style={{ height: 20, width: 20 }} />
                                                            </span>
                                                      </li>
                                                      <li
                                                            onClick={() => {
                                                                  triggerModal(item)
                                                            }}
                                                      >
                                                            <span>
                                                                  <i />
                                                                  <FiSearch style={{ height: 20, width: 20 }} />
                                                            </span>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div className={styles.product_content}>
                                                <h3 className={styles.title}>
                                                      <span>{item.nombre}</span>
                                                </h3>

                                                {[1, 2, 3, 4, 5].map((_, index) => {
                                                      return <BsFillStarFill key={index} className={styles.rating_product} />
                                                })}
                                                <div className={styles.price}>
                                                      <span></span>${item.precio}
                                                </div>
                                          </div>
                                    </div>
                              </Col>
                        )
                  })}
                  <DetailProduct />
            </>
      )
}


const mapStateToProps = state => ({
       changeSort: state.productos.changeSort,
       changeSortCategory:state.categorias.changeSortCategory
})

export default connect(mapStateToProps, null)(Products)
