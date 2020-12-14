import Head from 'next/head'
import Navigation from './Navigation'
import NavSearch from './NavSearch'
import { Container } from 'react-bootstrap';
import styles from '../../styles/shared/ContainerMain.module.css'


const ContainerMain = (props) => {
    return (
        <>
            <div className={styles.navbar_main}>
                <Container>
                    <div className={styles.navbar_main_container} >
                        <div>
                            <img src='/shared/email.svg' alt='likes' width={20} style={{ cursor: 'pointer', marginRight: 10 }} />
                            <span style={{ borderRight: '2px solid #DDDDDD', paddingRight: 25, fontSize: 15 }}>hello@colorlib.com</span>
                            <span style={{ paddingLeft: 25, fontSize: 15 }}>Free Shipping for all Order of $99</span>
                        </div>

                        <div>
                            <img src='/shared/facebook.svg' alt='likes' width={7} style={{ margin: '0 10px', cursor: 'pointer' }} />
                            <img src='/shared/twiter.svg' alt='likes' width={16} style={{ margin: '0 10px', cursor: 'pointer' }} />
                            <img src='/shared/instagram.svg' alt='likes' width={16} style={{ marginLeft: 10, cursor: 'pointer' }} />
                        </div>

                    </div>

                </Container>

            </div>
            <Container >
                <Navigation />
                <NavSearch/>
                <div>
                    {props.children}
                </div>
            </Container>

        </>
    );
}

export default ContainerMain; 