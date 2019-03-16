

export const FINISHED_QUIZ = 'FINISHED_QUIZ';

export function finishedQuiz(dateObject) {
    const dateJsonString = dateObject.toJSON();
    return {
        type: FINISHED_QUIZ,
        date: dateJsonString
    }
}
