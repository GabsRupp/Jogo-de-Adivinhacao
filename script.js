let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

function chutar() {
  const input = document.getElementById("numero");
  const mensagem = document.getElementById("mensagem");
  const tentativas = document.getElementById("tentativas");

  let palpite = Number(input.value);

  
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "Digite um número válido entre 1 e 100.";
    return;
  }

  
  if (palpite === numeroAleatorio) {
    mensagem.textContent = "Você acertou!";
    fimJogo();
  } else {
    tentativasRestantes--;

    if (tentativasRestantes === 0) {
      mensagem.textContent = `Você perdeu! O número secreto era ${numeroAleatorio}.`;
      fimJogo();
    } else if (palpite < numeroAleatorio) {
      mensagem.textContent = "O número secreto é maior";
    } else {
      mensagem.textContent = "O número secreto é menor";
    }
  }

  tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
  input.value = "";
}

function fimJogo() {
  document.getElementById("numero").disabled = true;
  document.getElementById("chutar").disabled = true;
}