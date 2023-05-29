var meuBotao = document.getElementById("meuBotao");
meuBotao.addEventListener("click", function() {
  var larguraPagina = window.innerWidth;
  var alturaPagina = window.innerHeight;

  var novaPosicaoX = Math.random() * (larguraPagina - 100);
  var novaPosicaoY = Math.random() * (alturaPagina - 100);

  meuBotao.style.left = novaPosicaoX + "px";
  meuBotao.style.top = novaPosicaoY + "px";
});
