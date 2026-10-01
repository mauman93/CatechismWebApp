function shuffleQuestions(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function isMatch(questionId, answerId) {
    return questionId === answerId;
}