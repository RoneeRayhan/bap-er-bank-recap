function getValueFromInputTypeElement(inputField) {
    const inputFieldElement = document.getElementById(inputField);
    const inputFieldValueInString = inputFieldElement.value
    const inputFieldValueInNumber = parseFloat(inputFieldValueInString);
    inputFieldElement.value = '';
    return inputFieldValueInNumber;
}