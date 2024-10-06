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

document.getElementById("button-register").addEventListener('click', function () {
    //Variáveis
    const passwordInput = document.querySelector("#input-password");
    const confirmPasswordInput = document.querySelector("#input-confirm-password");
    const userInput = document.querySelector("#input-user");
    const emailInput = document.querySelector("#input-email");

    //Variáveis convertidas
    const confirmPassword = confirmPasswordInput.value;
    const user = userInput.value;
    const email = emailInput.value;
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

    if (user == "" || email == "" || password == "" || confirmPassword == "")  {
        container.appendChild(validateEmptyFields);
        passwordInput.value = "";
        confirmPasswordInput.value = "";
        userInput.value = "";
        emailInput.value = "";
    } else if (password !== confirmPassword) {
        container.appendChild(passwordCheck);
        passwordInput.value = "";
        confirmPasswordInput.value = "";
    } else {
        window.location.href = "login.html";
    }
});