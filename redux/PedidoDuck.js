//constantes
const dataInicial = {
      itemsPedido: [],
}

const AGREGAR_ITEM_PEDIDO = "AGREGAR_ITEM_PEDIDO"
const AGREGAR_ITEM_PEDIDO_CANTIDAD = "AGREGAR_ITEM_PEDIDO_CANTIDAD"
const ELIMINAR_ITEM_PEDIDO = "ELIMINAR_ITEM_PEDIDO"
const LIMPIAR_ITEMS_PEDIDO = "LIMPIAR_ITEMS_PEDIDO"

//reducer
export default function pedidoReducer(state = dataInicial, action) {
      switch (action.type) {
            case AGREGAR_ITEM_PEDIDO:
                  return { ...state, itemsPedido: [...state.itemsPedido, action.payload] }

            case AGREGAR_ITEM_PEDIDO_CANTIDAD:
                  const { index, cantidad, precioTotal } = action.payload
                  let itemsPedido = [...state.itemsPedido]
                  itemsPedido[index] = { ...itemsPedido[index], cantidad, precioTotal }

                  return {
                        ...state,
                        itemsPedido,
                  }

            case ELIMINAR_ITEM_PEDIDO:
                  return { ...state, itemsPedido: state.itemsPedido.filter(item => item.idProducto !== action.payload) }

            case LIMPIAR_ITEMS_PEDIDO:
                  return { ...state, itemsPedido: action.payload }

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
                        type: AGREGAR_ITEM_PEDIDO_CANTIDAD,
                        payload: { index: indexItem, cantidad: itemPedido.cantidad, precioTotal: itemPedido.precioTotal },
                  })
            } catch (error) {
                  console.log(error)
            }
      }
}

export const agregarCantidadProductoPedido = datosProducto => async (dispatch, getState) => {
      try {
            dispatch({
                  type: AGREGAR_ITEM_PEDIDO_CANTIDAD,
                  payload: { index: datosProducto.index, cantidad: datosProducto.cantidad, precioTotal: datosProducto.precioTotal },
            })
      } catch (error) {
            console.log(error)
      }
}

export const eliminarItemPedido = idItem => async (dispatch, getState) => {
      try {
            dispatch({
                  type: ELIMINAR_ITEM_PEDIDO,
                  payload: idItem,
            })
      } catch (error) {
            console.log(error)
      }
}

export const limpiarItemsPedido = () => async (dispatch, getState) => {
      try {
            dispatch({
                  type: LIMPIAR_ITEMS_PEDIDO,
                  payload: [],
            })
      } catch (error) {
            console.log(error)
      }
}
