let password;
let a;
let oldPass;
let stringLength = 6;
let stringLength1 = 5;
let email = prompt('enter email');
if(email === '' || email === null) {
    alert('Canceled')
} else if(email.length < stringLength) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if(email === 'user@gmail.com' || email === 'admin@gmail.com') {
  password = prompt('enter password');
} if(password === '' || password === null) {
alert('Canceled');
} else if(email==='user@gmail.com' && password !== 'UserPass' || email==='admin@gmail.com' && password !=='AdminPass') {
    alert('Wrong password');
    a = confirm('Do you want to change your password?');
}
    if(a === false) {
    alert('You have failed the change.');
} else if(a === true) {
     oldPass = prompt('enter Old pass');
    if(oldPass === '' || oldPass === null) {
        alert('Canceled'); 
} else if(email==='user@gmail.com' && oldPass !== 'UserPass' || email==='admin@gmail.com' && oldPass !== 'AdminPass') {
            alert('Wrong password');
    }
    }
    let newPass = prompt('Enter new pass');
    if(newPass.length < stringLength1) {
        alert('It’s too short password. Sorry.');
    } else if(newPass.length >= stringLength1) {
    let secondNewPass = prompt('enter new pass agin');
    } if(newPass !== secondNewPass) {
        alert('You wrote the wrong password.')
    } else if(newPass === secondNewPass) {
     alert('You have successfully changed your password.');
    } else {
    alert('I don’t know you');
   }