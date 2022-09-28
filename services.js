const { buildersMap } = require("./maps/builders.js");
const { calculateMap } = require("./maps/calculates.js");
const { ordersMap } = require("./maps/orders.js");

const getResult = (request, type) => {
  let calculateManager = calculateMap["calculate"];
  let operationOrderManager = ordersMap["postfix"];
  let orderedResult = operationOrderManager.changeToPrefixOrder(request); //("3 + 4 * 2 / 1") => 342*1/+
  let numberResult = calculateManager.calculateComplexResult(orderedResult);
  let result = buildersMap[type];
  result.build(numberResult);
  return result.getParameters();
};

module.exports = { getResult };
