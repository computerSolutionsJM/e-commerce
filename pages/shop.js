import Head from 'next/head'
import ContainerMain from '../components/ContainerMain'

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
        <h1>shop</h1>
      </ContainerMain>
    </>
  );
}

export default Shop;