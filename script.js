let currentDisplay = "0";

function updateDisplay() {
    document.getElementById("display").innerText = currentDisplay;
}

function appendToDisplay(value) {
    if (currentDisplay === "0" && value !== ".") {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = "0";
    updateDisplay();
}

function calculate() {
    try {
        currentDisplay = eval(currentDisplay).toString();
    } catch (error) {
        currentDisplay = "Erro";
    }
    updateDisplay();
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Inicializa o display
updateDisplay();