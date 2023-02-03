(function () {
    'use strict'
    let forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            console.log(form)
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    console.log('invalid')
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()

const button = document.getElementById('button');

document.getElementById('name').onkeydown = function (e){
    if (e.key === 'Backspace') {
        return true;
    }
    return (/^[А-Яа-яA-Za-z]$/.test(e.key))
}
document.getElementById('surName').onkeydown = function (e){
    if (e.key === 'Backspace') {
        return true;
    }
    return (/^[А-Яа-яA-Za-z]$/.test(e.key))
}
document.getElementById('phone_number').onkeydown = function (e){
    return !(/^[А-Яа-яA-Za-z]$/.test(e.key))
}