import Navigation from './Navigation'
import NavSearch from './NavSearch'
import NavbarHeader from './NavbarHeader'
import { Container } from 'react-bootstrap';



const ContainerMain = (props) => {
    return (
        <>
            <NavbarHeader />
            <Container >
                <Navigation />
                <NavSearch />
                <div>
                    {props.children}
                </div>
            </Container>

        </>
    );
}

export default ContainerMain; 