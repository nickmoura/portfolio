    document.addEventListener("DOMContentLoaded", function() {
        // Obtém o caminho da URL atual
        var path = window.location.pathname;

        // Obtém todos os links da navegação
        var links = document.querySelectorAll('.mini-menu a');

        // Itera sobre os links e adiciona a classe "active" ao link correspondente à página atual
        links.forEach(function(link) {
            var linkPath = link.getAttribute('href');
            
            // Verifica se o caminho da página atual contém o caminho do link
            if (path.includes(linkPath)) {
                link.classList.add('active');
            }
        });
    });
