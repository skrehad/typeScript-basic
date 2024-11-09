type information<T> = Array<T>;

const data: information<{ name: string; roll: number }> = [
  {
    name: "rehad",
    roll: 20,
  },
  {
    name: "rehad",
    roll: 22,
  },
  {
    name: "rehad",
    roll: 24,
  },
];

console.log(data);
