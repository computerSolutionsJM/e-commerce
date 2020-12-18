import styles from '../../styles/shared/Navsearch.module.css'
import { Accordion } from 'react-bootstrap';
import { connect } from 'react-redux'
import Link from 'next/link';


const NavSearch = ({ categorias }) => {


    return (
        <div className={styles.nav_search_main}>
            <div className={styles.nav_search_main_1} >
                <Accordion >
                    <div className={styles.collapse}>
                        <img src='/shared/barsWhite.svg' alt='likes' width={15} />
                        <span style={{ margin: '0 12px', color: 'white', fontWeight: 'bold' }}>CATEGORIAS</span>
                        <Accordion.Toggle eventKey="0" className={styles.btnToggle}>
                            <img src='/shared/arrowDown.svg' alt='likes' width={15} />
                        </Accordion.Toggle>
                    </div>
                    <div>
                        <Accordion.Collapse eventKey="0" className={styles.accordionColapsable} >
                            <ul>
                                {categorias.map((item, index) => {
                                    return (
                                        <Link href={'/[idCategory]'} as={`/${item.id}`} key={index}>
                                            <li style={{ marginBottom: 10, cursor: 'pointer' }} >{item.nombre}</li>
                                        </Link>

                                    )
                                })}
                            </ul>
                        </Accordion.Collapse>

                    </div>

                </Accordion>

            </div>
            <div className={styles.nav_search_main_2}>
                <input className={styles.inputSearch} placeholder='Buscar productos' />
                <button className={styles.buttonSearch}>Buscar</button>
            </div>
            <div className={styles.nav_search_main_3}>
                <span className={styles.iconPhone}>
                    <img src='/shared/phone.svg' alt='likes' width={15} />
                </span>
                <ul className={styles.ulPhone}>
                    <li style={{ fontWeight: 'bold' }}>+65 11.188.888</li>
                    <li style={{ color: '#6f6f6f', fontSize: 14 }}>support 24/7 time</li>
                </ul>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    categorias: state.categorias.categorias,
})

export default connect(mapStateToProps, null)(NavSearch);

