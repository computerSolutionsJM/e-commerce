
import styles from '../../styles/index/products.module.css'
import { Col } from 'react-bootstrap'

const Products = ({ productos }) => {

    return (
        <>
            {
                productos.map((item, index) => {
                    return (
                        <Col key={index} md={6} lg={4} style={{ marginTop: 15 }}>
                            <div className={styles.product_grid} style={{ marginBottom: 8 }}>
                                <div className={styles.product_image}>
                                    <span className={styles.image}>
                                        <img className={styles.pic_1} src={item.urlImagen} alt={item.nombre} />
                                    </span>
                                    <span className={styles.product_sale_label}>Sale</span>
                                    <ul className={styles.product_links}>
                                        <li><span><i /><img src='/index/heart.svg' alt='likes' style={{ height: 20, width: 20 }} /></span></li>
                                        <li><span><i /><img src='/index/cart.svg' alt='car' style={{ height: 20, width: 20 }} /></span></li>
                                        <li><span><i /><img src='/index/view.svg' alt='view' style={{ height: 20, width: 20 }} /></span></li>
                                    </ul>
                                </div>
                                <div className={styles.product_content}>
                                    <h3 className={styles.title}><span>{item.nombre}</span></h3>
                                    <ul className={styles.rating}>
                                        <li className="fas fa-star" />
                                        <li className="fas fa-star" />
                                        <li className="fas fa-star" />
                                        <li className="far fa-star" />
                                        <li className="far fa-star" />
                                    </ul>
                                    <div className={styles.price}><span></span>$ {item.precio}</div>
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
