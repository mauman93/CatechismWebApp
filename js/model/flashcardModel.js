let currentQuestions = [];
let currentQuestionIndex = 0;

async function loadFlashcardQuestions(questionGroup) {
    const allQuestions = await LessonLoader.loadQuestions();
    currentQuestions = QuestionGroupSelector.select(allQuestions, questionGroup);
    currentQuestionIndex = 0;
}

function getCurrentQuestion() {
    return currentQuestions[currentQuestionIndex];
}

function isFirstQuestion() {
    return currentQuestionIndex === 0;
}

function isLastQuestion() {
    return currentQuestionIndex === currentQuestions.length - 1;
}

function goToNextQuestion() {
    currentQuestionIndex++;
}

function goToPreviousQuestion() {
    currentQuestionIndex--;
}