import Head from "next/head"
import { useEffect } from "react"

import { wrapper } from "../redux/store"
import { connect } from "react-redux"
import { detalleProducto, obtenerProductos_ } from "../redux/productosDuck"
import { getCategorias } from "../redux/CategoriasDuck"
import { agregarItemPedido } from "../redux/PedidoDuck"

import { gql, GraphQLClient } from "graphql-request"
import { Row, Col } from "react-bootstrap"
import toast, { Toaster } from "react-hot-toast"

import ContainerMain from "../components/shared/ContainerMain"
import TitleProducts from "../components/shared/TitleProducts"
import Filters from "../components/index/Filters"
import Products from "../components/index/Products"

const GET_PRODUCTOS = gql`
      {
            obtenerProductos {
                  id
                  nombre
                  descripcion
                  precio
                  unidadMedida
                  nomenclaturaMedida
                  urlImagen
                  disponible
            }
      }
`
const GET_CATEGORIAS = gql`
      {
            obtenerCategorias {
                  id
                  nombre
            }
      }
`

const Index = ({ productos, changeSort, triggerModalDetail, addItemOrder }) => {
      useEffect(() => {}, [changeSort])

      const triggerModal = infoProduct => {
            triggerModalDetail(infoProduct)
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
                  <Head>
                        <title>Home - Ogani</title>
                        <meta charSet="UTF-8" />
                        <meta name="description" content="Ogani Template" />
                        <meta name="keywords" content="Ogani, unica, creative, html" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                        <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <ContainerMain>
                        <Row style={{ marginTop: 30 }}>
                              <Col>
                                    <Filters productos={productos} flag={1} />
                              </Col>
                              <Col lg={9}>
                                    <Row>
                                          <TitleProducts title="Todos" numeroProductos={productos.length} />
                                    </Row>
                                    <Row>
                                          <Products productos={productos} triggerModal={triggerModal} addCart={addCart} />
                                    </Row>
                              </Col>
                        </Row>
                  </ContainerMain>
                  <Toaster />
            </>
      )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
      const client = new GraphQLClient(process.env.ENV_LOCAL_VARIABLE, { headers: {} })
      const { obtenerProductos } = await client.request(GET_PRODUCTOS)
      const { obtenerCategorias } = await client.request(GET_CATEGORIAS)
      store.dispatch(getCategorias(obtenerCategorias))
      store.dispatch(obtenerProductos_(obtenerProductos))
      return {
            props: {},
            revalidate: 1,
      }
})

const mapStateToProps = state => ({
      productos: state.productos.productos,
      changeSort: state.productos.changeSort,
})

const mapDispatchToProps = dispatch => {
      return {
            triggerModalDetail: infoProduct => dispatch(detalleProducto(infoProduct)),
            addItemOrder: item => dispatch(agregarItemPedido(item)),
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
