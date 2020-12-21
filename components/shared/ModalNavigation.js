import { connect } from 'react-redux';
import { useRouter } from 'next/router'
import { viewModalNavigation } from '../../redux/ModalNavigationDuck';
import HeaderCart from './HeaderCart';
import styles from '../../styles/shared/ModalNavigation.module.css'
import { HiMail } from "react-icons/hi"
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"



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
                        <img src='/logoMain.png' alt='logo' />
                    </div>
                    <div className={styles.headerCart} >
                        <HeaderCart />
                    </div>
                    <nav>
                        <ul className={styles.ul_nav}>
                            <li onClick={() => route1('/')}>
                                <span style={router.pathname === "/" ? { color: '#7fad39' } : { color: 'black' }}>Home</span>
                            </li>
                            <li onClick={() => route1('/shop')}>
                                <span style={router.pathname === "/shop" ? { color: '#7fad39' } : { color: 'black' }}>Shop</span>
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
                            <li><FaFacebook/></li>
                            <li><FaTwitter style={{margin:'0 10px'}}/></li>
                            <li><FaInstagram/></li>
                        </ul>
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <ul style={{ display: 'flex', paddingInlineStart: 0, flexDirection: 'column' }}>
                            <li>
                                <HiMail style={{width:20, height:20, marginRight:10}}/>
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
        viewModalNavigation: (f) => dispatch(viewModalNavigation(f))
    }
}

const mapStateToProps = (state) => ({
    showModal: state.modalNavigation.showModal,
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalNavigation); 