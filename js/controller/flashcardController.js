const urlParams = new URLSearchParams(window.location.search);
const questionGroup = urlParams.get("questionGroup");

nextButton.addEventListener("click", () => {
    if (isLastQuestion()) {
        const nodeIndex = urlParams.get("nodeIndex");
        window.location.href = `lessonPath.html?scrollTo=${Number(nodeIndex) + 1}`;
    }
    else {
        goToNextQuestion();
        renderQuestion(getCurrentQuestion(), isFirstQuestion(), isLastQuestion());
    }
});

flipButton.addEventListener("click", () => {
    toggleCardFace();
});

previousButton.addEventListener("click", () => {
    goToPreviousQuestion();
    renderQuestion(getCurrentQuestion(), isFirstQuestion(), isLastQuestion());
});

async function initializeFlashcards() {
    await loadFlashcardQuestions(questionGroup);
    renderQuestion(getCurrentQuestion(), isFirstQuestion(), isLastQuestion());
}

initializeFlashcards();