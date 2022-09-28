const OperationOrderManager = require('../operationOrderManager')

const operationOrderManager = new OperationOrderManager;

test('change "3 + 4 * 2 / 1" to suffix 342*1/+', () => {
    expect(operationOrderManager.changeToPrefixOrder("3 + 4 * 2 / 1")).toEqual('342*1/+');
});

test('change "3 * 8 / 4 - 5" to suffix 342*1/+', () => {
    expect(operationOrderManager.changeToPrefixOrder("3 * 8 / 4 - 5")).toEqual('38*4/5-');
});