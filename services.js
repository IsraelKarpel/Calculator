const { colorsMap } = require('./maps/colors.js');
const Result = require('./result')
const { operatorsMap } = require('./maps/operations.js');

const buildResult = (firstNum, secondNum, operator) => {
    let calculatedResult = calculateResult(firstNum, secondNum, operator);
    let color = colorsMap[(getReminder(calculatedResult))]
    let result = new Result(
        calculatedResult,
        color
    )
    return result
}

const calculateResult = (firstNum, secondNum, operator) => {
    const mathAction = operatorsMap[operator];
    let calculatedResult = mathAction.calculate(firstNum, secondNum)
    return calculatedResult
}

const getReminder = (number) => {
    return number % 2;
}

module.exports = { buildResult }