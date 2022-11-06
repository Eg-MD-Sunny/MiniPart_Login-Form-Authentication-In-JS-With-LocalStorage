const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const fromBx = document.querySelector('.fromBx');
const body = document.querySelector('body');

//----Input Value Collect
function save(){
    let name,email,password,confirmPassword;
    name = document.getElementById('name').Value;
    email = document.getElementById('email').Value;
    password = document.getElementById('password').Value;
    confirmPassword = document.getElementById('confirmPassword').Value;

//Set Value Local Storage
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    localStorage.setItem('confirmPassword',confirmPassword);
}



signupBtn.onclick = function(){
    fromBx.classList.add('active');
    body.classList.add('active');
}
signinBtn.onclick = function(){
    fromBx.classList.remove('active');
    body.classList.remove('active');
}
