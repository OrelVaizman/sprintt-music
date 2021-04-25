import { chatService } from '../../services/ContactService';
export function loadMessages(filterBy = null) {
	return async (dispatch) => {
		const messages = await chatService.getMessages(filterBy);
		dispatch({ type: 'SET_MESSAGES', messages });
	};
}

export function removeMessage(messageId) {
	return async (dispatch) => {
		await chatService.deleteMessage(messageId);
		dispatch({ type: 'REMOVE_MESSAGE', messageId });
	};
}
export function addMessage(message) {
	return async (dispatch) => {
		const savedMessage = await chatService.saveMessage(message);
		dispatch({ type: 'ADD_MESSAGE', message: savedMessage });
	};
}
export function updateMessage(message) {
	return async (dispatch) => {
		const savedMessage = await chatService.saveMessage(message);
		dispatch({ type: 'UPDATE_MESSAGE', message: savedMessage });
	};
}
