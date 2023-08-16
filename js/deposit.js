console.log('deposit')
document.getElementById('btn-deposit').addEventListener('click', function (e) {
    const newDepositAmount = getValueFromInputTypeElement('deposit-field');
    console.log(newDepositAmount)
});