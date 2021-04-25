const INITIAL_STATE = {
	messages: [],
};
export function messageReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_MESSAGES':
			return {
				...state,
				messages: action.messages,
			};
		// case 'REMOVE_MESSAGE':
		//     return {
		//         ...state,
		//         messages:state.messages.filter(message => message._id !== action.messageId)
		//     }
		case 'ADD_MESSAGE':
			return {
				...state,
				messages: [...state.messages, action.message],
			};
		// case 'UPDATE_MESSAGE':
		//     return {
		//         ...state,
		//         messages:state.messages.map(message=> (message._id === action.message._id) ? action.message : message)
		//     }
		default:
			return state;
	}
}
