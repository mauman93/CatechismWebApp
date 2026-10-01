class LessonLoader {
    static async loadQuestions() {
        const response = await fetch("data/lessons.json");
        const rawData = await response.json();

        return rawData.map(row => new Question(
            row.catechismID,
            row.catechismLevel,
            row.lessonNumber,
            row.section,
            row.questionNumber,
            row.question,
            row.answer
        ));
    }
}