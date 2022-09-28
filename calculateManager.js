const { operatorsMap } = require("./maps/operations.js");

class CalculateManager {
  calculateResult(firstNum, secondNum, operator) {
    console.log('all', firstNum, secondNum, operator)
    const mathAction = operatorsMap[operator];
    let calculatedResult = mathAction.calculate(firstNum, secondNum);
    return calculatedResult;
  }

  calculateComplexResult(queue) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] <= 9 && queue[i] >= 0) {
      } else {
        let a = this.calculateResult(
          parseInt(queue[i - 2]),
          parseInt(queue[i - 1]),
          queue[i]
        );
        queue = queue.substr(0, i - 2) + a + queue.substr(i + 1);
        i = i - 3;
      }
    }
    return queue
  }
}

module.exports = CalculateManager;
