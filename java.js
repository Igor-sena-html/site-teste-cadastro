const form = document.getElementById("form")
const usarname = document.getElementById("usarname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

email.addEventListener("blur", () => {
    checkInputemail();
})

usarname.addEventListener("blur", () => {
    checkInputUsarname();
})

password.addEventListener("blur", () => {
    checkInputpassword();
})

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})

function checkInputUsarname(){
    const usarnameValue = usarname.value;


    if(usarnameValue === ""){
        errorInput(usarname, "reencha um usuario")
    }else{
        const formItem = usarname.parentElement;
        formItem.className = "form-content"
    }


}

function checkInputemail(){
    const emailValue = email.value;


    if(emailValue === ""){
        errorInput(email, "O email é obrigatorio")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }


}

function checkInputpassword(){
    const passwordValue = password.value;


    if(passwordValue === ""){
        errorInput(password, "O email é obrigatorio")
    }else if(passwordValue.length < 8){
        errorInput(password, "a senha deve obter no mínimo 8 caracteres")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }


}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;


    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "a confirmação de senha é obrigatoria")
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "a senha deve ser a mesma")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }

}

function checkForm(){
    checkInputUsarname();
    checkInputemail();
    checkInputpassword();
    checkInputPasswordConfirmation();

    const formItem = form.querySelectorAll(".form-content")
    const isValid = [...formItem].every( (item) => {
        return item.className === "form-content"
    });
    if(isValid){
        alert("CADASTRO REALIZADO COM SUCESSO!")
    }else{
        alert("PREENCHA TODOS OS CAMPOS CORRETAMENTE")
    }

}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}