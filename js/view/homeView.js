const loginScreen = document.getElementById("loginScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const nameInput = document.getElementById("nameInput");

function showWelcomeScreen(userName, todayStr, feastNOName, feastTLMName) {
    document.getElementById("welcomeMessage").textContent = `Welcome ${userName}! Today is ${todayStr}.`;
    document.getElementById("feastNO").textContent = `${feastNOName} (New)`;
    document.getElementById("feastTLM").textContent = `${feastTLMName} (TLM)`;

    loginScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");
}

function goToLessonPath() {
    window.location.href = "lessonPath.html";
}