// IDENTIFICADORES

/*
  - Podem começar com letra, $ ou _
  - Não podem começar com números
  - É possível usar letras ou números
  - É possível usar acentos ou símbolos
  - Não podem conter espaços
  - Não podem ser palavras reservadas
*/

var nome = "Marcus";
console.log(`Nome: ${nome}`);
console.log('---------------------------------');

console.log(nome === "nome");
console.log('---------------------------------');

nome = 'Marcus Vinícius';
console.log(`Nome: ${nome}`);
console.log('---------------------------------');

var idade = 18;
var salario = 1550.35;
var sexo = 'M';

console.log(`Idade: ${idade} - (inteiro)`);
console.log(`Salário: ${salario} - (real)`);
console.log(`Sexo: ${sexo} - (string)`);
console.log('---------------------------------');

var n1 = 5;
var n2 = 8;
console.log(`Soma n1 = 5 + n2 = 8 é igual a ${n1 + n2}`);
console.log('---------------------------------');

// DICAS

/*
  - Maiúsculas e minúsculas fazem diferença
  - Tente escolher nomes coerentes para as variáveis
  - Evite se tornar um 'programador alfabeto' ou um 'programador contador'
*/

var a = 10;
var A = 20;
console.log(`a = ${a} e A = ${A}`);

var b = 30;
console.log(`b: ${b}`);
console.log(`Erro: console.log(B);`);
console.log('---------------------------------');

console.log("------ Tipos Primitivos:");
console.log("Number, String, Boolean");
console.log('---------------------------------');

console.log("------ Tipos:");
var number = ["Number", "   Inifinity", "   NaN"];
number.forEach(element => {
  console.log(element);
});
console.log("String");
console.log("Boolean");
console.log("Null");
console.log("Undefinied");
var object = ["Object", "   Array"];
object.forEach(element => {
  console.log(element);
});
console.log("Function");
console.log('---------------------------------');

var n = 200;
console.log(`typeof: n = ${typeof n}`);
n = "Google";
console.log(`typeof: n = ${typeof n}`);
console.log(`typeof: 6 = ${typeof 6}`);
console.log(`typeof: 6.5 = ${typeof 6.5}`);
console.log(`typeof: [] = ${typeof []}`);
console.log(`typeof: {} = ${typeof {}}`);
console.log(`typeof: function(){} = ${typeof function(){}}`);
console.log(`typeof: undefinied = ${typeof undefinied}`);
console.log(`typeof: NaN = ${typeof NaN}`);
console.log(`typeof: Infinity = ${typeof Infinity}`);
console.log(`typeof: null = ${typeof null}`);