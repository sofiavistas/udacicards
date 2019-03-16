import {ADD_DECK, ADD_DECK_CARD, REMOVE_DECK} from "../actions/decks";

export default function decks (state = {}, action) {
    switch (action.type) {
        case ADD_DECK: {
            const {title, id} = action;

            return {
                ...state,
                [id]: {
                    title,
                    id,
                    cards: {}
                }
            };
        }
        case ADD_DECK_CARD: {
            const {id, question, answer, deckId} = action;

            const deck = {
                ...state[deckId]
            };

            const cards = {
                ...deck.cards
            };

            cards[id] = {
                id,
                question,
                answer,
                deckId
            };

            deck.cards = cards;

            return {
                ...state,
                [deck.id]: deck
            };
        }
        case REMOVE_DECK: {
            const {deckId} = action;

            const newState = {
                ...state
            };

            delete newState[deckId];

            return newState;
        }
        default:
            return state;
    }
}
