let table = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function sorting(x) {
  if (x.length < 2) {

    return x // przypadek podstawowy REKURENCJA
  }

  let pivot = x[0];
  let smallestElements = []; //trzy tablice 
  let biggerElements = [];

  for (let i = 1; i < x.length; i++) {
    if (x[i] > pivot) {
      biggerElements.push(x[i]);
    }
    else {
      smallestElements.push(x[i]);
    }
  }
  return sorting(smallestElements).concat(pivot, sorting(biggerElements));
  console.log(pivot);
}

console.log(sorting(table));