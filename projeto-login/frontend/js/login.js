document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('show-password').addEventListener('change', function () {
        const passwordInput = document.getElementById('input-password');
        if (this.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('show-password').addEventListener('change', function () {
        const passwordInput = document.getElementById('input-confirm-password');
        if (this.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
});

document.getElementById("button-login").addEventListener('click', function () {
    //Variáveis
    const emailInput = document.querySelector("#input-email");
    const passwordInput = document.querySelector("#input-password");
    const confirmPasswordInput = document.querySelector("#input-confirm-password");
    
    //Variáveis convertidas
    const email = emailInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const password = passwordInput.value;

    //container
    const container = document.querySelector("#check-password");

    //Tag <p> das condições
    const passwordCheck = document.createElement("p");
    const validateEmptyFields = document.createElement("p");

    //Classes dos textos
    passwordCheck.classList.add('checking');
    validateEmptyFields.classList.add('checking');

    //Textos
    passwordCheck.innerText = 'As senhas não coincidem';
    validateEmptyFields.innerText = 'Preencha os campos vazios';

    //Apaga o que está escrito no campo das senhas
    container.innerHTML = "";

    if (email == "" || password == "" || confirmPassword == "")  {
        container.appendChild(validateEmptyFields);
        passwordInput.value = "";
        confirmPasswordInput.value = "";
        emailInput.value = "";
    } else if (password !== confirmPassword){
        container.appendChild(passwordCheck);
        passwordInput.value = "";
        confirmPasswordInput.value = "";
    } else {
        alert("Login Realizado!")
    }
}); 