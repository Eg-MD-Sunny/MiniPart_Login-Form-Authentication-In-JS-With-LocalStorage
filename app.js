const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const fromBx = document.querySelector('.fromBx');
const body = document.querySelector('body');

//----Input Value Collect
let name,email,password,confirmPassword;
name = document.getElementById('name').Value;
email = document.getElementById('email').Value;
password = document.getElementById('password').Value;
confirmPassword = document.getElementById('confirmPassword').Value;



signupBtn.onclick = function(){
    fromBx.classList.add('active');
    body.classList.add('active');
}
signinBtn.onclick = function(){
    fromBx.classList.remove('active');
    body.classList.remove('active');
}
