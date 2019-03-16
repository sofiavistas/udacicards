import uuidv1 from "uuid/v1"

export const ADD_DECK = 'ADD_DECK';
export const ADD_DECK_CARD = 'ADD_DECK_CARD';
export const REMOVE_DECK = 'REMOVE_DECK';

export function addDeck(title) {
    return {
        type: ADD_DECK,
        title,
        id: uuidv1(),
    }
}

export function addDeckCard(cardData) {
    return {
        type: ADD_DECK_CARD,
        id: uuidv1(),
        question: cardData.question,
        answer: cardData.answer,
        deckId: cardData.deckId,
    }
}

export function removeDeck(deckId) {
    return {
        type: REMOVE_DECK,
        deckId
    }
}
