// add money to the account #
// s1:addm event handler
// s:2 get money tobe added to the account balance
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

});