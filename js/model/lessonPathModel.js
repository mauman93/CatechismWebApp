const currentLesson = {
    lessonNumber: 1,
    section: "On the End of Man"
};

const ACTIVITY_TYPES = [
    "flashcards",
    "matching",
    "multipleChoice",
    "putInOrder"
];

function buildThirdBlock(questionGroup) {
    const activityNodes = ACTIVITY_TYPES.map(activityType => ({
        type: "activity",
        activityType,
        questionGroup
    }));
    activityNodes.push({ type: "review", questionGroup });
    return activityNodes;
}

const lessonPathNodes = [
    ...buildThirdBlock("third-1"),
    ...buildThirdBlock("third-2"),
    ...buildThirdBlock("third-3"),
    ...ACTIVITY_TYPES.concat(ACTIVITY_TYPES).map(activityType => ({
        type: "activity",
        activityType,
        questionGroup: "full"
    })),
    { type: "review", questionGroup: "wrong-answers" },
    { type: "final", questionGroup: "full" }
];