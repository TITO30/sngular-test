export const primo = (serie) => {
  let primoArray = [];
  if (serie > 0) {
    for (var i = 1; i < serie; i++) {
      if (serie % i == 0) {
        primoArray[i - 1] = i;
      }
    }
  }
  return primoArray[primoArray.length-1];
};

export const fibonacci = (serie) => {
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (let i = 2; i < serie; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci[fibonacci.length-1];
};

export const triangular = (serie) => {
  const value = serie * (serie + 1);
  const result = value / 2;
  return result;
};
