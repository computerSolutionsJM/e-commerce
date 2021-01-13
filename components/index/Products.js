import { useEffect } from "react"
import { connect } from "react-redux"
import { FiShoppingCart, FiSearch } from "react-icons/fi"
import { BsFillStarFill } from "react-icons/bs"
import { Col } from "react-bootstrap"

import toast, { Toaster } from "react-hot-toast"

import styles from "../../styles/index/products.module.css"
import DetailProduct from "../shared/Detailproduct"
import { detalleProducto } from "../../redux/productosDuck"
import { agregarItemPedido } from "../../redux/PedidoDuck"

const Products = ({ productos, categoria_productos, triggerModalDetail, changeSort, changeSortCategory, addItemOrder, flag }) => {
      
      useEffect(() => {}, [changeSort, changeSortCategory])

      const getProducts = () => {
            let products = flag === 1 ? productos : categoria_productos
            return products
      }

      const addCart = async item => {
            let itemSend = {
                  idProducto: item.id,
                  nombreProducto: item.nombre,
                  cantidad: 1,
                  medida: item.nomenclaturaMedida,
                  urlImagen: item.urlImagen,
                  precioUnitario: item.precio,
                  precioTotal: item.precio,
            }
            addItemOrder(itemSend)
            toast.success("Producto Agregado!")
      }

      return (
            <>
                  {getProducts().map((item, index) => {
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
                                                                  triggerModalDetail(item)
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
                  <Toaster />
            </>
      )
}

const mapStateToProps = state => ({
      changeSort: state.productos.changeSort,
      changeSortCategory: state.categorias.changeSortCategory,
      productos: state.productos.productos,
      categoria_productos: state.categorias.categoriaProducts,
      categoria_nombre: state.categorias.categoriaNombre,
})

const mapDispatchToProps = dispatch => {
      return {
            triggerModalDetail: infoProduct => dispatch(detalleProducto(infoProduct)),
            addItemOrder: item => dispatch(agregarItemPedido(item)),
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
