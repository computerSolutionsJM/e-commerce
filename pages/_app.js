import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { wrapper } from '../redux/store'



const WrappedApp = ({ Component, pageProps }) => {

  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
