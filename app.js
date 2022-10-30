const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const fromBx = document.querySelector('.fromBx');

signupBtn.onclick = function(){
    fromBx.classList.add('active');
}
signinBtn.onclick = function(){
    fromBx.classList.remove('active');
}
