function carregar() {
  var msg = window.document.querySelector('div#msg');
  var img = window.document.querySelector('img#imagem');

  var dataAtual = new Date();
  var horaAtual = dataAtual.getHours();

  msg.innerHTML = `Agora são ${horaAtual} horas.`;
  carregarImagem(horaAtual, img);
};

function carregarImagem(hora, imagem) {
  if (hora >= 0 && hora < 12) {
    imagem.src = 'fotoManha.png';
    document.body.style.background = '#f7dcb8';
  } else if (hora <= 18) {
    imagem.src = 'fotoTarde.png';
    document.body.style.background = '#db9566';
  } else {
    imagem.src = 'fotoNoite.png';
    document.body.style.background = '#162f46';
  }
}