function buscarCEP() {
    const cep = document.getElementById('cepInput').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById('resultado').innerText = 'CEP não encontrado';
            } else {
                const endereco = `
                    <p>CEP: ${data.cep}</p>
                    <p>Logradouro: ${data.logradouro}</p>
                    <p>Bairro: ${data.bairro}</p>
                    <p>Cidade: ${data.localidade}</p>
                    <p>Estado: ${data.uf}</p>
                `;
                document.getElementById('resultado').innerHTML = endereco;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            document.getElementById('resultado').innerText = 'Erro ao buscar CEP';
        });
}