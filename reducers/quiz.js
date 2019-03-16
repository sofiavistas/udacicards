import {FINISHED_QUIZ} from '../actions/quiz'

export default function quiz (state = {lastFinishedQuizDate: null}, action) {
    switch (action.type) {
        case FINISHED_QUIZ: {
            return {
                ...state,
                lastFinishedQuizDate: action.date,
            };
        }
        default:
            return state;
    }
}
