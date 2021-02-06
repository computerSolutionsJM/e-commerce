import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import productosReducer from "./productosDuck";
import modalNavigationReducer from "./ModalNavigationDuck";
import CategoriasReducer from "./CategoriasDuck";
import pedidoReducer from "./PedidoDuck";

const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== "production") {
		const { composeWithDevTools } = require("redux-devtools-extension");
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
	productos: productosReducer,
	modalNavigation: modalNavigationReducer,
	categorias: CategoriasReducer,
	pedidos: pedidoReducer,
});

const makeStore = ({ isServer }) => {
	if (isServer) {
		//If it's on server side, create a store
		return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
	} else {
		//If it's on client side, create a store which will persist
		const { persistStore, persistReducer } = require("redux-persist");
		const storage = require("redux-persist/lib/storage").default;

		const persistConfig = {
			key: "nextjs",
			whitelist: ["pedidos"], // only counter will be persisted, add other reducers if needed
			storage, // if needed, use a safer storage
		};

		const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

		const store = createStore(persistedReducer, bindMiddleware([thunkMiddleware])); // Creating the store again

		store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

		return store;
	}
};

// const reducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     }
//     //if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
//     return nextState
//   } else {
//     return combinedReducer(state, action)
//   }
// }

// const initStore = () => {
//   return createStore(reducer, bindMiddleware([thunkMiddleware]))
// }

export const wrapper = createWrapper(makeStore);
