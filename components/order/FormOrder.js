import { useState } from "react"

import { useFormik } from "formik"
import * as Yup from "yup"
import { Col, Spinner } from "react-bootstrap"
import { GraphQLClient, gql } from "graphql-request"

import { connect } from "react-redux"
import { limpiarItemsPedido } from "../../redux/PedidoDuck"

import styles from "../../styles/order/FormOrder.module.css"

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

const FormOrder = ({ productsOrder, clearItemsOrder }) => {
      const [load, setLoad] = useState(false)

      const formik = useFormik({
            initialValues: {
                  nombre: "",
                  apellido: "",
                  direccion: "",
                  correo: "",
                  telefono: "",
            },
            validationSchema: Yup.object({
                  nombre: Yup.string().required("El nombre es obligatorio"),
                  apellido: Yup.string().required("El apellido es obligatorio"),
                  direccion: Yup.string().required("La dirección es obligatorio"),
                  correo: Yup.string().email("Correo incorrecto").required("El correo es obligatorio"),
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
                                    precioTotal: productsOrder.reduce((sum, { precioTotal }) => sum + precioTotal, 0),
                                    items: productsOrder,
                              },
                        }
                        const data = await client.request(CREAR_PEDIDO, variables)
                        clearItemsOrder()
                        setLoad(false)
                  } catch (error) {
                        console.log("error", error.response.errors[0].message)
                        setLoad(false)
                  }
            },
      })

      return (
            <>
                  <Col xs={12}>
                        <div className={styles.text_details_buildings}>
                              <span>Detalles de facturación</span>
                        </div>
                  </Col>

                  <Col xs={12} lg={8}>
                        <div>
                              <form onSubmit={formik.handleSubmit}>
                                    <div className={styles.main_name_last}>
                                          <div className={styles.name_last}>
                                                <label>Nombres</label>
                                                <input id="nombre" type="text" value={formik.values.nombre} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                {formik.touched.nombre && formik.errors.nombre ? <label style={{ color: "red", fontSize: 10 }}>*{formik.errors.nombre}</label> : null}
                                          </div>
                                          <div className={styles.name_last}>
                                                <label>Apellidos</label>
                                                <input id="apellido" type="text" value={formik.values.apellido} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                {formik.touched.apellido && formik.errors.apellido ? <label style={{ color: "red", fontSize: 10 }}>*{formik.errors.apellido}</label> : null}
                                          </div>
                                    </div>

                                    <div className={styles.input_all}>
                                          <label>Direccion</label>
                                          <input id="direccion" type="text" value={formik.values.direccion} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                          {formik.touched.direccion && formik.errors.direccion ? <label style={{ color: "red", fontSize: 10 }}>*{formik.errors.direccion}</label> : null}
                                    </div>
                                    <div className={styles.input_all}>
                                          <label>Correo Electronico</label>
                                          <input id="correo" type="text" value={formik.values.correo} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                          {formik.touched.correo && formik.errors.correo ? <label style={{ color: "red", fontSize: 10 }}>*{formik.errors.correo}</label> : null}
                                    </div>
                                    <div className={styles.input_all}>
                                          <label>Telefono</label>
                                          <input id="telefono" type="text" value={formik.values.telefono} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                          {formik.touched.telefono && formik.errors.telefono ? <label style={{ color: "red", fontSize: 10 }}>*{formik.errors.telefono}</label> : null}
                                    </div>
                                    <div className={styles.input_all}>
                                          <button type="submit" >{load ? <Spinner size="sm" animation="border" color='#7fad39'/> : "Enviar"}</button>
                                    </div>
                              </form>
                        </div>
                  </Col>
                  <Col xs={12} lg={4}>
                        <div className={styles.main_resume_order}>
                              <span></span>
                        </div>
                  </Col>
            </>
      )
}

const mapDispatchToProps = dispatch => {
      return {
            clearItemsOrder: () => dispatch(limpiarItemsPedido()),
      }
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
})

export default connect(mapStateToProps, mapDispatchToProps)(FormOrder)
