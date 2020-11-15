import Head from 'next/head'
import Navigation from './Navigation'
import { Container } from 'react-bootstrap';

const ContainerMain = (props) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="Ogani Template" />
                <meta name="keywords" content="Ogani, unica, creative, html" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
            </Head>
            <Container >
                <Navigation />
                <div>
                    {props.children}
                </div>
            </Container>

        </>
    );
}

export default ContainerMain; 