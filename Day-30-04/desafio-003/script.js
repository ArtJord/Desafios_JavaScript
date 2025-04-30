const botao = document.getElementById("mudarCor");
const paragrafo = document.getElementById("corAtual");

function gerarCorAleatoria(){
    const letras ="0123456789ABCDEF";
    let cor = "#";
    for(let i = 0; i < 6; i++){
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

botao.addEventListener("click", () => {
    const novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
    paragrafo.textContent = `Cor atual: ${novaCor}`;
});