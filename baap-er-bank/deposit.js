// deposti
// newDepositTotal=0;
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput=document.getElementById('deposit-input');
    const newDepositText=depositInput.value;
    const newDepositAmount= parseFloat(newDepositText);

                // update deposit 
    const depositTotal=document.getElementById('deposit-total');
    const previousDepositText=depositTotal.innerText;
    const previousDepositAmount=parseFloat(previousDepositText);
    const newDepositTotal=previousDepositAmount+newDepositAmount;
    
    depositTotal.innerText=newDepositTotal;

    // Update account blance
    const balanceTotal=document.getElementById('balence-total');
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText);
    const newBalanceTotal=previousBalanceTotal+newDepositAmount;
    balanceTotal.innerText=newBalanceTotal;

    depositInput.value='';

})

// handle withdraw

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText=withdrawInput.value;
    const newWithdrawAmount=parseFloat(withdrawAmountText);

    // set withdraw total 
    const withdrawTotal=document.getElementById('withdraw-total');
    const previousWithdrawText=withdrawTotal.innerText;
    const previousWithdrawAmount=parseFloat(previousWithdrawText);
    const newWithdrawTotal=previousWithdrawAmount+newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal;

    // update balance 
    const balanceTotal=document.getElementById('balence-total');
    const previousBalanceTotalText=balanceTotal.innerText;
    const previousBalanceAmount=parseFloat(previousBalanceTotalText);
    const newBalanceTotal=previousBalanceAmount-newWithdrawAmount;
    balanceTotal.innerText=newBalanceTotal;



    withdrawInput.value='';

})