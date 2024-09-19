// add money to the account #
// s1:addm event handler
// s:2 get money tobe added to the account balance
// getthe pin number
//s:1 add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
  // prevent page reload after form submit
  event.preventDefault();
  // step:2 get mone to be added to the account
  const addmoneyInput= document.getElementById('input-add-money').value;
  console.log(addmoneyInput);
  // get pin number You Provided
  const pinNumberInput = document.getElementById('input-pin-number').value;
  console.log(pinNumberInput);
  // verify pin number
  // wrong way to validate
  if(pinNumberInput === '1234'){
    console.log('Adding Money To Your Account');
    // step:4 get the dcurrent balance
    const balance=document.getElementById('account-balance').innerText;
    console.log(typeof balance);
    // step:5 addMoneyInput wtih Balance
    const addMoneyNumber= parseFloat(addmoneyInput);
    const balanceNumber= parseFloat(balance);
    const newBalance= addMoneyNumber + balanceNumber;
    console.log(newBalance);

    // step:5 update the balance in the UI/DOM
    document.getElementById('account-balance').innerText = newBalance;
  }
  else{
    alert('failed to add money! please try again');
  }
  });