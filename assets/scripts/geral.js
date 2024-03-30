// Ativação do menu hamburger
document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggler.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });
});

// Alterna entre Modo Claro e Modo Escuro
$("#darkModeSwitch").change(function() {
    if(this.checked) {
        // Ativa o Modo Escuro
        $("body").addClass("dark-mode");
    } else {
        // Desativa o Modo Escuro
        $("body").removeClass("dark-mode");
    }
});