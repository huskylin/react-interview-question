/** 
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 
3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
Please write down a function to console log unique value from this array.
**/
const items = [
  1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4,
  4, 7, 8, 8, 0, 1, 2, 3, 1,
];

function getUniqueNumber(items) {
  return (uniqueValues = items.filter(
    (value, index) => items.indexOf(value) === index
  ));
}
console.log('method1', getUniqueNumber(items));

function getUniqueNumberbySet(items) {
  return [...new Set(items)];
}

console.log('method2', getUniqueNumberbySet(items));
