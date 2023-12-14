const numeroCorreto = Math.floor(Math.random() * 1001);
const maxTentativas = 10;
let tentativas = 0;

while (tentativas < maxTentativas) {
  const palpite = parseInt(prompt("Digite seu palpite entre 0 e 1000"));

  if (isNaN(palpite) || palpite < 0 || palpite > 1000) {
    alert("Por favor, insira um número válido entre 0 e 1000.");
    continue;
  }
  tentativas++;

  if (palpite === numeroCorreto) {
    alert("Parabéns! Você acertou em " + tentativas + " tentativas.");
    break;
  } else if (palpite < numeroCorreto) {
    alert("Tente novamente. O número é maior.");
  } else {
    alert("Tente novamente. O número é menor.");
  }
  if (tentativas === maxTentativas - 2) {
    alert("Cuidado! Você tem mais duas tentativas.");
  }
}
if (tentativas === maxTentativas) {
  alert("Suas tentativas acabaram. O número correto era " + numeroCorreto);
}
