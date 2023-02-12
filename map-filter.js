const numbers = [1, 3, 5, 7, 9, 12, 15, 18];

for (let i = 0; i < numbers.length; i++) {
  let elements = numbers[i];
}

function square(elements) {
  return elements * elements;
}

numbers.map(function (elements, index, array) {
  console.log(elements, index, array);
});

const result = numbers.map((x) => x * x);
console.log(result);

const even = numbers.filter((x) => x % 2 == 0);
console.log(even);
