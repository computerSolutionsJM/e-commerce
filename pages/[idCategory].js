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

const Category = ({ obtenerCategoriaDetalle, categoria_productos, categoria_nombre }) => {
   
    return (
        <>
            <Head>
                <title>Ogani - {obtenerCategoriaDetalle.nombre}</title>
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
                        <Filters />
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
    const paths = [
        { params: { idCategory: '5fd6c2773ca6c16786f1ca4d' } },
        { params: { idCategory: '5fc71a14aa54bf2248249c1d' } },
        { params: { idCategory: '5fd6c2843ca6c16786f1ca4e' } },
        { params: { idCategory: '5fd6c28d3ca6c16786f1ca4f' } },
        { params: { idCategory: '5fd6c2933ca6c16786f1ca50' } },
    ]
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
            props: { obtenerCategoriaDetalle },
            revalidate: 1,
        }
    }
)


const mapStateToProps = (state) => ({
    categoria_productos: state.categorias.categoriaProducts,
    categoria_nombre: state.categorias.categoriaNombre
})

export default connect(mapStateToProps, null)(Category);



