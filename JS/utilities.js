

// function getInputElementValueById(inputId) {

//     const inputField = document.getElementById(inputId);
//     const inputFieldValueString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldValueString);
//     inputField.value = '';
//     return inputFieldValue;
// }

// function getTextElementValueById(elementId) {
//     const textElementField = document.getElementById(elementId);
//     const textElementValueSting = textElementField.innerText;
//     const textElementValue = parseFloat(textElementValueSting);
//     return textElementValue;

// }

// function setTextElementValueById(elementId, newValue) {
//     const elementValue = document.getElementById(elementId);
//     elementValue.innerText = newValue;
// }


function getInputFieldValueById(inputId) {

    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}


function setTextElementValueById(elementId, newValue) {

    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}
