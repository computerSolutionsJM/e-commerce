import styles from '../styles/HeaderCart.module.css'
import { Badge } from 'react-bootstrap';

const HeaderCart = () => {
    return (
        <div className={styles.headerCart_main}>
            <ul>
                <li style={{ display: 'flex' }}>
                    <div>
                        <a href='/'style={{color: 'black'}}>
                            <i className="fa fa-heart" aria-hidden="true" style={{ fontSize: 22 }}></i>
                        </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Badge pill={true} variant="success" style={{ fontSize: 9, background: '#7fad39' }}>1</Badge>
                    </div>

                </li>
                <li style={{ display: 'flex' }}>
                    <div>
                        <a href='/'style={{color: 'black'}}>
                            <i className="fa fa-shopping-bag" aria-hidden="true" style={{ fontSize: 22 }}></i>
                        </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Badge pill={true} variant="success" style={{ fontSize: 9, background: '#7fad39' }}>3</Badge>
                    </div>

                </li>
            </ul>
            <div style={{marginLeft: 10}}>
                Total:<span style={{fontWeight: 700}}>$150.000</span>
            </div>
        </div>
    );
}

export default HeaderCart;