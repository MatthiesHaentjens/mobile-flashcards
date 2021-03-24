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
				...state,
				[state.decks]: state.decks.filter(
					(deck) => deck.id !== action.deck.id
				),
			};
		case ADD_QUESTION:
			return {
				...state,
				...action.question,
			};
		case DELETE_QUESTION:
			return {
				...state,
				[state.questions]: state.questions.filter(
					(question) => question.id !== action.question.id
				),
			};
		default:
			return state;
	}
}

export default decks