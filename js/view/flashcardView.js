const flashcard = document.getElementById("flashcard");
const flipButton = document.getElementById("flipButton");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");

function renderQuestion(question, isFirst, isLast) {
    const cardFront = document.getElementById("cardFront");
    cardFront.textContent = question.question;
    cardFront.classList.remove("hidden");

    const cardBack = document.getElementById("cardBack");
    cardBack.textContent = question.answer;
    cardBack.classList.add("hidden");

    previousButton.disabled = isFirst;
    nextButton.textContent = isLast ? "Finish" : "Next";
}

function toggleCardFace() {
    document.getElementById("cardFront").classList.toggle("hidden");
    document.getElementById("cardBack").classList.toggle("hidden");
}