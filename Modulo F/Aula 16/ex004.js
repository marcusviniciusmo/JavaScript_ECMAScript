let numero = 15;

function fatorial(n) {
  let fat = 1;

  for(c = n; c > 1; c--) {
    fat *= c;
  };

  return fat;
};

console.log(fatorial(numero));