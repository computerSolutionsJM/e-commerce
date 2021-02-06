import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { wrapper } from "../redux/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Loader from "../components/shared/Loader";

function MyApp({ Component, pageProps }) {
	const store = useStore((state) => state);
	return (
		<PersistGate persistor={store.__persistor} loading={<Loader />}>
			<Component {...pageProps} />
		</PersistGate>
	);
}

export default wrapper.withRedux(MyApp);

// const WrappedApp = ({ Component, pageProps }) => {

//   return <Component {...pageProps} />
// }

// export default wrapper.withRedux(WrappedApp)

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
