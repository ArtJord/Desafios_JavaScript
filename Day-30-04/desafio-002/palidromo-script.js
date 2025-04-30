const botao = document.getElementById("verificar");
const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function (){
    const textoOriginal = entrada.value.toLowerCase().replace(/\s/g, ""); // remove espaços
  const invertido = textoOriginal.split("").reverse().join("");

    if(textoOriginal === invertido && textoOriginal.length > 0 ){
        resultado.textContent = "É um paídromo!";
    }else {
        resultado.textContent = "Não é um palídromo.";
    }
});