import Head from "next/head"

import { wrapper } from "../redux/store"
import { connect } from "react-redux"
import { getCategorias } from "../redux/CategoriasDuck"

import { gql, GraphQLClient } from "graphql-request"
import { Row, Col, Card } from "react-bootstrap"

import ContainerMain from "../components/shared/ContainerMain"
import BannerMain from "../components/shoppingCart/BannerMain"


const GET_CATEGORIAS = gql`
      {
            obtenerCategorias {
                  id
                  nombre
            }
      }
`

const Contact = () => {
      return (
            <>
                  <Head>
                        <title>Contacto - Ogani</title>
                        <meta charSet="UTF-8" />
                        <meta name="description" content="Ogani Template" />
                        <meta name="keywords" content="Ogani, unica, creative, html" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                        <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <ContainerMain>
                        <Row style={{ marginTop: 30, marginBottom: 30 }}>
                          <BannerMain title='Contactanos' title_='Contacto'/>
                        </Row>
                        <Row style={{ marginTop: 10 }}>
                              <Col>1 of 2</Col>
                              <Col lg={9}>
                                    <Row>
                                          <Col md={6} lg={4}>
                                                <Card>
                                                      <Card.Img variant="top" />
                                                      <Card.Body>
                                                            <Card.Title>Card title</Card.Title>
                                                            <Card.Text>
                                                                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                                            </Card.Text>
                                                      </Card.Body>
                                                      <Card.Footer>
                                                            <small className="text-muted">Last updated 3 mins ago</small>
                                                      </Card.Footer>
                                                </Card>
                                          </Col>
                                    </Row>
                              </Col>
                        </Row>
                  </ContainerMain>
            </>
      )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
      const client = new GraphQLClient(process.env.ENV_LOCAL_VARIABLE, { headers: {} })
      const { obtenerCategorias } = await client.request(GET_CATEGORIAS)
      store.dispatch(getCategorias(obtenerCategorias))
      return {
            props: {},
            revalidate: 1,
      }
})


export default connect(null, null)(Contact)

