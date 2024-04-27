// Variables to store references to display and buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let history = [];
// Function to handle square button
function square() {
    display.value = Math.pow(parseFloat(display.value), 2);
}

// Function to handle square root button
function squareRoot() {
    display.value = Math.sqrt(parseFloat(display.value));
}

// Function to handle reciprocal button
function reciprocal() {
    const value = parseFloat(display.value);
    if (value !== 0) {
        display.value = 1 / value;
    } else {
        display.value = "Error"; // Handling division by zero
    }
}

// Function to update display with current entry
function updateDisplay(value) {
    display.value = value;
}

// Function to clear the current entry
function clearEntry() {
    // Clear the display
    updateDisplay('');
}

// Function to clear all entries and history
function clearAll() {
    // Clear the display
    clearEntry();
    // Clear the history and remove from local storage
    history = [];
    localStorage.removeItem('calculatorHistory');
}

// Function to handle backspace
function backspace() {
    // Remove the last character from the display
    let currentEntry = display.value;
    currentEntry = currentEntry.slice(0, -1);
    updateDisplay(currentEntry);
}

// Function to handle digit and decimal point input
function inputDigit(digit) {
    display.value += digit;
}

// Function to handle basic arithmetic operations
function performOperation(operator) {
    display.value += operator;
}

// Function to perform calculation
function calculate() {
    try {
        const expression = display.value;
        const result = eval(display.value); // Using eval for simplicity (not recommended for production)
        display.value = result; // Update display with the result

        // Save the calculation history
       
        const calculation = { expression, result };
        history.push(calculation);
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
    } catch (error) {
        console.error(error);
    }
}

// Event listeners for button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        switch (buttonText) {
            case 'CE':
                clearEntry();
                break;
            case 'C':
                clearAll();
                break;
            case 'clr':
                backspace();
                break;
            case '=':
                calculate();
                break;
            case 'x^2':
                square();
                break;
            case 'x^(1/2)':
                squareRoot();
                break;
            case '1/x':
                reciprocal();
                break;
            case 'History':
                showHistory();
                break;
            default:
                if (button.classList.contains('digit') || button.classList.contains('decimal')) {
                    inputDigit(buttonText);
                } else {
                    performOperation(buttonText);
                }
                break;
        }
    });
});
// Function to display the history modal
function showHistory() {
    // Get the modal element
    const modal = document.getElementById('historyModal');
    // Get the <span> element that closes the modal
    const closeBtn = document.getElementsByClassName("close")[0];

    // Get the history list element
    const historyList = document.getElementById('history-list');
    // Clear previous history items
    historyList.innerHTML = '';

    // Populate history list from local storage
    const savedHistory = localStorage.getItem('calculatorHistory');
    if (savedHistory) {
        const history = JSON.parse(savedHistory);
        history.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.textContent = `${entry.expression} = ${entry.result}`;
            historyList.appendChild(listItem);
        });
    } else {
        // If no history is available
        const listItem = document.createElement('li');
        listItem.textContent = 'No history available';
        historyList.appendChild(listItem);
    }

    // Display the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    
}

// Add event listener to history button
const historyBtn = document.getElementById('history-btn');
historyBtn.addEventListener('click', showHistory); 
