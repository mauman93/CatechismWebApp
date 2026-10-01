const testFeastData = {
    feastNO: "St Matthew, Apostle",
    feastTLM: "St Mark, Apostle"
};

async function getTodayFeastNO() {
    try {
        const response = await fetch("http://localhost:3000/api/feastday/today");
        if (!response.ok) {
            throw new Error("API responded with an error.");
        }
        const feastDay = await response.json();
        return feastDay.name;
    } catch (error) {
        console.error("Could not reach feast day API:", error);
        return "Feast day unavailable.";
    }
}

async function getTodayFeastTLM() {
    return testFeastData.feastTLM;
}