
function getInputValue(){
    const depositInput=document.getElementById('deposit-input');
    const depositInputText=depositInput.value;
    const depositAmount= parseFloat(depositInputText) ;
        // clear input 
    depositInput.value='';
    return depositAmount;


}




document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput=document.getElementById('deposit-input');
    // const depositInputText=depositInput.value;
    // const depositAmount= parseFloat(depositInputText) ;

    const depositAmount=getInputValue();

    const depositTotal=document.getElementById('deposit-total');
    const depositTotalText=depositTotal.innerText;
    const previousDeposiTotal=parseFloat(depositTotalText);
    const finalDeposit=depositAmount+previousDeposiTotal;
    depositTotal.innerText=finalDeposit;

    // update balance 
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText);
    balanceTotal.innerText=previousBalanceTotal+depositAmount;


});

// withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText=withdrawInput.value;
    const withdrawAmount=parseFloat(withdrawAmountText);

    // update 
    const withdrawTotal=document.getElementById('withdraw-total');
    const withdrawTotalText=withdrawTotal.innerText;
    const previousWithdrawTotal=parseFloat(withdrawTotalText);
    withdrawTotal.innerText=withdrawAmount+previousWithdrawTotal;

    // update balance after withdarw 
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText);
    balanceTotal.innerText=previousBalanceTotal-withdrawAmount;

    // clear 
    withdrawInput.value='';

});