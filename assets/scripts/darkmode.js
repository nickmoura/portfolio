$(document).ready(function (){

  function removerActiveClassTheme() {
    $('.themes-list li a').removeClass('active');
  }

    $('.themes-list li').on('click', function(){
      let linkElement = $(this).find('a');
      let theme = linkElement.data('theme');
      $('html').attr('data-bs-theme', theme);
      removerActiveClassTheme();
      linkElement.addClass('active');
    })

})

document.addEventListener('DOMContentLoaded', function () {
  // Seletor do menu dropdown
  const dropdownMenu = document.querySelector('.themes-list');

  // Abra o menu dropdown quando o item de menu for clicado
  document.querySelector('.current-theme').addEventListener('click', function () {
      dropdownMenu.classList.toggle('show');
  });

  // Feche o menu dropdown quando clicar fora dele
  document.addEventListener('click', function (event) {
      if (!dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.remove('show');
      }
  });
});