// Declaração de variáveis iniciais
var contador = 0;
var soma = 0;
var resultadoQuantidade = document.getElementById("quantidadeNumeros");
var resultadoSoma = document.getElementById("somaValores");

//Função que vai realizar as operações
function processarNumero() {
    var inputNumero = document.getElementById("numeroDigitado");

    if (inputNumero.value.trim() !== "") {
        contador++;
        soma += Number(inputNumero.value);

        resultadoQuantidade.textContent = "Quantidade de números digitados: " + contador;
        resultadoSoma.textContent = "Soma dos valores digitados: " + soma;

        // Limpar o campo de entrada após processar o número
        inputNumero.value = "";
    } else {
        alert("Por favor, digite um número válido.");
    }
}

//Função que vai resetar as variáveis 
function resetar() {
    contador = 0;
    soma = 0;

    resultadoQuantidade.textContent = "Quantidade de números digitados: 0";
    resultadoSoma.textContent = "Soma dos valores digitados: 0";
}