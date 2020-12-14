//constantes
const dataInicial = {
    categorias: []
}

const GET_CATEGORIAS = 'GET_CATEGORIAS';



//reducer
export default function getCategoriasReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_CATEGORIAS:
            return { ...state, categorias: action.payload }

        default:
            return state;
    }
}



//acciones
export const getCategorias = (categorias) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_CATEGORIAS,
            payload: categorias
        })
    } catch (error) {
        console.log(error)
    }
}