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
}

module.exports = Coolculator;
