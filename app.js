const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const fromBx = document.querySelector('.fromBx');
const body = document.querySelector('body');


// function save(){
  

// }


const saveBtn = document.getElementById('save_btn');
saveBtn.addEventListener('click',function handlerClick(event){
    event.preventDefault();

    //----Input Value Collect
      let nameValue,email,password,confirmPassword;
      nameValue = document.getElementById('name').value;
      email = document.getElementById('email').value;
      password = document.getElementById('password').value;
      confirmPassword = document.getElementById('confirmPassword').value;
 

    //Set Value Local Storage
      localStorage.setItem('name',nameValue);
      localStorage.setItem('email',email);
      localStorage.setItem('password',password);
      localStorage.setItem('confirmPassword',confirmPassword);

    
  
    
})



signupBtn.onclick = function(){
    fromBx.classList.add('active');
    body.classList.add('active');
}
signinBtn.onclick = function(){
    fromBx.classList.remove('active');
    body.classList.remove('active');
}
