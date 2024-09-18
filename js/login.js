// console.log('clicking file addeded');
// getElimentById('id_name').addEventListener('click', function(){})
// step:1 setm event handler
document.getElementById('login-btn').addEventListener('click', function(event){
  // step:2 prevent default behaviour( prevent reloading browser)
  event.preventDefault();
  console.log('login button clicked');
  // step:3 get the phone number
  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber)
})
