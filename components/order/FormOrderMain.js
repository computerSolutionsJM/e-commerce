import { useState } from "react"

import { useFormik } from "formik"
import * as Yup from "yup"
import { Spinner, Alert } from "react-bootstrap"
import { GraphQLClient, gql } from "graphql-request"

import { connect } from "react-redux"
import { limpiarItemsPedido } from "../../redux/PedidoDuck"

import styles from "../../styles/order/FormOrder.module.css"
import ModalConfirm from "./ModalConfirm"

const CREAR_PEDIDO = gql`
      mutation crearPedido($input: PedidoInput) {
            crearPedido(input: $input) {
                  nombreCliente
                  apellidoCliente
                  direccion
                  telefono
                  correo
                  item
                  estado
                  costoEnvio
                  precioTotal
            }
      }
`

const client = new GraphQLClient(process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE, { headers: {} })

const FormOrderMain = ({ clearItemsOrder, priceTotal, productsOrder }) => {
      const [load, setLoad] = useState(false)
      const [show, setShow] = useState(false)

      const formik = useFormik({
            initialValues: {
                  nombre: "",
                  apellido: "",
                  direccion: "",
                  correo: "",
                  telefono: "",
            },
            validationSchema: Yup.object({
                  nombre: Yup.string().required("El nombre es requerido"),
                  apellido: Yup.string().required("El apellido es requerido"),
                  direccion: Yup.string().required("La dirección es requerida"),
                  correo: Yup.string().email("Correo incorrecto").required("El correo es requerido"),
                  telefono: Yup.string()
                        .required("El telefono es requerido")
                        .matches(/^[0-9]+$/, "Solo Numeros")
                        .min(10, "minimo 10 digitos")
                        .max(10, "Maximo 10 digitos"),
            }),
            onSubmit: async valores => {
                  setLoad(true)
                  const { nombre, apellido, direccion, correo, telefono } = valores
                  try {
                        const variables = {
                              input: {
                                    nombreCliente: nombre,
                                    apellidoCliente: apellido,
                                    direccion,
                                    telefono,
                                    correo,
                                    precioTotal: priceTotal,
                                    items: productsOrder,
                              },
                        }
                        const data = await client.request(CREAR_PEDIDO, variables)
                        clearItemsOrder()
                        setLoad(false)
                        setShow(true)
                  } catch (error) {
                        console.log("error", error)
                        setLoad(false)
                        setShow(true)
                  }
            },
      })

      return (
            <>
                  <div>
                        <form onSubmit={formik.handleSubmit}>
                              <div className={styles.main_name_last}>
                                    <div className={styles.name_last}>
                                          <label>Nombres</label>
                                          <input id="nombre" type="text" value={formik.values.nombre} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                          {formik.touched.nombre && formik.errors.nombre ? (
                                                <Alert variant="danger">
                                                      <span style={{ fontWeight: "bold" }}>{formik.errors.nombre}</span>
                                                </Alert>
                                          ) : null}
                                    </div>
                                    <div className={styles.name_last}>
                                          <label>Apellidos</label>
                                          <input id="apellido" type="text" value={formik.values.apellido} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                          {formik.touched.apellido && formik.errors.apellido ? (
                                                <Alert variant="danger">
                                                      <span style={{ fontWeight: "bold" }}>{formik.errors.apellido}</span>
                                                </Alert>
                                          ) : null}
                                    </div>
                              </div>

                              <div className={styles.input_all}>
                                    <label>Direccion</label>
                                    <input id="direccion" type="text" value={formik.values.direccion} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.direccion && formik.errors.direccion ? (
                                          <Alert variant="danger">
                                                <span style={{ fontWeight: "bold" }}>{formik.errors.direccion}</span>
                                          </Alert>
                                    ) : null}
                              </div>
                              <div className={styles.input_all}>
                                    <label>Correo Electronico</label>
                                    <input id="correo" type="text" value={formik.values.correo} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.correo && formik.errors.correo ? (
                                          <Alert variant="danger">
                                                <span style={{ fontWeight: "bold" }}>{formik.errors.correo}</span>
                                          </Alert>
                                    ) : null}
                              </div>
                              <div className={styles.input_all}>
                                    <label>Telefono</label>
                                    <input id="telefono" type="text" value={formik.values.telefono} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.telefono && formik.errors.telefono ? (
                                          <Alert variant="danger">
                                                <span style={{ fontWeight: "bold" }}>{formik.errors.telefono}</span>
                                          </Alert>
                                    ) : null}
                              </div>
                              <div className={styles.input_all}>
                                    <button type="submit">{load ? <Spinner size="sm" animation="border" /> : "Solicitar Domicilio"}</button>
                              </div>
                        </form>
                  </div>
                  <ModalConfirm show={show} setShow={setShow} />
            </>
      )
}

const mapStateToProps = state => ({
      productsOrder: state.pedidos.itemsPedido.map((item, index) => {
            return {
                  idProducto: item.idProducto,
                  nombreProducto: item.nombreProducto,
                  cantidad: item.cantidad,
                  medida: item.medida,
                  precioUnitario: item.precioUnitario,
                  precioTotal: item.precioTotal,
            }
      }),
      priceTotal: state.pedidos.itemsPedido.reduce((sum, { precioTotal }) => sum + precioTotal, 0),
})

const mapDispatchToProps = dispatch => {
      return {
            clearItemsOrder: () => dispatch(limpiarItemsPedido()),
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormOrderMain)
