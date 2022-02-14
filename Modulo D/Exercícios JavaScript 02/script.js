function verificar() {
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();

  var formYear = window.document.querySelector('input#txtAno').value;
  var res = window.document.querySelector('div#res');

  var formError = verificarErroAno(formYear, anoAtual, res);
  if (!formError) {
    var generoAuxiliar = '';
    var gender = setGenero();

    var age = anoAtual - Number(formYear);

    var img = loadImage(gender, age, res, generoAuxiliar);

    res.appendChild(img);
  }
};

function verificarErroAno(formYear, anoAtual, res) {
  if (formYear.length == 0 || Number(formYear) > anoAtual) {
    res.innerHTML = `<p id='erro'>[ERRO] Verifique os dados e tente novamente!</p>`;
    return true;
  }
};

function setGenero() {
  var formSex = window.document.getElementsByName('radSex');
  var genero = '';

  if (formSex[0].checked) {
    genero = 'Homem';
  } else if (formSex[1].checked) {
    genero = 'Mulher';
  };

  return genero;
};

function loadImage(genero, idade, res, generoAuxiliar) {
  var img = window.document.createElement('img');
  img.setAttribute('id', 'foto');

  if (genero == 'Homem') {
    if (idade >=0 && idade <= 10) {
      img.setAttribute('src', 'fotoBebeM.png');
      window.document.body.style.background = '#3a5159';
      generoAuxiliar = 'um menino';
    } else if (idade <= 21) {
      img.setAttribute('src', 'fotoJovemM.png');
      window.document.body.style.background = '#233829';
      generoAuxiliar = 'um rapaz';
    } else if (idade <= 50) {
      img.setAttribute('src', 'fotoAdultoM.png');
      window.document.body.style.background = '#d6cad4';
      generoAuxiliar = 'um homem';
    } else {
      img.setAttribute('src', 'fotoIdosoM.png');
      window.document.body.style.background = '#a7a7a7';
      generoAuxiliar = 'um senhor';
    }
  } else if (genero == 'Mulher') {
    if (idade >= 0 && idade <= 10) {
      img.setAttribute('src', 'fotoBebeF.png');
      window.document.body.style.background = '#bf948b';
      generoAuxiliar = 'uma menina';
    } else if (idade <= 21) {
      img.setAttribute('src', 'fotoJovemF.png');
      window.document.body.style.background = '#bed1a4';
      generoAuxiliar = 'uma moça';
    } else if (idade <= 50) {
      img.setAttribute('src', 'fotoAdultoF.png');
      window.document.body.style.background = '#889d94';
      generoAuxiliar = 'uma mulher';
    } else {
      img.setAttribute('src', 'fotoIdosoF.png');
      window.document.body.style.background = '#ae9181';
      generoAuxiliar = 'uma senhora';
    }
  }

  res.style.textAlign = 'center';
  res.innerHTML = `Detectamos ${generoAuxiliar} com ${idade} anos de idade.`;

  return img;
};