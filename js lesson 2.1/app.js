const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const addressInput = document.querySelector('#address');
const phoneNumberInput = document.querySelector('#phone_number');
const emailInput = document.querySelector('#email');
const msgName = document.querySelector('.msg.name');
const msgSurname = document.querySelector('.msg.surname');
const msgPhoneNumber = document.querySelector('.msg.phone_number');
const msgEmail = document.querySelector('.msg.email');
const msgAddress = document.querySelector('.msg.address');
const mail = document.getElementById('email')


document.getElementById('name').onkeydown = function (e){
    if (e.key === 'Backspace') {
        return true;
    }
    return (/^[А-Яа-яA-Za-z]$/.test(e.key))
}
document.getElementById('surname').onkeydown = function (e){
    if (e.key === 'Backspace') {
        return true;
    }
    return (/^[А-Яа-яA-Za-z]$/.test(e.key))
}
document.getElementById('phone_number').onkeydown = function (e){
    return !(/^[А-Яа-яA-Za-z]$/.test(e.key))
}


nameInput.addEventListener('change', (e) =>{
    e.preventDefault();
    if (nameInput.value === ''){
        msgName.classList.add('error')
        msgName.innerHTML = 'Please fill out this field';
        msgName.classList.remove('valid');
    }
    else {
        msgName.classList.add('valid')
        msgName.innerHTML = 'valid';
        msgName.classList.remove('error')
    }
});
surnameInput.addEventListener('change', (e) => {
    e.preventDefault();
    if (surnameInput.value === ''){
        msgSurname.classList.add('error')
        msgSurname.innerHTML = 'Please fill out field'
        msgSurname.classList.remove('valid')
    }
    else {
        msgSurname.classList.add('valid')
        msgSurname.innerHTML = "valid"
        msgSurname.classList.remove('error')
    }
})
addressInput.addEventListener('change', (e) => {
    e.preventDefault();
    if (addressInput.value === ''){
        msgAddress.classList.add('error')
        msgAddress.innerHTML = 'Please fill out field'
        msgAddress.classList.remove('valid')
    }
    else {
        msgAddress.classList.add('valid')
        msgAddress.innerHTML = "valid"
        msgAddress.classList.remove('error')
    }
})
phoneNumberInput.addEventListener('change', (e) => {
    e.preventDefault();
    if (phoneNumberInput.value === ''){
        msgPhoneNumber.classList.add('error')
        msgPhoneNumber.innerHTML = 'Please fill out field'
        msgPhoneNumber.classList.remove('valid')
    }
    else {
        msgPhoneNumber.classList.add('valid')
        msgPhoneNumber.innerHTML = "valid"
        msgPhoneNumber.classList.remove('error')
    }
})
emailInput.addEventListener('change', (e) => {
    e.preventDefault();
    if (emailInput.value === ''){
        msgEmail.classList.add('error')
        msgEmail.innerHTML = 'Please fill out field'
        msgEmail.classList.remove('valid')
    }
    else {
        msgEmail.classList.add('valid')
        msgEmail.innerHTML = "valid"
        msgEmail.classList.remove('error')
    }
    if(mail.validity.typeMismatch){
        mail.setCustomValidity("Please, add ...@mail");
        msgEmail.classList.add('error')
        msgEmail.innerHTML = 'Please fill out field'
        msgEmail.classList.remove('valid')
    }
    else {
        mail.setCustomValidity("");
        msgEmail.classList.add('valid')
        msgEmail.innerHTML = "valid"
        msgEmail.classList.remove('error')
    }
})

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'page2.html';
});
