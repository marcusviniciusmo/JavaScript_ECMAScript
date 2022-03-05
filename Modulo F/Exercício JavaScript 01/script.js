let txtNumber = window.document.body.querySelector('input#txtNumber');
let select = window.document.body.querySelector('select#numbersAdded');
let res = window.document.querySelector('div#res');
let numbers = [];

function add() {
  res.innerHTML = '';
  let number = Number(txtNumber.value);
  var invalidNumber = gapValidation(number);

  if (!invalidNumber) {
    addToList(number, select);
  };

  txtNumber.value = '';
  txtNumber.focus();
};

function gapValidation(number) {
  if (number < 1 || number > 100) {
    alert(`Valor inválido! O valor ${number} não pertence ao intervalo entre 1 e 100.`);
    return true;
  };
};

function addToList(number, select) {
  var existNumberInList = existNumber(number);

  if (!existNumberInList) {
    numbers.push(number);

    createSelect(number, select);
  } else {
    alert(`O valor ${number} já está existe na lista e não foi adicionado.`);
  };
};

function createSelect(number, select) {
  let option = document.createElement('option');

  option.text = `Valor ${number} adicionado.`;
  select.appendChild(option);
};

function existNumber(number) {
  if (numbers.indexOf(number) != -1) {
    return true;
  };
};

function finalizar() {
  if (numbers.length > 0) {
    let maior = findMaior();
    let menor = findMenor();
    let soma = calculateSum();
    let media = calculateAverage(soma);

    res.innerHTML = '';
    res.innerHTML += `Ao todo, temos ${numbers.length} 
      ${numbers.length === 1 ? 'número cadastrado' : 'números cadastrados'}.<br/>`;
    res.innerHTML += `O maior valor informado foi ${maior}.<br/>`;
    res.innerHTML += `O menor valor informado foi ${menor}.<br/>`;
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br/>`;
    res.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}.`;

    styleResponse();
  } else {
    alert('A lista está vazia. Adicione pelo menos um valor na lista.');
  };
};

function findMaior() {
  let maior = 0;

  for (let pos in numbers) {
    if (numbers[pos] > maior) {
      maior = numbers[pos];
    };
  };

  return maior;
};

function findMenor() {
  let menor = 100;

  for (let pos in numbers) {
    if (numbers[pos] < menor) {
      menor = numbers[pos];
    };
  };

  return menor;
};

function calculateSum() {
  let sum = 0;

  for (let pos in numbers) {
    sum += numbers[pos];
  };

  return sum;
};

function calculateAverage(sum) {
  return sum / numbers.length;
};

function styleResponse() {
  res.style.fontSize = '11pt';
  res.style.color = '#8B8B8B';
  res.style.width = '60%';
  res.style.padding = '5px 10px';
  res.style.borderRadius = '5px';
  res.style.boxShadow = res.innerHTML !== '' ? '2px 2px 2px rgba(0, 0, 0, 0.5)': 'none';
  res.style.border = res.innerHTML? '1px solid rgba(0, 0, 0, .3)' : 'none';
};