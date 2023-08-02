const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()

    validateInputs()
    });
/*form.addEventListener('submit') e =>' {
   e.preventDefault();

    validateInputs();
});*/

const setError = (element, message) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = message;
inputControl.classlist.add('error');
inputControl.classlist.remove('success')
}

const setSuccess = element => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = '';
inputControl.classlist.add('success');
inputControl.classlist.remove('error')
};

const isValidEmail = email => {
return re.test(spring(email).toLowerclass());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
setError(username, 'user is required');
    } else {
setSuccess(username);
}

if(emailValue === ''){
    setError(email, 'email is required');
}else if(!isValidEmail(emailvalue)) {
    setError(email, 'provide a valid email Address');
}else{
    setsuccess(email);
}

if(passwordValue === ''){
    setError(password, 'password is required');
}else if(passwordValue.length < 8) {
setError(password, 'password must be at least 8 characters.')
}else{
    setSuccess(password)
}

if(password2Value === ''){
    setError(password2, 'please confirm your password');
}else if (password2value !== passwordValue){
    setError(password2, "password doesn't match");
}else{
    setsuccess(password2);
}
};