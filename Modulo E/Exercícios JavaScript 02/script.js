function gerar() {
  var txtNumero = window.document.querySelector('input#txtNumero');
  var select = window.document.querySelector('select#selectTabuada');

  var fieldNull = validarCampoNulo(txtNumero);
  
  if (!fieldNull) {
    var numero = Number(txtNumero.value);
    gerarTabuada(numero, select);
  };
};

function validarCampoNulo(txtNumero) {
  if (txtNumero.value === '') {
    alert('Por favor, digite um número!');
    return true;
  };
};

function gerarTabuada(numero, select) {
  select.innerHTML = '';

  for (i = 1; i<= 10; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', `tabuada${i}`);
    option.text = `${numero} x ${i} = ${numero * i}`;
    select.appendChild(option);
  };
};