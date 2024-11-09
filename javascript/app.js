let btnSend = document.getElementById("submit");
let inputName = document.getElementById("name");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let textMsg = document.getElementById("text-msg");
let form = document.getElementById("form-contact");


btnSend.disabled = true;
function validadeField() {
    if (inputName.value !== "" && subject.value !== "" && message.value !== "") {
        btnSend.disabled = false;
    }
} validadeField();
function cleanField(field) {
    return field.value = null
}
inputName.onkeydown = validadeField;
subject.onkeydown = validadeField;
message.onkeydown = validadeField;

function cleanResponse() {
    btnSend.disabled = true;
    cleanField(inputName);
    cleanField(subject);
    cleanField(message);
    textMsg.innerText = "";
}


function sendWhats() {
    const number = 85994066861;

    const text = `*Olá, meu nome é:* ${inputName.value} \n*Assunto:* ${subject.value}.
    \n*Mensagem:* ${message.value}`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(text).replace(/%2A/g, '*')}`;

    window.open(url, "_blank");
}

btnSend.onclick = sendWhats;
