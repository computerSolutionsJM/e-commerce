import Head from 'next/head'
import { wrapper } from '../redux/store'
import { connect } from 'react-redux';
import { useEffect } from 'react'
import { obtenerProductos_ } from '../redux/productosDuck'
import { getCategorias } from '../redux/CategoriasDuck'
import { gql, GraphQLClient } from 'graphql-request'
import ContainerMain from '../components/shared/ContainerMain'
import TitleProducts from '../components/shared/TitleProducts'
import Filters from '../components/index/Filters'
import Products from '../components/index/Products'
import { Row, Col } from 'react-bootstrap'


const GET_MESSAGES = gql`
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
          creado
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

const Index = ({ productos, changeSort }) => {

  
  useEffect(() => {
  }, [changeSort])


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
            <Filters productos={productos} />
          </Col>
          <Col lg={9}>
            <Row>
              <TitleProducts title='Todos' numeroProductos={productos.length} />
            </Row>
            <Row >
              <Products productos={productos} />
            </Row>
          </Col>
        </Row>
      </ContainerMain>
    </>
  )
}


export const getStaticProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    const client = new GraphQLClient(process.env.ENV_LOCAL_VARIABLE, { headers: {} })
    const { obtenerProductos } = await client.request(GET_MESSAGES)
    const { obtenerCategorias } = await client.request(GET_CATEGORIAS)
    store.dispatch(getCategorias(obtenerCategorias))
    store.dispatch(obtenerProductos_(obtenerProductos))
    return {
      props: {},
      revalidate: 1,
    }
  }
)



const mapStateToProps = (state) => ({
  productos: state.productos.productos,
  changeSort: state.productos.changeSort
})

export default connect(mapStateToProps, null)(Index);



