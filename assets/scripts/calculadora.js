let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Avaliar a expressão e calcular o resultado
        let result = eval(display.value);

        // Verificar se o resultado é um número válido
        if (typeof result === 'number' && !isNaN(result)) {
            display.value = result;
        } else {
            throw new Error('Resultado inválido');
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Modifique a função handleKeyPress para lidar com os novos botões
function handleKeyPress(event) {
    const key = event.key;

    // Permitir apenas dígitos, operadores e teclas de controle
    if (/[0-9+\-*/.=]|Enter|Backspace|Escape|%|√/.test(key)) {
        if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            // Tratar a tecla Backspace para remover o último caractere
            display.value = display.value.slice(0, -1);
        } else if (key === '%') {
            // Calcular a porcentagem e exibir o resultado
            display.value = (eval(display.value) / 100).toString();
        } else if (key === '√') {
            // Adicionar raiz quadrada à expressão
            appendToDisplay('Math.sqrt(');
        } else {
            // Adicionar dígitos, operadores ou ponto decimal ao visor
            appendToDisplay(key);
        }

        // Impedir que o navegador execute ações padrão (por exemplo, navegação para trás)
        event.preventDefault();
    }
}