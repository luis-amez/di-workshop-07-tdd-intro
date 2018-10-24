class Coolculator {
  add(...numbers) {
    return numbers.reduce((acc, num) => {
      return acc + num;
    });
  }

  multiply(a, b) {
    return a * b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  factorial(num) {
    let factorial = 1;
    for(let i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }

  random(max) {
    return Math.floor(Math.random() * (max + 1));
  }
}

module.exports = Coolculator;
