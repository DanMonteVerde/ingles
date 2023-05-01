
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('keydown', function(event) {

    if (event.key === 'd') {
      var carrinho = document.querySelector('#car1');
      var posicaoAtual = parseInt(carrinho.style.marginLeft || 0, 10);
      carrinho.style.marginLeft = posicaoAtual + 40 + 'px';
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'l') {
      var carrinho = document.querySelector('#car2');
      var posicaoAtual = parseInt(carrinho.style.marginLeft || 0, 10);
      carrinho.style.marginLeft = posicaoAtual + 40 + 'px';
  }

  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
      var carrinho = document.querySelector('#car1');
      var posicaoAtual = parseInt(carrinho.style.marginLeft || 0, 10);
      carrinho.style.marginLeft = posicaoAtual -40 + 'px';
    }
  });
  

  document.addEventListener('keydown', function(event) {
    if (event.key === 'j') {
      var carrinho = document.querySelector('#car2');
      var posicaoAtual = parseInt(carrinho.style.marginLeft || 0, 10);
      carrinho.style.marginLeft = posicaoAtual -40 + 'px';
    }
});

});



