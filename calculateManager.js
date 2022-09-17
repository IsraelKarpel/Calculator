const { operatorsMap } = require('./maps/operations.js');

class CalculateManager {

    calculateResult(firstNum, secondNum, operator) {
        const mathAction = operatorsMap[operator];
        let calculatedResult = mathAction.calculate(firstNum, secondNum)
        return calculatedResult
    }
}

module.exports = CalculateManager