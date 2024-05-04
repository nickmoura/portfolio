// Função para realizar a conversão de moedas
function convertCurrency() {
    // Obter o valor em dólares
    var amount = document.getElementById("amount").value;
    // Obter a moeda selecionada
    var currency = document.getElementById("currency").value;

    // URL da API de conversão de moedas (substitua YOUR_API_KEY pela sua chave de API)
    var apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";

    // Fazer requisição para a API
    $.getJSON(apiUrl, function (data) {
        // Obter a taxa de conversão para a moeda selecionada
        var exchangeRate = data.rates[currency];
        // Calcular o valor convertido
        var convertedAmount = amount * exchangeRate;
        // Exibir o valor convertido
        document.getElementById("result").innerHTML = convertedAmount.toFixed(2) + " " + currency;
    });
}

// Event listener para o botão de conversão
document.getElementById("convertBtn").addEventListener("click", convertCurrency);