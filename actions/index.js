import { _getDecks } from "../utils/_DATA";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const ADD_QUESTION = "ADD_QUESTION";
export const DELETE_QUESTION = "DELETE_QUESTION";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return _getDecks().then(data => {
      dispatch(receiveDecks(data));
    }).catch(error => console.log(error));
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function deleteDeck(deck) {
  return {
    type: DELETE_DECK,
    deck,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function deleteQuestion(question) {
  return {
    type: DELETE_QUESTION,
    question,
  };
}
