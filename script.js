document.addEventListener('DOMContentLoaded', function() {
  var handlerD = function(event) {
    if (event.key === 'd') {
      var carrinho = document.querySelector('#car1');
      var posicaoAtual = parseInt(carrinho.style.marginLeft || 0, 10);
      carrinho.style.marginLeft = posicaoAtual + 40 + 'px';

      var linha = document.querySelector('#linha');
      var linhaPosicao = linha.getBoundingClientRect().left + window.pageXOffset;
      var carrinhoPosicao = carrinho.getBoundingClientRect().left + window.pageXOffset;

      if (carrinhoPosicao > linhaPosicao) {
        document.querySelector('#minhadiv').innerText = "O carrinho laranja é o vencedor!";
        document.querySelector('#minhadiv').style.color = "orange";
        document.removeEventListener('keydown', handlerD);
        document.removeEventListener('keydown', handlerL);
        document.removeEventListener('keydown', handlerA);
        document.removeEventListener('keydown', handlerJ);
      }
    }
  };

  var handlerL = function(event) {
    if (event.key === 'l') {
      var carrinho = document.querySelector('#car2');
      var posicaoAtual = parseInt(carrinho.style.marginLeft || 0, 10);
      carrinho.style.marginLeft = posicaoAtual + 40 + 'px';

      var linha = document.querySelector('#linha');
      var linhaPosicao = linha.getBoundingClientRect().left + window.pageXOffset;
      var carrinhoPosicao = carrinho.getBoundingClientRect().left + window.pageXOffset;

      if (carrinhoPosicao > linhaPosicao) {
        document.querySelector('#minhadiv').innerText = "O carrinho branco é o vencedor!";
        document.querySelector('#minhadiv').style.color = "white";
        document.removeEventListener('keydown', handlerD);
        document.removeEventListener('keydown', handlerL);
        document.removeEventListener('keydown', handlerA);
        document.removeEventListener('keydown', handlerJ);
      }
    }
  };

  var handlerA = function(event) {
    if (event.key === 'a') {
      var carrinho = document.querySelector('#car1');
      var posicaoAtual = parseInt(carrinho.style.marginLeft || 0, 10);
      carrinho.style.marginLeft = posicaoAtual - 40 + 'px';

      var linha = document.querySelector('#linha');
      var linhaPosicao = linha.getBoundingClientRect().left + window.pageXOffset;
      var carrinhoPosicao = carrinho.getBoundingClientRect().left + window.pageXOffset;

      if (carrinhoPosicao > linhaPosicao) {
        document.querySelector('#minhadiv').innerText = "O carrinho laranja é o vencedor!";
        document.querySelector('#minhadiv').style.color = "orange";
        document.removeEventListener('keydown', handlerD);
        document.removeEventListener('keydown', handlerL);
        document.removeEventListener('keydown', handlerA);
        document.removeEventListener('keydown', handlerJ);
      }
    }
  };

  var handlerJ = function(event){
    if (event.key === 'a') {
      var carrinho = document.querySelector('#car1');
      var posicaoAtual = parseInt(carrinho.style.marginLeft || 0, 10);
      carrinho.style.marginLeft = posicaoAtual - 40 + 'px';

      var linha = document.querySelector('#linha');
      var linhaPosicao = linha.getBoundingClientRect().left + window.pageXOffset;
      var carrinhoPosicao = carrinho.getBoundingClientRect().left + window.pageXOffset;

      if (carrinhoPosicao > linhaPosicao) {
        document.querySelector('#minhadiv').innerText = "O carrinho laranja é o vencedor!";
        document.querySelector('#minhadiv').style.color = "orange";
        document.removeEventListener('keydown', handlerD);
        document.removeEventListener('keydown', handlerL);
        document.removeEventListener('keydown', handlerA);
        document.removeEventListener('keydown', handlerJ);
      }
    }



}


document.addEventListener('keydown', handlerD);
document.addEventListener('keydown', handlerL);
document.addEventListener('keydown', handlerA);
document.addEventListener('keydown', handlerJ);
});







