import Head from 'next/head'
import ContainerMain from '../components/shared/ContainerMain'
import { Row, Col, CardDeck, Card } from 'react-bootstrap';

const Shop = () => {

  return (
    <>
      <Head>
        <title>Shop - Ogani</title>
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
            <Row>
              <Col md={6} lg={4}>
                <Card>
                  <Card.Img variant="top" src="https://picsum.photos/150/200" />
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
            </Row>
          </Col>
        </Row>
      </ContainerMain>
    </>
  );
}

export default Shop;