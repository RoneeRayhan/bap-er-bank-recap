console.log('deposit')
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositAmount = getTextElementValueById('deposit-total');
    const currentTotalDeposit = previousDepositAmount + newDepositAmount;
    setTextElementValueById('deposit-total', currentTotalDeposit);
    // console.log(previousDepositAmount, newDepositAmount)
});