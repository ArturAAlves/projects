export const initialState = {
	user: null,
	profileAuth: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		case "SET_PROFILE":
			// console.log("autenticateReducer", action);
			return {
				...state,
				profileAuth: action.user,
			};

		default:
			return state;
	}
};

export default reducer;
