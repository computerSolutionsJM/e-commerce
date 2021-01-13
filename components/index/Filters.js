import { useState } from 'react'
import { Collapse } from 'react-bootstrap'

import { connect } from 'react-redux';
import { ordenarProductos } from '../../redux/productosDuck'
import { ordenarProductosCategoria } from '../../redux/CategoriasDuck';

import { BsChevronDown, BsChevronRight } from 'react-icons/bs'
import styles from '../../styles/index/filters.module.css'



const Filters = ({ productos, categoria_productos, flag , ordenarProductos, ordenarProductosCategoria }) => {

    const [open, setOpen] = useState(false);
    const [open_1, setOpen_1] = useState(false);


    const sortProductsMenorMayor = () => {
        let getProducts = flag === 1 ? productos : categoria_productos
        let prod = getProducts.sort((a, b) => b.precio - a.precio)
        flag === 1 ? ordenarProductos(prod) : ordenarProductosCategoria(prod)
    }

    const sortProductsMayorMenor = () => {
        let getProducts = flag === 1 ? productos : categoria_productos
        let prod = getProducts.sort((a, b) => a.precio - b.precio)
        flag === 1 ? ordenarProductos(prod) : ordenarProductosCategoria(prod)
    }


    const sortProductsAZ = () => {
        let getProducts = flag === 1 ? productos : categoria_productos
        let prod = getProducts.sort((a, b) => {
            if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                return 1;
            } else if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        });
        flag === 1 ? ordenarProductos(prod) : ordenarProductosCategoria(prod)
    }

    const sortProductsZA = () => {
        let getProducts = flag === 1 ? productos : categoria_productos
        let prod = getProducts.sort((a, b) => {
            if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                return 1;
            } else if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        });
        flag === 1 ? ordenarProductos(prod) : ordenarProductosCategoria(prod)
    }


    return (
        <>
            <div className={styles.main_order} onClick={() => setOpen(!open)}>
                <span style={{ color: '#7fad39' }}>Organizar por precio</span>
                {open ? <BsChevronDown color='#7fad39' /> : <BsChevronRight color='#7fad39' />}
            </div>
            <Collapse in={open} className={styles.main_order_collapse}>
                <div id="example-collapse-text">
                    <ul style={{ paddingInlineStart: 0 }}>
                        <li onClick={sortProductsMenorMayor} style={{ cursor: 'pointer', margin: '12px 0' }}> Mayor a Menor Precio</li>
                        <li onClick={sortProductsMayorMenor} style={{ cursor: 'pointer', margin: '12px 0' }}> Menor a Mayor Precio</li>
                    </ul>
                </div>
            </Collapse>

            <div className={styles.main_order_1} onClick={() => setOpen_1(!open_1)}>
                <span style={{ color: '#7fad39' }}>Organizar Alfabeticamente</span>
                {open_1 ? <BsChevronDown color='#7fad39' /> : <BsChevronRight color='#7fad39' />}
            </div>
            <Collapse in={open_1} className={styles.main_order_collapse}>
                <div id="example-collapse-text">
                    <ul style={{ paddingInlineStart: 0 }}>
                        <li onClick={sortProductsAZ} style={{ cursor: 'pointer', margin: '12px 0' }}> A a la Z</li>
                        <li onClick={sortProductsZA} style={{ cursor: 'pointer', margin: '12px 0' }}> Z a la A</li>
                    </ul>
                </div>
            </Collapse>
        </>
    );
}



const mapStateToProps = state => ({
    productos: state.productos.productos,
    categoria_productos: state.categorias.categoriaProducts,
})


const mapDispatchToProps = (dispatch) => {
    return {
        ordenarProductos: (productos) => dispatch(ordenarProductos(productos)),
        ordenarProductosCategoria : (productos) => dispatch(ordenarProductosCategoria(productos))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Filters); 