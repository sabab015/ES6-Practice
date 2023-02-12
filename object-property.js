const students = [
  { id: 21, name: "abc" },
  { id: 31, name: "xyz" },
  { id: 41, name: "qwe" },
];

const names = students.map((s) => s.name);
const id = students.map((s) => s.id);
console.log(names);
console.log(id);
