import styles from '../../styles/index/filters.module.css'
import { BsChevronDown, BsChevronRight } from 'react-icons/bs'
import { Collapse } from 'react-bootstrap'
import { useState } from 'react'

const Filters = () => {

    const [open, setOpen] = useState(false);
    const [open_1, setOpen_1] = useState(false);

    

    return (
        <>
            <div className={styles.main_order} onClick={() => setOpen(!open)}>
                <span style={{ color: '#7fad39' }}>Organizar por precio</span>
                {open ? <BsChevronDown color='#7fad39' /> : <BsChevronRight color='#7fad39' />}
            </div>
            <Collapse in={open} className={styles.main_order_collapse}>
                <div id="example-collapse-text">
                    <ul style={{ paddingInlineStart: 0 }}>
                        <li style={{ cursor: 'pointer', margin: '12px 0' }}> Menor a Mayor Precio</li>
                        <li style={{ cursor: 'pointer', margin: '12px 0' }}> Mayor a Menor Precio</li>
                    </ul>
                </div>
            </Collapse>

            <div className={styles.main_order_1} onClick={() => setOpen_1(!open_1)}>
                <span style={{ color: '#7fad39' }}>Organizar por disponible</span>
                {open_1 ? <BsChevronDown color='#7fad39' /> : <BsChevronRight color='#7fad39' />}
            </div>
            <Collapse in={open_1} className={styles.main_order_collapse}>
                <div id="example-collapse-text">
                    <ul style={{ paddingInlineStart: 0 }}>
                        <li style={{ cursor: 'pointer', margin: '12px 0' }}> Disponible</li>
                        <li style={{ cursor: 'pointer', margin: '12px 0' }}> No disponible</li>
                    </ul>
                </div>
            </Collapse>
        </>
    );
}

export default Filters;
 