// deposit part
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepoditTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepoditTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);


})

// withdraw- part --

document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})
