
document.addEventListener('DOMContentLoaded', function() {
  // Seu código JavaScript aqui
  document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
      var minhaDiv = document.querySelector('#minhadiv');
      var carrinho = document.querySelector('#car1');
      var posicaoAtual = parseInt(carrinho.style.marginLeft || 0, 10);
      carrinho.style.marginLeft = posicaoAtual + 40 + 'px';
      var posicaoLinha=1240
      if(posicaoAtual >= posicaoLinha){
        minhaDiv.innerHTML = 'Carro Laranja ganhou!!';
        minhaDiv.style.color="orange"
      }
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'l') {
      var minhaDiv = document.querySelector('#minhadiv');
      var carrinho = document.querySelector('#car2');
      var posicaoAtual = parseInt(carrinho.style.marginLeft || 0, 10);
      carrinho.style.marginLeft = posicaoAtual + 40 + 'px';
      var posicaoLinha=1240
      if(posicaoAtual >= posicaoLinha){
        minhaDiv.innerHTML = 'Carro Branco ganhou!!';
        minhaDiv.style.color="white"
    }
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



