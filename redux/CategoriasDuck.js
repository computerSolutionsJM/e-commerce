//constantes
const dataInicial = {
	categoriaNombre: "",
	categorias: [],
	categoriaProducts: [],
	changeSortCategory: false,
};

const GET_CATEGORIAS = "GET_CATEGORIAS";
const GET_CATEGORIA_DETALLE = "GET_CATEGORIA_DETALLE";
const ORDENAR_PRODUCTOS_CATEGORIA = "ORDENAR_PRODUCTOS_CATEGORIA";

//reducer
export default function CategoriasReducer(state = dataInicial, action) {
	switch (action.type) {
		case "__NEXT_REDUX_WRAPPER_HYDRATE__": {
			const data = action.payload;
			if (data) {
				return {
					...state,
					categorias: data.categorias.categorias,
					categoriaNombre: data.categorias.categoriaNombre,
					categoriaProducts: data.categorias.categoriaProducts,
				};
			}
		}

		case GET_CATEGORIAS:
			return { ...state, categorias: action.payload };

		case GET_CATEGORIA_DETALLE:
			return { ...state, categoriaProducts: action.payload.productos, categoriaNombre: action.payload.nombre };

		case ORDENAR_PRODUCTOS_CATEGORIA:
			return { ...state, changeSortCategory: action.payload.changeSortCategory, categoriaProducts: action.payload.productos };

		default:
			return state;
	}
}

//acciones
export const getCategorias = (categorias) => async (dispatch, getState) => {
	try {
		dispatch({
			type: GET_CATEGORIAS,
			payload: categorias,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getCategoriaDetalle = (categoria_) => async (dispatch, getState) => {
	try {
		dispatch({
			type: GET_CATEGORIA_DETALLE,
			payload: { nombre: categoria_.nombre, productos: categoria_.producto },
		});
	} catch (error) {
		console.log(error);
	}
};

export const ordenarProductosCategoria = (productos) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ORDENAR_PRODUCTOS_CATEGORIA,
			payload: { changeSortCategory: !getState().categorias.changeSortCategory, productos },
		});
	} catch (error) {
		console.log(error);
	}
};
