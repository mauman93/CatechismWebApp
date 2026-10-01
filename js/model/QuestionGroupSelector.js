class QuestionGroupSelector {
    static CURRENT_LESSON_NUMBER = "1";

    static select(allQuestions, questionGroup) {
        const lessonQuestions = allQuestions.filter(q => q.lessonNumber === QuestionGroupSelector.CURRENT_LESSON_NUMBER);

        const thirdSize = Math.ceil(lessonQuestions.length / 3);
        const thirds = {
            "third-1": lessonQuestions.slice(0, thirdSize),
            "third-2": lessonQuestions.slice(thirdSize, thirdSize * 2),
            "third-3": lessonQuestions.slice(thirdSize *2),
            "full": lessonQuestions
        };

        return thirds[questionGroup] || lessonQuestions;
    
        }
    }
