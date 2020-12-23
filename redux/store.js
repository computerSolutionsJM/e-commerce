import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import productosReducer from './productosDuck'
import modalNavigationReducer from './ModalNavigationDuck'
import CategoriasReducer from './CategoriasDuck'
import pedidoReducer from './PedidoDuck'

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
  }

  const combinedReducer = combineReducers({
    productos: productosReducer,
    modalNavigation : modalNavigationReducer,
    categorias: CategoriasReducer,
    pedidos: pedidoReducer
  })


  const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      }
      //if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
      return nextState
    } else {
      return combinedReducer(state, action)
    }
  }


  const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
  }
  
  export const wrapper = createWrapper(initStore)