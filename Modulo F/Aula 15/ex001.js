let num = [];

console.log('Array inicial:')
console.log(num);

num = [5, 8, 2, 9, 3];

console.log('Array depois de adicionar elementos:');
console.log(num);

// Explicita uma posição para ser criada.
num[5] = 7;

console.log('Array depois de explicitar para adicionar um novo elemento:');
console.log(num);

// Indica para criar uma posição sem explicitar.

num.push(4);

console.log('Array depois de adicionar um elemento sem explicitar:');
console.log(num);

// LENGHT não é um método, é um atributo. Por isso não se usa parênteses.
console.log(`TAMANHO DO ARRAY: num.length = ${num.length}`);

console.log(`ORDENAR UM VETOR: num.sort() = ${num.sort()}`);

console.log('1ª maneira:');
for (i = 0; i < num.length; i++) {
  console.log(`A ${i + 1}ª posição do vetor ordenado contém o valor: ${num[i]}`);
};

console.log('2ª maneira:');
for(var i in num) {
  console.log(`Na posição ${i} tem o valor ${num[i]}`);
};

console.log('Buscar um índice passando o valor como referência: num.indexOf(valor)');
console.log(`No índice ${num.indexOf(7)} tem o valor 7`);
// Valor inexistente no vetor retorna -1  em JavaScript
console.log(num.indexOf(6));