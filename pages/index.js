import Head from 'next/head'
import { connect } from 'react-redux'
import { wrapper } from '../redux/store'
import { obtenerPokemones } from '../redux/pokeDuck'
import { getCategorias } from '../redux/ObtenerCategoriasDuck'
import { gql, GraphQLClient } from 'graphql-request'
import ContainerMain from '../components/shared/ContainerMain'
import { Row, Col, CardDeck, Card } from 'react-bootstrap';

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

const Index = ({ pokemones }) => {

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
        <Row style={{ marginTop: 10 }}>
          <Col >1 of 2</Col>
          <Col lg={9}>
            <Row >
              {pokemones.map((item, index) => {
                return (
                  <Col md={6} lg={4}>
                    <Card key={index} style={{marginBottom: 5}}>
                      <Card.Img variant="top" src="/index/fotoPrueba.jpg" />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content. This content is a little bit longer.
                      </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </Card.Footer>
                    </Card>
                  </Col>
                )
              })}
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
    store.dispatch(obtenerPokemones(obtenerProductos))
    return {
      props: {},
      revalidate: 1,
    }
  }
)

const mapStateToProps = (state) => ({
  pokemones: state.pokemones.array,
})

export default connect(mapStateToProps, null)(Index)



