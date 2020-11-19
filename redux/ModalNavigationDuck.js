//constantes
const dataInicial = {
    showModal: false
}

const VIEW_MODAL_NAVIGATION = 'VIEW_MODAL_NAVIGATION';



//reducer
export default function modalNavigationReducer(state = dataInicial, action) {
    switch (action.type) {
        case VIEW_MODAL_NAVIGATION:
            return { ...state, showModal: action.payload }

        default:
            return state;
    }
}





//acciones
export const viewModalNavigation = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: VIEW_MODAL_NAVIGATION,
            payload: !getState().modalNavigation.showModal
        })
    } catch (error) {
        console.log(error)
    }
}