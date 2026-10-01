const finishMatchingButton = document.getElementById("finishMatchingButton");

function renderMatchingBoard(questions, shuffledAnswers, onQuestionClick, onAnswerClick) {
    const questionsColumn = document.getElementById("questionsColumn");
    const answersColumn = document.getElementById("answersColumn");

    questions.forEach(q => {
        const questionButton = document.createElement("button");
        questionButton.textContent = q.question;
        questionButton.dataset.catechismId = q.catechismID;
        questionButton.className = "match-item";
        questionButton.addEventListener("click", () => onQuestionClick(questionButton));
        questionsColumn.appendChild(questionButton);
    });

    shuffledAnswers.forEach(a => {
        const answerButton = document.createElement("button");
        answerButton.textContent = a.answer;
        answerButton.dataset.catechismId = a.catechismID;
        answerButton.className = "match-item";
        answerButton.addEventListener("click", () => onAnswerClick(answerButton));
        answersColumn.appendChild(answerButton);
    });
}

function markSelected(button) { button.classList.add("selected"); }
function clearSelected(button) { button.classList.remove("selected"); }
function markMatched(button) { button.classList.add("matched"); }
function markIncorrect(button) { button.classList.add("incorrect"); }
function clearIncorrect(button) { button.classList.remove("incorrect", "selected"); }

function areAllItemsMatched() {
    const unmatched = document.querySelectorAll(".match-item:not(.matched)");
    return unmatched.length === 0;
}

function setFinishButtonEnabled(enabled) {
    finishMatchingButton.disabled = !enabled;
}