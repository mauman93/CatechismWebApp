function goToFlashcards(node, index) {
    window.location.href = `flashcard.html?questionGroup=${node.questionGroup}&nodeIndex=${index}`;
}

function goToMatching(node, index) {
    window.location.href = `matching.html?questionGroup=${node.questionGroup}&nodeIndex=${index}`;
}

renderLessonHeader(currentLesson);

const pathContainer = document.getElementById("lessonPath");
renderLessonPath(lessonPathNodes, pathContainer, goToFlashcards, goToMatching);

const scrollTarget = new URLSearchParams(window.location.search).get("scrollTo");
if (scrollTarget !== null) {
    scrollToNode(scrollTarget);
}