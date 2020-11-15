import styles from '../styles/Navigation.module.css'
import HeaderCart from '../components/HeaderCart'
import Link from 'next/link'
import { useRouter } from "next/router";

const Navigation = (props) => {
  
  const router = useRouter();
  return (
    <header>
      <div className={styles.navbar_main}>
        <div className={styles.navbar_main_img}><img src='/logoMain.png' /></div>
        <nav className={styles.navbar_main_menu}>
          <ul>
            <li>
              <Link href="/">
                <a style={router.pathname === "/" ? { color: '#7fad39' } : { color: 'black' }}>HOME</a>
              </Link>
            </li>
            <li>
              <Link href='/shop'>
                <a style={router.pathname === "/shop" ? { color: '#7fad39' } : { color: 'black' }}>SHOP</a>
              </Link>
            </li>
            <li>
              <Link href='/page'>
                <a style={router.pathname === "/page" ? { color: '#7fad39' } : { color: 'black' }} href='/page'>PAGE</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a style={router.pathname === "/contact" ? { color: '#7fad39' } : { color: 'black' }} href='/contact'>CONTACT</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.navbar_main_menu_desktop}>
          <HeaderCart />
        </div>
        <div className={styles.navbar_main_bars}>
          <div className={styles.navbar_main_bars_icon}>
            <span><i className="fa fa-bars" aria-hidden="true" style={{ fontSize: 21 }}></i></span>
          </div>
        </div>
      </div>

    </header>

  );
}

export default Navigation;