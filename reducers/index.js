import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK } from "../actions/index";
import { ADD_QUESTION, DELETE_QUESTION } from "../actions/index";

const decks = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_DECKS:
			return {
				...state,
				...action.decks,
			};
		case ADD_DECK:
			return {
				...state,
				[action.deck.id]: action.deck
			};
		case DELETE_DECK:
			return {
				...action.decks,
			};
		case ADD_QUESTION:
			return {
				...state,
				[action.deck.id]: action.deck
			};
		case DELETE_QUESTION:
			return {
				...state,
				[action.deck.id]: action.deck
			};
		default:
			return state;
	}
}

export default decks