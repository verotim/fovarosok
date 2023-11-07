const countries = {
    "Magyarország": "Budapest",
    "Németország": "Berlin",
    "Ausztria": "Bécs",
    "Csehország": "Prága",
    "Spanyolország": "Madrid",
    "Olaszország": "Róma",
    "Svédország": "Stockholm",
    "Finnország": "Helsinki",
    "Franciaország": "Párizs",
    "Egyesült Királyság": "London"
};

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const checkButton = document.getElementById("check");
const resultElement = document.getElementById("result");

const countriesArray = Object.keys(countries);
let currentCountryIndex = 0;
let correctCount = 0;

function displayNextQuestion() {
    if (currentCountryIndex < countriesArray.length) {
        const country = countriesArray[currentCountryIndex];
        questionElement.textContent = `Mi ${country} fővárosa?`;
        answerElement.value = "";
    } else {
        questionElement.textContent = "Játék vége!";
        answerElement.style.display = "none";
        checkButton.style.display = "none";
    }
}

displayNextQuestion();

checkButton.addEventListener("click", () => {
    const currentCountry = countriesArray[currentCountryIndex];
    const userAnswer = answerElement.value.trim().toLowerCase();

    if (userAnswer === countries[currentCountry].toLowerCase()) {
        correctCount++;
        resultElement.textContent = "Helyes!";
    } else {
        resultElement.textContent = `Nem jó! A helyes válasz: ${countries[currentCountry]}`;
    }

    currentCountryIndex++;
    resultElement.textContent += ` (${correctCount} / ${currentCountryIndex})`;
    displayNextQuestion();
});



