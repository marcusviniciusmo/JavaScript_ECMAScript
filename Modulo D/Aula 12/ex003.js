var agora = new Date();
var diaSemana = agora.getDay();
var horaAtual = agora.getHours();
var msg = 'Olá, hoje é';

/*
  0 - Domingo
  1 - Segunda
  2 - Terça
  3 - Quarta
  4 - Quinta
  5 - Sexta
  6 - Sábado
*/

switch(diaSemana) {
  case 0:
    console.log(`${msg} domingo!`);
    break;
  case 1:
    console.log(`${msg} segunda-feira!`);
    break;
  case 2:
    console.log(`${msg} terça-feira!`);
    break;
  case 3:
    console.log(`${msg} quarta-feira!`);
    break;
  case 4:
    console.log(`${msg} quinta-feira!`);
    break;
  case 5:
    console.log(`${msg} sexta-feira!`);
    break;
  case 6:
    console.log(`${msg} sábado!`);
    break;
  default:
    console.log('Dia não encontrado.');
    break;
};

function getHoraAtual() {
  if (horaAtual < 12) {
    console.log('Bom dia !!!');
  } else if (horaAtual <= 18) {
    console.log('Boa tarde !!!');
  } else {
    console.log('Boa noite !!!');
  }
};

getHoraAtual();