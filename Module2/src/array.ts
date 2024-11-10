function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numbers = [10, 20, 30];
const strings = ["apple", "banana", "cherry"];

console.log(getFirstElement(numbers));
console.log(getFirstElement(strings));
