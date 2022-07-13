const initialState = {
	data: [],
	isLoading: false,
	isError: false,
};

// pending,fullfilled,rejected
const listUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_LIST_USER_PENDING":
			return { ...state, isLoading: true, data: [], isError: false };
		case "GET_LIST_USER_FULFILLED":
			return {
				...state,
				isError: false,
				isLoading: false,
				data: action.payload.data.data,
			};
		case "GET_LIST_USER_REJECTED":
			return { ...state, isLoading: false, isError: true, data: [] };
		default:
			return state;
	}
};

export default listUserReducer;
