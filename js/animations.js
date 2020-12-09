/* adiciona classe js ao html, caso o js esteja desativado
   o conteudo continua aparecendo */
var root = document.documentElement;
root.className += " js";

/* função responsável por calcular a distância entre cada
   elemento com a classe anime e o topo da página. .offset()
   retorna os valores de left e top dentro do elemento que
   selecionamos em $(idBox). Como queremos o topo usamos ao final o .top */
function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

/* se o documento já esta pronto, iniciamos um função */
$(document).ready(function () {
  // $target define qual elemento animar. Neste caso, todos aqueles que tem a classe .anime
  var $target = $(".anime"),
    // animationClass é a classe com as propriedades da animação que será adicionada durante o scroll
    animationClass = "animate__animated animate__fadeIn animate__slow",
    windowHeight = $(window).height(),
    /* windowHeight define a altura total da janela do browser. Isso serve para garantir que a
       tela não fique em branco. Esse valor é usado junto a comparação entre o elemento e o scroll */
    offset = windowHeight - windowHeight / 4;

  /* Função responsável por fazer o cálculo final e definir se os elementos recebem ou não
     as classes de animação */
  function animeScroll() {
    /* documentTop pega a distância do total do scroll e o topo da página,
      isso em relação ao $(document). */
    var documentTop = $(document).scrollTop();
    /* $target é o elemento que contem a classe "anime", para ser animado. Verifica cada um
       deles, por isso o .each() */
    $target.each(function () {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      }
    });
  }

  // Ativa a função animeScroll() para verificar assim que o documento for carregado
  animeScroll();

  // Sempre que o usuário der scroll, ativa novamente a função animeScroll()
  $(document).scroll(function () {
    setTimeout(function () {
      animeScroll();
    }, 150);
  });
});
