import {
	_getDecks,
	_addDeck,
	_deleteDeck,
	_deleteQuestion,
  _addQuestion,
} from "../utils/_DATA";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const ADD_QUESTION = "ADD_QUESTION";
export const DELETE_QUESTION = "DELETE_QUESTION";

export function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks,
	};
}

export function handleInitialData() {
	return (dispatch) => {
		return _getDecks()
			.then((data) => {
				dispatch(receiveDecks(data));
			})
			.catch((error) => console.log(error));
	};
}

export function addDeck(deck) {
	return {
		type: ADD_DECK,
		deck,
	};
}

export function handleAddDeck(title, image) {
	return (dispatch) => {
		return _addDeck(title, image)
			.then((deck) => {
				dispatch(addDeck(deck));
			})
			.catch((error) => console.log(error));
	};
}

export function deleteDeck(decks) {
	return {
		type: DELETE_DECK,
		decks,
	};
}

export function handleDeleteDeck(id) {
	return (dispatch) => {
		return _deleteDeck(id)
			.then((decks) => {
				dispatch(deleteDeck(decks));
			})
			.catch((error) => console.log(error));
	};
}

export function addQuestion(deck) {
	return {
		type: ADD_QUESTION,
		deck,
	};
}

export function handleAddQuestion(question, answer, deckId) {
	return (dispatch) => {
		return _addQuestion(question, answer, deckId)
			.then((deck) => {
				console.log(deck);
				dispatch(addQuestion(deck));
			})
			.catch((error) => console.log(error));
	};
}

export function deleteQuestion(deck) {
	return {
		type: DELETE_QUESTION,
		deck,
	};
}

export function handleDeleteQuestion(questionId, deckId) {
  return (dispatch) => {
    return _deleteQuestion(questionId, deckId)
      .then((deck) => {
        dispatch(deleteQuestion(deck));
      })
      .catch((error) => console.log(error));
  };
}
