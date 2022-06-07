let nome = document.getElementById("nome");
let email = document.getElementById("email");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let textEmail = document.getElementById("textEmail");

form.addEventListener("submit", (e) => {
  if (nome.value == "" || email.value == "" || senha.value == "") {
    textForm.textContent = "Preencha todos os Campos!";
  } else {
    textForm.textContent = "Mensagem enviada com Sucesso!";
    console.log(nome.value);
    console.log(email.value);
    console.log(msg.value);
    nome.value = "";
    email.value = "";
    senha.value = "";
  }
  e.preventDefault();
});

email.addEventListener("keyup", () => {
  if (validatorEmail(email.value) !== true) {
    textEmail.textContent = "Email Inválido!";
  } else {
    textEmail.textContent = "";
  }
});

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}
