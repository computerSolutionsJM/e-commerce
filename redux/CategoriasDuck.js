//constantes
const dataInicial = {
      categoriaNombre: "",
      categorias: [],
      categoriaProducts: []
}

const GET_CATEGORIAS = "GET_CATEGORIAS"
const GET_CATEGORIA_DETALLE = "GET_CATEGORIA_DETALLE"

//reducer
export default function CategoriasReducer(state = dataInicial, action) {
      switch (action.type) {
            case GET_CATEGORIAS:
                  return { ...state, categorias: action.payload }

            case GET_CATEGORIA_DETALLE:
                  return { ...state, categoriaProducts: action.payload.productos, categoriaNombre: action.payload.nombre }

            default:
                  return state
      }
}

//acciones
export const getCategorias = categorias => async (dispatch, getState) => {
      try {
            dispatch({
                  type: GET_CATEGORIAS,
                  payload: categorias
            })
      } catch (error) {
            console.log(error)
      }
}

export const getCategoriaDetalle = categoria_ => async (dispatch, getState) => {
      try {
            dispatch({
                  type: GET_CATEGORIA_DETALLE,
                  payload: { nombre: categoria_.nombre, productos: categoria_.producto }
            })
      } catch (error) {
            console.log(error)
      }
}
