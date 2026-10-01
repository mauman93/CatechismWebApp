const continueButton = document.getElementById("continueButton");
const startLessonButton = document.getElementById("startLessonButton");

continueButton.addEventListener("click", async () => {
    const userName = nameInput.value;
    const today = new Date().toLocaleDateString();

    const feastNOName = await getTodayFeastNO();
    const feastTLMName = await getTodayFeastTLM();

    showWelcomeScreen(userName, today, feastNOName, feastTLMName);
});

startLessonButton.addEventListener("click", () => {
    goToLessonPath();
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
        return;
    }
    if (!loginScreen.classList.contains("hidden")) {
        continueButton.click();
    }
    else if (!welcomeScreen.classList.contains("hidden")) {
        startLessonButton.click();
    }
});