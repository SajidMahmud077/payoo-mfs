// console.log('clicking file addeded');
// getElimentById('id_name').addEventListener('click', function(){})
// step:1 setm event handler
// document.getElementById('login-btn').addEventListener('click', function(event){
//   // step:2 prevent default behaviour( prevent reloading browser)
//   event.preventDefault();
//   // console.log('login button clicked');

//   // step:3 get the phone number and pin number
//   const phoneNumber = document.getElementById('phone-number').value;
//   const pinNumber = document.getElementById('pin-number').value;
//   console.log(phoneNumber, pinNumber);
// //   //step:4 validate phone or pin
// //   // this is temporary
// //   if(phoneNumber === '5' && pinNumber ==='1234' ){
// //     console.log('You are loged in');
// //   }
// //   else{
// //     console.log('Check Your phone number or pin');
// //     //step:5 allow user to use website
// //   }
//  })
document.getElementById('login-btn').addEventListener('click',function(event){
  event.preventDefault();
  const  phoneNumber=document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  // console.log(phoneNumber, pinNumber);
  //bad way to validate
  if(phoneNumber === '5' && pinNumber ==='1234' ){
    console.log('You are loged in');
    window.location.href ='/home.html'
  }
  else{
    alert('wrong phone number or pin')
  }

})
