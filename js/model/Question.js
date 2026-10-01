class Question {
    constructor(catechismID, catechismLevel, lessonNumber, section, questionNumber, question, answer) {
        this.catechismID = catechismID;
        this.catechismLevel = catechismLevel;
        this.lessonNumber = lessonNumber;
        this.section = section;
        this.questionNumber = questionNumber;
        this.question = question;
        this.answer = answer;
    }

    checkAnswer(userInput) {
        return (userInput.trim().toLowerCase() === this.answer.trim().toLowerCase()); 
    }
}