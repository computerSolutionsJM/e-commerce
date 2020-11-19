import Head from 'next/head'
import Navigation from './Navigation'
import { Container } from 'react-bootstrap';

const ContainerMain = (props) => {
    return (

        <Container >
            <Navigation />
            <div>
                {props.children}
            </div>
        </Container>


    );
}

export default ContainerMain; 