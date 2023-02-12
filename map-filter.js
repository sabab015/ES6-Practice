const numbers = [1, 3, 5, 7, 9];

for (let i = 0; i < numbers.length; i++) {
  let elements = numbers[i];
}

function square(elements) {
  return elements * elements;
}

numbers.map(function (elements, index, array) {
  console.log(elements,index, array);
});
