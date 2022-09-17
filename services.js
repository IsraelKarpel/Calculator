
const CalculateManager = require('./calculateManager')
const ResultBuilderColor = require('./resultBuilders/resultBuilderColor')

const getResult = (firstNum, secondNum, operator) => {
    //operationOrderManager.order(request):
    //1) should implement shutting yard algorithm to transform infix to postfix form
    //2) calculate postfix: push numbers to stack until operator and use the last two umber with it,
    let calculatedResult = new CalculateManager().calculateResult(firstNum, secondNum, operator);
    let result = new ResultBuilderColor()
    result.build(calculatedResult)
    return result.getParameters()
}

module.exports = { getResult }