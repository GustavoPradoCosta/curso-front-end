const secretNumber = Math.floor(Math.random() * 10) + 1;
const inputPalpite = document.querySelector("#numberSelector");
const messageIndicator = document.querySelector("#message");
const botaoVerificar = document.querySelector("#try");

const verificarJogo = () => {
    let palpiteUsuario = Number(inputPalpite.value);

    if(palpiteUsuario === secretNumber) {
        messageIndicator.innerText = `Parabéns, você acertou! A resposta era: ${secretNumber}.`;
    }
    else if (palpiteUsuario > secretNumber) {
        messageIndicator.innerText = "Muito alto! Tente um menor."        
    }
    else {
        messageIndicator.innerText = "Muito baixo! Tente um maior"
    }
    inputPalpite.value = "";
}

botaoVerificar.onclick = verificarJogo;
inputPalpite.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        verificarJogo();
    }
});