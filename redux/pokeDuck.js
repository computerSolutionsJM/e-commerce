import axios from 'axios'

//constantes
const dataInicial = {
    array: []
}

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO';



//reducer
export default function pokeReducer(state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:
            return { ...state, array: action.payload }

        default:
            return state;
    }
}



//acciones
export const obtenerPokemones = (users) => async (dispatch, getState) => {
    try {
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: users
        })
    } catch (error) {
        console.log(error)
    }
}

