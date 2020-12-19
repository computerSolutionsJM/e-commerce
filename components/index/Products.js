
import styles from '../../styles/index/products.module.css'
import { Col } from 'react-bootstrap'
import { FiShoppingCart, FiSearch } from "react-icons/fi"

const Products = ({ productos }) => {

    return (
        <>
            {
                productos.map((item, index) => {
                    return (
                        <Col key={index} xs={6} md={4} style={{ marginTop: 15 }}>
                            <div className={styles.product_grid} style={{ marginBottom: 8 }}>
                                <div className={styles.product_image}>
                                    <span className={styles.image}>
                                        <img className={styles.pic_1} src={item.urlImagen} alt={item.nombre} />
                                    </span>
                                    {
                                        item.disponible ? <span className={styles.product_sale_label} style={{ background: '#7fad39' }} >En Venta</span> : <span className={styles.product_sale_label} style={{ background: 'red' }}>No disponible</span>
                                    }
                                    <ul className={styles.product_links}>
                                        <li><span><i /><FiShoppingCart style={{ height: 20, width: 20 }} /></span></li>
                                        <li><span><i /><FiSearch style={{ height: 20, width: 20 }} /></span></li>
                                    </ul>
                                </div>
                                <div className={styles.product_content}>
                                    <h3 className={styles.title}><span>{item.nombre}</span></h3>
                                    <div className={styles.rating}>
                                        <span>+</span><span>1</span><span>-</span>
                                    </div>
                                    <div className={styles.unity}>
                                        <span>{item.nomenclaturaMedida}</span>
                                    </div>
                                    <div className={styles.price}>
                                        <span></span>
                                        ${item.precio}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
        </>
    )
}



export default Products;
