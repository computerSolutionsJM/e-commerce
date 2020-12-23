//constantes
const dataInicial = {
      productos: [],
      changeSort: false,
      showModalDetail: false,
      detalleProducto: { }
}

const OBTENER_PRODUCTOS = "OBTENER_PRODUCTOS"
const ORDENAR_PRODUCTOS = "ORDENAR_PRODUCTOS"
const VER_MODAL_DETALLES = "VER_MODAL_DETALLES"

//reducer
export default function productosReducer(state = dataInicial, action) {
      switch (action.type) {
            case OBTENER_PRODUCTOS:
                  return { ...state, productos: action.payload }

            case ORDENAR_PRODUCTOS:
                  return { ...state, changeSort: action.payload.changeSort, productos: action.payload.productos }

            case VER_MODAL_DETALLES:
                  return { ...state, showModalDetail: action.payload.showModalDetail, detalleProducto: action.payload.infoProducto }

            default:
                  return state
      }
}

//acciones
export const obtenerProductos_ = productos => async (dispatch, getState) => {
      try {
            dispatch({
                  type: OBTENER_PRODUCTOS,
                  payload: productos
            })
      } catch (error) {
            console.log(error)
      }
}

export const ordenarProductos = productos => async (dispatch, getState) => {
      try {
            dispatch({
                  type: ORDENAR_PRODUCTOS,
                  payload: { changeSort: !getState().productos.changeSort, productos }
            })
      } catch (error) {
            console.log(error)
      }
}

export const detalleProducto = (infoProducto) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: VER_MODAL_DETALLES,
                  payload: { showModalDetail: !getState().productos.showModalDetail, infoProducto}
            })
      } catch (error) {
            console.log(error)
      }
}
