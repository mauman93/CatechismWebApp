const urlParams = new URLSearchParams(window.location.search);
const questionGroup = urlParams.get("questionGroup");
const nodeIndex = urlParams.get("nodeIndex");

let selectedQuestionButton = null;
let selectedAnswerButton = null;

function selectQuestion(button) {
    if (button.classList.contains("matched")) return;
    if (selectedQuestionButton) clearSelected(selectedQuestionButton);
    selectedQuestionButton = button;
    markSelected(button);
    checkForMatch();
}

function selectAnswer(button) {
    if (button.classList.contains("matched")) return;
    if (selectedAnswerButton) clearSelected(selectedAnswerButton);
    selectedAnswerButton = button;
    markSelected(button);
    checkForMatch();
}

function checkForMatch() {
    if (!selectedQuestionButton || !selectedAnswerButton) return;

    const questionButton = selectedQuestionButton;
    const answerButton = selectedAnswerButton;

    if (isMatch(questionButton.dataset.catechismId, answerButton.dataset.catechismId)) {
        markMatched(questionButton);
        markMatched(answerButton);
        setFinishButtonEnabled(areAllItemsMatched());
    }
    else {
        markIncorrect(questionButton);
        markIncorrect(answerButton);
        setTimeout(() => {
            clearIncorrect(questionButton);
            clearIncorrect(answerButton);
        }, 500);
    }

    selectedQuestionButton = null;
    selectedAnswerButton = null;
}

async function initializeMatching() {
    setFinishButtonEnabled(false);
    const allQuestions = await LessonLoader.loadQuestions();
    const matchQuestions = QuestionGroupSelector.select(allQuestions, questionGroup);
    const shuffledAnswers = shuffleQuestions(matchQuestions);
    renderMatchingBoard(matchQuestions, shuffledAnswers, selectQuestion, selectAnswer);
}

initializeMatching();

finishMatchingButton.addEventListener("click", () => {
    window.location.href = `lessonPath.html?scrollTo=${Number(nodeIndex) + 1}`;
});