//constantes
const dataInicial = {
      itemsPedido: [],
}

const AGREGAR_ITEM_PEDIDO = "AGREGAR_ITEM_PEDIDO"

//reducer
export default function pedidoReducer(state = dataInicial, action) {
      switch (action.type) {
            case AGREGAR_ITEM_PEDIDO:
                  return { ...state, itemsPedido: [...state.itemsPedido, action.payload] }

            default:
                  return state
      }
}

//acciones
export const agregarItemPedido = itemPedido => async (dispatch, getState) => {
      if (getState().pedidos.itemsPedido.length !== 0) {
            let item = getState().pedidos.itemsPedido.findIndex(x => x.idProducto === itemPedido.idProducto)
            if (item !== -1) {
                  return
            }
      }
      try {
            dispatch({
                  type: AGREGAR_ITEM_PEDIDO,
                  payload: itemPedido,
            })
      } catch (error) {
            console.log(error)
      }
}
