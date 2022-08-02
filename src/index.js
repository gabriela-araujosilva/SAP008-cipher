import cipher from './cipher.js';



const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.getElementById('btnDecrypt');
const key = document.getElementById('key');
const password = document.getElementById('password');
const result = document.getElementById('result');


btnEncrypt.addEventListener('click', () => {


    let offset = parseInt(key.value);

    if (isNaN(offset))
        alert('Digite seu número de deslocamento!');

    let string = password.value;
    string = string.toUpperCase();
    if (string === '')
        alert('Digte sua senha!');


    result.value = cipher.encode(offset, string);
});


btnDecrypt.addEventListener('click', () => {

    let offset = parseInt(key.value);
    if (isNaN(offset))
        alert('Digite seu número de deslocamento!');


    let string = password.value;
    string = string.toUpperCase();
    if (string === '')
        alert('Digite sua senha!');

    result.value = cipher.decode(offset, string);



});




