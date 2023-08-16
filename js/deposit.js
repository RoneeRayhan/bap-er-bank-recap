document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositAmount = getTextElementValueById('deposit-total');
    const currentTotalDeposit = previousDepositAmount + newDepositAmount;
    setTextElementValueById('deposit-total', currentTotalDeposit);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
});