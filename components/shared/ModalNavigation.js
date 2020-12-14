import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { viewModalNavigation } from '../../redux/ModalNavigationDuck';
import HeaderCart from './HeaderCart';
import styles from '../../styles/shared/ModalNavigation.module.css'



const ModalNavigation = ({ showModal, viewModalNavigation }) => {

    const router = useRouter();

    const handleClose = () => {
        viewModalNavigation('234')

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
                    <div style={{ marginTop: 20 }}>
                        <ul style={{ display: 'flex', paddingInlineStart: 0 }}>
                            <li><img src='/shared/facebook.svg' alt='facebook' width={7} style={{ marginRight: 10, cursor: 'pointer' }} /></li>
                            <li><img src='/shared/twiter.svg' alt='twiter' width={16} style={{ margin: '0 10px', cursor: 'pointer' }} /></li>
                            <li><img src='/shared/instagram.svg' alt='instagram' width={16} style={{ marginLeft: 10, cursor: 'pointer' }} /></li>
                        </ul>
                    </div>
        
                    <div style={{ marginTop: 20 }}>
                        <ul style={{ display: 'flex', paddingInlineStart: 0, flexDirection: 'column' }}>
                            <li>
                                <img src='/shared/email.svg' alt='likes' width={20} style={{ cursor: 'pointer', marginRight: 10 }} />
                                <span style={{ borderRight: '2px solid #DDDDDD', paddingRight: 60, fontSize: 15 }}>hello@colorlib.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className={styles.backdrop_container} style={showModal ? { display: "block" } : { display: "none" }} onClick={handleClose} />
        </>

    );
}

const mapDispatchToProps = (dispatch) => {

    return {
        //viewModalNavigation:  bindActionCreators(viewModalNavigation, dispatch)
        viewModalNavigation: (f) => dispatch(viewModalNavigation(f))
    }
}

const mapStateToProps = (state) => ({
    showModal: state.modalNavigation.showModal,
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalNavigation); 