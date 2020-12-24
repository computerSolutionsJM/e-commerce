import { connect } from "react-redux"

import { Col, Table } from "react-bootstrap"
import { MdDelete } from "react-icons/md"

const ItemsPedido = ({ productosPedido }) => {


      return (
            <Col>
                  <Table responsive="sm">
                        <thead>
                              <tr>
                                    <th style={{ textAlign: "center" }}>Productos</th>
                                    <th style={{ textAlign: "center" }}>Precio</th>
                                    <th style={{ textAlign: "center" }}>Cantidad</th>
                                    <th style={{ textAlign: "center" }}>Total</th>
                                    <th style={{ textAlign: "center" }}>Eliminar</th>
                              </tr>
                        </thead>
                        <tbody>
                              {productosPedido.map((item, index) => {
                                    return (
                                          <tr key={index} style={{ height: 80 }}>
                                                <td>
                                                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                            <img src={item.urlImagen} alt={item.nombre} width={70} height={70} />
                                                            <span style={{ textTransform: "capitalize", textAlign: "center", lineHeight: 1 }}>{item.nombreProducto}</span>
                                                      </div>
                                                </td>
                                                <td>
                                                      <div style={{ height: 80, display: "flex", justifyContent: "center", alignItems: "center" }}>{item.precioUnitario}</div>
                                                </td>
                                                <td>
                                                      <div style={{ height: 80, display: "flex", justifyContent: "center", alignItems: "center" }}> {item.cantidad}</div>
                                                </td>
                                                <td>
                                                      <div style={{ height: 80, display: "flex", justifyContent: "center", alignItems: "center" }}> {item.precioTotal}</div>
                                                </td>
                                                <td>
                                                      <div style={{ height: 80, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <MdDelete style={{ width: 20, height: 20, cursor: "pointer" }} color="red" />
                                                      </div>
                                                </td>
                                          </tr>
                                    )
                              })}
                        </tbody>
                  </Table>
            </Col>
      )
}

const mapStateToProps = state => ({
      productosPedido: state.pedidos.itemsPedido,
})

export default connect(mapStateToProps, null)(ItemsPedido)
