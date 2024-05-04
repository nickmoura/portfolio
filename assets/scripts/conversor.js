// Função para converter unidades de peso
function convertWeight() {
    // Obtém o valor digitado pelo usuário
    const input = parseFloat(document.getElementById("inputWeight").value);
    // Obtém a unidade de peso de origem selecionada pelo usuário
    const fromUnit = document.getElementById("selectWeightFrom").value;
    // Obtém a unidade de peso de destino selecionada pelo usuário
    const toUnit = document.getElementById("selectWeightTo").value;
    let result; // Variável para armazenar o resultado da conversão

    // Realiza as conversões de unidades de peso com base nas seleções do usuário
    if (fromUnit === "kg" && toUnit === "ton") {
        result = input / 1000; // Converte de quilogramas para toneladas
    } else if (fromUnit === "kg" && toUnit === "lb") {
        result = input * 2.20462; // Converte de quilogramas para libras
    } else if (fromUnit === "ton" && toUnit === "kg") {
        result = input * 1000; // Converte de toneladas para quilogramas
    } else if (fromUnit === "ton" && toUnit === "lb") {
        result = input * 2204.62; // Converte de toneladas para libras
    } else if (fromUnit === "lb" && toUnit === "kg") {
        result = input / 2.20462; // Converte de libras para quilogramas
    } else if (fromUnit === "lb" && toUnit === "ton") {
        result = input / 2204.62; // Converte de libras para toneladas
    } else {
        result = input; // Se as unidades de origem e destino forem iguais, mantém o valor original
    }

    // Exibe o resultado da conversão na página
    document.getElementById("resultWeight").innerText = result.toFixed(2) + " " + toUnit;
}

// Função para converter unidades de volume
function convertVolume() {
    const input = parseFloat(document.getElementById("inputVolume").value);
    const fromUnit = document.getElementById("selectVolumeFrom").value;
    const toUnit = document.getElementById("selectVolumeTo").value;
    let result;

    if (fromUnit === "m3" && toUnit === "ft3") {
        result = input * 35.3147;
    } else if (fromUnit === "ft3" && toUnit === "m3") {
        result = input / 35.3147;
    } else {
        result = input;
    }

    document.getElementById("resultVolume").innerText = result.toFixed(2) + " " + toUnit;
}

// Função para converter unidades de comprimento
function convertLength() {
    const input = parseFloat(document.getElementById("inputLength").value);
    const fromUnit = document.getElementById("selectLengthFrom").value;
    const toUnit = document.getElementById("selectLengthTo").value;
    let result;

    // Realiza as conversões de unidades de comprimento com base nas seleções do usuário
    if (fromUnit === "m" && toUnit === "km") {
        result = input / 1000; // Converte de metros para quilômetros
    } else if (fromUnit === "m" && toUnit === "mi") {
        result = input / 1609.34; // Converte de metros para milhas
    } else if (fromUnit === "m" && toUnit === "ft") {
        result = input * 3.28084; // Converte de metros para pés
    } else if (fromUnit === "m" && toUnit === "in") {
        result = input * 39.3701; // Converte de metros para polegadas
    } else if (fromUnit === "m" && toUnit === "yd") {
        result = input * 1.09361; // Converte de metros para jardas
    } // O mesmo padrão de conversão é seguido para outras combinações de unidades

    // Exibe o resultado da conversão na página
    document.getElementById("resultLength").innerText = result.toFixed(2) + " " + toUnit;
}
