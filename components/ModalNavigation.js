import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { viewModalNavigation } from '../redux/ModalNavigationDuck';
import HeaderCart from '../components/HeaderCart';
import styles from '../styles/ModalNavigation.module.css'



const ModalNavigation = ({ showModal, viewModalNavigation }) => {

    const router = useRouter();

    const handleClose = () => {
        viewModalNavigation()

    };

    const route1 = (route_) => {
        viewModalNavigation()
        router.push(route_)
    }

  

    return (
        <>
            <div className={styles.sidenav_container} style={showModal ? { width: '80%' } : { width: 0 }} >
                <div style={{ width: '100%', padding: '25px 18px' }}>
                    <div className={styles.imgLogo} >
                        <img src='/logoMain.png' />
                    </div>
                    <div className={styles.headerCart} >
                        <HeaderCart />
                    </div>
                    <nav>
                        <ul className={styles.ul_nav}>
                            <li>
                                <span onClick={() => route1('/')} style={router.pathname === "/" ? { color: '#7fad39' } : { color: 'black' }}>Home</span>
                            </li>
                            <li>
                                <span onClick={() => route1('/shop')} style={router.pathname === "/shop" ? { color: '#7fad39' } : { color: 'black' }}>Shop</span>
                            </li>
                            <li>
                                <span>Page</span>
                            </li>
                            <li>
                                <span>Contac</span>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            <div className={styles.backdrop_container} style={showModal ? { display: "block" } : { display: "none" }} onClick={handleClose} />
        </>

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        viewModalNavigation: bindActionCreators(viewModalNavigation, dispatch)
    }
}

const mapStateToProps = (state) => ({
    showModal: state.modalNavigation.showModal,
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalNavigation); 