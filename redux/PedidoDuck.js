//constantes
const dataInicial = {
      itemsPedido: [],
}

const AGREGAR_ITEM_PEDIDO = "AGREGAR_ITEM_PEDIDO"
const AGREGAR_ITEM_PEDIDO_DETAIL = "AGREGAR_ITEM_PEDIDO_DETAIL"

//reducer
export default function pedidoReducer(state = dataInicial, action) {
      switch (action.type) {
            case AGREGAR_ITEM_PEDIDO:
                  return { ...state, itemsPedido: [...state.itemsPedido, action.payload] }

            case AGREGAR_ITEM_PEDIDO_DETAIL:
                  return {
                        ...state,
                        itemsPedido: state.itemsPedido.map((item, index) => {
                              if (index === action.payload.index) {
                                    return {
                                          ...item,
                                          cantidad: action.payload.cantidad,
                                          precioTotal: action.payload.precioTotal
                                    }
                              }
                              return item
                        }),
                  }

            default:
                  return state
      }
}

//acciones
export const agregarItemPedido = itemPedido => async (dispatch, getState) => {
      let indexItem = getState().pedidos.itemsPedido.findIndex(x => x.idProducto === itemPedido.idProducto)
      if (indexItem === -1) {
            try {
                  dispatch({
                        type: AGREGAR_ITEM_PEDIDO,
                        payload: itemPedido,
                  })
            } catch (error) {
                  console.log(error)
            }
      } else {
            try {
                  dispatch({
                        type: AGREGAR_ITEM_PEDIDO_DETAIL,
                        payload: { index: indexItem, cantidad: itemPedido.cantidad, precioTotal: itemPedido.precioTotal },
                  })
            } catch (error) {
                  console.log(error)
            }
      }
}
