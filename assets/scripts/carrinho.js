// Inicializa um array vazio para armazenar os itens do carrinho
let cart = [];

// Função para adicionar um item ao carrinho
function addToCart(product, price) {
    // Verifica se o item já está no carrinho
    const existingItem = cart.find(item => item.product === product);
    if (existingItem) {
        // Se o item já está no carrinho, aumenta a quantidade
        existingItem.quantity += 1;
    } else {
        // Se o item não está no carrinho, adiciona um novo item com quantidade inicial 1
        cart.push({ product, price, quantity: 1 });
    }
    // Chama a função para atualizar a exibição do carrinho na página
    updateCart();
}

// Função para atualizar a exibição do carrinho na página
function updateCart() {
    // Obtém o elemento UL onde os itens do carrinho serão exibidos
    const cartItems = document.getElementById('cart-items');
    
    // Limpa os itens atuais do carrinho (para evitar duplicação)
    cartItems.innerHTML = '';
    
    // Inicializa uma variável para manter o controle do total do carrinho
    let total = 0;
    
    // Itera sobre os itens no carrinho
    cart.forEach((item, index) => {
        // Cria um elemento LI para cada item no carrinho
        const li = document.createElement('li');
        
        // Cria o contêiner para os controles de quantidade
        const quantityControls = document.createElement('div');
        quantityControls.className = 'quantity-controls';
        
        // Cria o botão de diminuir quantidade
        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.onclick = () => {
            decreaseQuantity(index);
        };
        
        // Cria o elemento para exibir a quantidade
        const quantitySpan = document.createElement('span');
        quantitySpan.textContent = item.quantity;
        
        // Cria o botão de aumentar quantidade
        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.onclick = () => {
            increaseQuantity(index);
        };
        
        // Adiciona os botões e o span ao contêiner de controles de quantidade
        quantityControls.appendChild(decreaseButton);
        quantityControls.appendChild(quantitySpan);
        quantityControls.appendChild(increaseButton);
        
        // Define o texto do LI para mostrar o produto e o preço
        li.textContent = `${item.product} - R$ ${(item.price * item.quantity).toFixed(2)}`;
        
        // Adiciona o contêiner de controles de quantidade ao LI
        li.appendChild(quantityControls);
        
        // Cria um botão de remover para cada item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => {
            removeFromCart(index);
        };
        
        // Adiciona o botão de remover ao LI
        li.appendChild(removeButton);
        
        // Adiciona o LI ao UL
        cartItems.appendChild(li);
        
        // Adiciona o preço do item (multiplicado pela quantidade) ao total
        total += item.price * item.quantity;
    });
    
    // Atualiza o valor total no carrinho
    document.getElementById('total').textContent = total.toFixed(2);
}

// Função para remover um item do carrinho pelo índice
function removeFromCart(index) {
    // Remove o item do array do carrinho
    cart.splice(index, 1);
    
    // Chama a função para atualizar a exibição do carrinho
    updateCart();
}

// Função para aumentar a quantidade de um item no carrinho pelo índice
function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCart();
}

// Função para diminuir a quantidade de um item no carrinho pelo índice
function decreaseQuantity(index) {
    // Diminui a quantidade apenas se for maior que 1
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        // Se a quantidade é 1, remove o item do carrinho
        removeFromCart(index);
    }
    updateCart();
}