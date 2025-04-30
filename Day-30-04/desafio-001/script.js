let contador = 0;

const botao = document.getElementById("botaoClique");
const paragrafo = document.getElementById("contador");

botao.addEventListener("click", function () {
  contador++;
  paragrafo.textContent = `Você clicou ${contador} vezes.`;
});
