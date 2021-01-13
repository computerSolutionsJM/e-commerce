import Head from "next/head"


import { wrapper } from "../redux/store"
import { connect } from "react-redux"
import { getCategorias, getCategoriaDetalle } from "../redux/CategoriasDuck"
import { detalleProducto } from "../redux/productosDuck"

import { gql, GraphQLClient } from "graphql-request"
import { Row, Col } from "react-bootstrap"
import toast, { Toaster } from "react-hot-toast"

import Filters from "../components/index/Filters"
import Products from "../components/index/Products"
import ContainerMain from "../components/shared/ContainerMain"
import TitleProducts from "../components/shared/TitleProducts"
import { agregarItemPedido } from "../redux/PedidoDuck"

const GET_CATEGORIAS = gql`
      {
            obtenerCategorias {
                  id
                  nombre
            }
      }
`
const GET_CATEGORY_DETALLE = gql`
      query obtenerCategoriaDetalle($id: ID!) {
            obtenerCategoriaDetalle(id: $id) {
                  id
                  nombre
                  producto {
                        id
                        nombre
                        descripcion
                        unidadMedida
                        nomenclaturaMedida
                        urlImagen
                        precio
                        disponible
                  }
            }
      }
`

const Category = ({ categoria_productos, categoria_nombre, triggerModalDetail, addItemOrder }) => {

      const triggerModal = infoProduct => {
            triggerModalDetail(infoProduct)
      }

      const addCart = async item => {
        let itemSend = {
              idProducto: item.id,
              nombreProducto: item.nombre,
              cantidad: 1,
              medida: item.nomenclaturaMedida,
              urlImagen:item.urlImagen,
              precioUnitario: item.precio,
              precioTotal: item.precio,
        }
        addItemOrder(itemSend)
        toast.success("Producto Agregado!")
  }

      return (
            <>
                  <Head>
                        <title>Ogani - {categoria_nombre}</title>
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
                                    <Filters productos={categoria_productos} flag={2} />
                              </Col>
                              <Col lg={9}>
                                    <Row>
                                          <TitleProducts title={categoria_nombre} numeroProductos={categoria_productos.length} />
                                    </Row>
                                    <Row>
                                          <Products productos={categoria_productos} triggerModal={triggerModal} addCart={addCart} />
                                    </Row>
                              </Col>
                        </Row>
                  </ContainerMain>
                  <Toaster />
            </>
      )
}

export async function getStaticPaths() {
      const client = new GraphQLClient(process.env.ENV_LOCAL_VARIABLE, { headers: {} })
      const { obtenerCategorias } = await client.request(GET_CATEGORIAS)
      const paths = obtenerCategorias.map(item => {
            return {
                  params: { idCategory: item.id },
            }
      })
      return {
            paths,
            fallback: false,
      }
}

export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
      const client = new GraphQLClient(process.env.ENV_LOCAL_VARIABLE, { headers: {} })
      const { obtenerCategorias } = await client.request(GET_CATEGORIAS)
      const { obtenerCategoriaDetalle } = await client.request(GET_CATEGORY_DETALLE, { id: params.idCategory })
      store.dispatch(getCategorias(obtenerCategorias))
      store.dispatch(getCategoriaDetalle(obtenerCategoriaDetalle))
      return {
            props: {},
            revalidate: 1,
      }
})

const mapDispatchToProps = dispatch => {
      return {
            triggerModalDetail: infoProduct => dispatch(detalleProducto(infoProduct)),
            addItemOrder: item => dispatch(agregarItemPedido(item)),
      }
}

const mapStateToProps = state => ({
      categoria_productos: state.categorias.categoriaProducts,
      categoria_nombre: state.categorias.categoriaNombre,
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
