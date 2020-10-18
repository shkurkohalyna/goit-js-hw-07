// const valInput = document.querySelector('#validation-input');

// valInput.addEventListener('focus', () => {
//     valInput.classList = '';
// });
// valInput.addEventListener('blur', onInputChange);
// function onInputChange() {
//         if (valInput.value.length !== Number(valInput.dataset.length) | valInput.value.lenght >Number(valInput.dataset.lenght)){
//             valInput.classList.remove('validation-input.valid');
//             valInput.classList.add('validation-input.invalid');
//         } else {
//             valInput.classList.add('validation-input.valid');
//         }
// };

const valInput = document.querySelector("#validation-input");
valInput.addEventListener("blur", validation);

function validation() {
    if (valInput.value.length == valInput.dataset.length) {
        valInput.classList.add("valid");
        valInput.classList.remove("invalid");
    }
    if (valInput.value.length != valInput.dataset.length) {
        valInput.classList.remove("valid");
        valInput.classList.add("invalid");        
    }
    if (valInput.value.length == 0) {
        valInput.classList.remove("invalid");
    }  
};