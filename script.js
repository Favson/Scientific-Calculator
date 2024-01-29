function updateGMTTime() {
    const timeDateInNigeria = new Date().toLocaleString('en-NG', {timeZone: 'Africa/Lagos'});  
    timeUpdate.innerHTML=(timeDateInNigeria);
}
setInterval(updateGMTTime, 1000);

let calculatorOn = true;
let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerHTML = displayValue;
}

function togglePowerOn() {
    calculatorOn = true;
    display.style.display = 'block'
    display2.style.display = 'none'
    // timeUpdate.style.display='block'
//    timeUpdateOff.style.display = 'none'
   clearDisplay();
}

function togglePowerOFF(){
   calculatorOn = !calculatorOn
   display.style.display = 'none'
   display2.style.display = 'block'
//    timeUpdateOff.style.display = 'block'
//    timeUpdate.style.display = 'none'
   clearDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendDigit(digit) {
    if (!calculatorOn) return;

    if (displayValue === '0' || displayValue === '') {
        displayValue = digit;
    } else {
        displayValue += digit;
    }

    updateDisplay();
}

function operate(operator) {
    if (!calculatorOn) return;

    if (operator === 'sqrt') {
        displayValue = Math.sqrt(parseFloat(displayValue)).toString();
    } else {
        displayValue += operator;
    }

    updateDisplay();
}

function calculate() {
    if (!calculatorOn) return;

    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }

    updateDisplay();
}