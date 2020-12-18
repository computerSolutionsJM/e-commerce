import { Col } from 'react-bootstrap'

const TitleProducts = ({ title, numeroProductos }) => {
    return (
        <>
            <Col style={{ marginTop: 10 }}>
                <span style={{ fontWeight: 'bold', fontSize: 20, borderBottom: '5px solid #7fad39' }}>{title}</span>
            </Col>
            <Col style={{ marginTop: 10 }}>
                <span style={{ fontWeight: 'bold', fontSize: 20 }}>{numeroProductos}<span style={{ fontSize: 14, fontWeight: 'lighter', color: '#b2b2b2' }} > Productos en Total</span></span>
            </Col>

        </>
    );
}



export default TitleProducts;
