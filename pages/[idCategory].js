import Head from 'next/head'
import { wrapper } from '../redux/store'
import { connect } from 'react-redux';
import { gql, GraphQLClient } from 'graphql-request'
import ContainerMain from '../components/shared/ContainerMain'
import TitleProducts from '../components/shared/TitleProducts'
import { getCategorias, getCategoriaDetalle } from '../redux/CategoriasDuck'
import Filters from '../components/index/Filters'
import { Row, Col } from 'react-bootstrap'
import Products from '../components/index/Products'

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
        producto{
            id
            nombre
            nomenclaturaMedida
            urlImagen
            precio
            disponible
        }
        creado
  }
}
`

const Category = ({ categoria_productos, categoria_nombre }) => {

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
                        <Filters productos={categoria_productos} />
                    </Col>
                    <Col lg={9}>
                        <Row>
                            <TitleProducts title={categoria_nombre} numeroProductos={categoria_productos.length} />
                        </Row>
                        <Row >
                            <Products productos={categoria_productos} />
                        </Row>
                    </Col>
                </Row>
            </ContainerMain>
        </>
    );
}




export async function getStaticPaths() {
    const client = new GraphQLClient(process.env.ENV_LOCAL_VARIABLE, { headers: {} })
    const { obtenerCategorias } = await client.request(GET_CATEGORIAS)
    const paths = obtenerCategorias.map(item => {
        return {
            params: { idCategory: item.id }
        }
    })
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = wrapper.getStaticProps(
    async ({ store, params }) => {
        const client = new GraphQLClient(process.env.ENV_LOCAL_VARIABLE, { headers: {} })
        const { obtenerCategorias } = await client.request(GET_CATEGORIAS)
        const { obtenerCategoriaDetalle } = await client.request(GET_CATEGORY_DETALLE, { id: params.idCategory })
        store.dispatch(getCategorias(obtenerCategorias))
        store.dispatch(getCategoriaDetalle(obtenerCategoriaDetalle))
        return {
            props: {},
            revalidate: 1,
        }
    }
)


const mapStateToProps = (state) => ({
    categoria_productos: state.categorias.categoriaProducts,
    categoria_nombre: state.categorias.categoriaNombre
})

export default connect(mapStateToProps, null)(Category);



