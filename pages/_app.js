import '../styles/globals.css'
import { wrapper } from '../redux/store'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'


const WrappedApp = ({ Component, pageProps }) => {
  useEffect(() => {
    import("jquery").then($ => {
      // jQuery must be installed to the `window`:
      window.$ = window.jQuery = $;
      return import("bootstrap");
    });
  }, []);
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
