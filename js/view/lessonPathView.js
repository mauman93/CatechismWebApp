function renderLessonHeader(lesson) {
    document.getElementById("lessonNumberLabel").textContent = `Lesson ${lesson.lessonNumber}`;
    document.getElementById("sectionLabel").textContent = lesson.section;
}

function renderLessonPath(nodes, container, onFlashcardClick, onMatchingClick) {
    nodes.forEach((node, index) => {
        const pathNode = document.createElement("button");
        pathNode.className = "path-node";
        pathNode.dataset.type = node.type;
        pathNode.id = `node-${index}`;

        if (node.type === "final") {
            pathNode.classList.add("path-node-final");
            pathNode.textContent = "★";
        }
        else if (node.type === "activity" && node.activityType === "flashcards") {
            pathNode.classList.add("path-node-flashcard");
            pathNode.innerHTML = `<span class="flashcard-icon-back"></span>
            <span class="flashcard-icon-front"></span>`;
        }
        else if (node.type === "activity" && node.activityType === "matching") {
            pathNode.textContent = index + 1;
        }
        else {
            pathNode.textContent = index + 1;
        }

        const waveOffset = Math.sin(index * 0.9) * 150;
        pathNode.style.transform = `translateX(${waveOffset}px)`;

        if (node.type === "activity" && node.activityType === "flashcards") {
            pathNode.addEventListener("click", () => onFlashcardClick(node, index));
        }

        if (node.type === "activity" && node.activityType === "matching") {
            pathNode.addEventListener("click", () => onMatchingClick(node, index));
        }

        container.appendChild(pathNode);
    });
}

function scrollToNode(index) {
    document.getElementById(`node-${index}`).scrollIntoView({ block: "start" });
}