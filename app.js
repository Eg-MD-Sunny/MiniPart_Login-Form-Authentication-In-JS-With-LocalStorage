const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const fromBx = document.querySelector('.fromBx');
const body = document.querySelector('body');

signupBtn.onclick = function(){
    fromBx.classList.add('active');
    body.classList.add('active');
}
signinBtn.onclick = function(){
    fromBx.classList.remove('active');
    body.classList.remove('active');
}
