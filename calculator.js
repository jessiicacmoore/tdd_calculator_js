function add(int1, int2) {
  return int1 + int2;
}

function subtract(int1, int2) {
  return int1 - int2;
}

function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

module.exports = {add, subtract, sum}