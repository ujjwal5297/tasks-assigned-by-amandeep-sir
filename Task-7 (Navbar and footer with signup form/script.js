const firstName = document.getElementById('firstname');
const errorElement1 = document.getElementById('validate-first-name');

firstName.addEventListener('input', (event) => {
    let regex = /^[a-zA-Z]{3,15}$/;
    if (!regex.test(event.target.value)) {
        errorElement1.innerText = "First name must contain only 3 to 15 characters";
        firstName.classList.remove('is-valid');
        firstName.classList.add('is-invalid');
    } else {
        errorElement1.innerText = "";
        firstName.classList.remove('is-invalid');
        firstName.classList.add('is-valid');
    }
});

const lastName = document.getElementById('lastname');
const errorElement2 = document.getElementById('validate-last-name');

lastName.addEventListener('input', (event) => {
    let regex = /^[a-zA-Z]{3,15}$/;
    if (!regex.test(event.target.value)) {
        errorElement2.innerText = "Last name must contain only 3 to 15 characters";
        lastName.classList.remove('is-valid');
        lastName.classList.add('is-invalid');
    } else {
        errorElement2.innerText = "";
        lastName.classList.remove('is-invalid');
        lastName.classList.add('is-valid');
    }
});

const email = document.getElementById('email');
const errorElement3 = document.getElementById('validate-email');

email.addEventListener('input', (event) => {
    let regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!regex.test(event.target.value)) {
        errorElement3.innerText = "Please enter valid email address";
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
    } else {
        errorElement3.innerText = "";
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
});

const contact = document.getElementById('contactnumber');
const errorElement4 = document.getElementById('validate-contact-number');
contact.addEventListener('input', (event) => {
    let regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!regex.test(event.target.value)) {
        errorElement4.innerText = "Please enter a valid mobile number";
        contact.classList.remove('is-valid');
        contact.classList.add('is-invalid');
    } else {
        errorElement4.innerText = "";
        contact.classList.remove('is-invalid');
        contact.classList.add('is-valid');
    }
});

const password = document.getElementById('password');
const errorElement5 = document.getElementById('validate-password');
password.addEventListener('input', (event) => {
    let regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!regex.test(event.target.value)) {
        errorElement5.innerText = "Password must contain atleast one special character, one number and one alphabet";
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
    } else {
        errorElement5.innerText = "";
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
});

const confirmpassword = document.getElementById('confirmpassword');
const errorElement6 = document.getElementById('validate-confirm-password');

confirmpassword.addEventListener('input', (event) => {
    if (event.target.value !== password.value) {
        errorElement6.innerText = "Password and confirm password should be same";
        confirmpassword.classList.remove('is-valid');
        confirmpassword.classList.add('is-invalid');
    } else {
        errorElement6.innerText = "";
        confirmpassword.classList.remove('is-invalid');
        confirmpassword.classList.add('is-valid');
    }
});

function store(){ //stores items in the localStorage
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var contactnumber = document.getElementById('contactnumber').value;
    var maritalstatus = document.getElementById('maritalstatus').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    
    const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        contactnumber: contactnumber,
        maritalstatus: maritalstatus,
        password: password,
        confirmpassword: confirmpassword
    }

    window.localStorage.setItem(firstname,JSON.stringify(data));  
    //converting object to string
}

window.onload= function(){
    document.getElementById('myForm').onsubmit= store;
}





