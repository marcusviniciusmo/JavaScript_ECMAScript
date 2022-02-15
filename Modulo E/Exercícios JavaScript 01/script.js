function contar() {
  var txtInicio = window.document.querySelector('input#txtInicio');
  var txtFim = window.document.querySelector('input#txtFim');
  var txtPasso = window.document.querySelector('input#txtPasso');
  var res = window.document.querySelector('div#res');

  var fieldNull = validarCamposNulos(txtInicio, txtFim, txtPasso, res);

  if (!fieldNull) {
    validarPasso(txtPasso);

    var inicio = Number(txtInicio.value);
    var fim = Number(txtFim.value);
    var passo = Number(txtPasso.value);

    res.innerHTML = 'Contando:<br/>';

    var emojis = {
      finger: `\u{1F449}`,
      blackFlag: `\u{1F3F4}`
    };

    if (inicio < fim) {
      contagemProgressiva(inicio, fim, passo, res, emojis);
    } else if (inicio > fim) {
      contagemRegressiva(inicio, fim, passo, res, emojis);
    } else {
      contagemUnica(inicio, fim, res, emojis);
    };
  };
};

function validarCamposNulos(inicio, fim, passo, res) {
  if (inicio.value === '' || fim.value === '' || passo.value === '') {
    res.innerHTML = 'Impossível contar!';
    return true;
  };
};

function validarPasso(passo) {
  if (Number(passo.value) <= 0) {
    alert('Passo inválido! Considerando PASSO 1');
    passo.value = 1;
  };
};

function contagemProgressiva(inicio, fim, passo, res, emojis) {
  var count = '';

  for (i = inicio; i <= fim; i += passo) {
    count += `${i} ${emojis.finger} `;
  };

  count += emojis.blackFlag;

  res.innerHTML += `<p>${count} </p>`
};

function contagemRegressiva(inicio, fim, passo, res, emojis) {
  var count = '';

  for (i = inicio; i >= fim; i -= passo) {
    count += `${i} ${emojis.finger} `;
  };

  count += emojis.blackFlag;

  res.innerHTML += `<p>${count}</p>`;
};

function contagemUnica(inicio, fim, res, emojis) {
  var count = '';
  if (inicio - fim === 0) {
    count += `${inicio} ${emojis.finger} ${emojis.blackFlag}`;
  };

  res.innerHTML += `<p>${count}</p>`;
};