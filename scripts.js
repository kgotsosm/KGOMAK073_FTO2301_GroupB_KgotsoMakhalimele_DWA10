const MAX_NUMBER = 10
const MIN_NUMBER = 0
const STEP_AMOUNT = 1

const element = {
    number: document.querySelector('[data-key="number"]'),
    subtract: document.querySelector('[data-key="subtract"]'),
    add: document.querySelector('[data-key="add"]')
}

const updateColour = () => {
    const value = parseInt(element.number.value)

    const singleStep = 250 / (MAX_NUMBER - MIN_NUMBER)

    const distMax = MAX_NUMBER - value
    const distMin = value - MIN_NUMBER

    const red = distMax * singleStep
    const green = distMin * singleStep

    if (value === 0) {
        element.number.style.color = `#ffffff`
    } else {
        element.number.style.color = `rgb(${red}, ${green}, 50)`
    }

}

const showReset = () => {

    const resetButton = document.getElementById('reset_button');
    resetButton.hidden = true;

    if (parseInt(element.number.value) >= MAX_NUMBER) {
        resetButton.style.display = 'block';
        resetButton.hidden = false;
    } else {
        resetButton.style.display = 'none';
        resetButton.hidden = true;
    }
}

const subtractHandler = () => {

    const newValue = parseInt(element.number.value) - STEP_AMOUNT
    element.number.value = newValue

    if (element.add.disabled === true) {
        element.add.disabled = false
    }
    else if (newValue <= MIN_NUMBER) {
        element.subtract.disabled = true
    }
    updateColour()
    showReset()
}

const addHandler = () => {
    const newValue = parseInt(element.number.value) + STEP_AMOUNT
    element.number.value = newValue

    if (element.subtract.disabled === true) {
        element.subtract.disabled = false
    }
    if (newValue >= MAX_NUMBER) {
        element.add.disabled = true

    }
    updateColour()
    showReset()
}


const resetButton = document.getElementById('reset_button')
resetButton.addEventListener('click', () => {
    element.number.value = 0
    element.add.disabled = false
    element.subtract.disabled = false
    alert('The number has been reset to 0')
    updateColour()
    showReset()
});

element.subtract.addEventListener('click', subtractHandler)
element.add.addEventListener('click', addHandler)
