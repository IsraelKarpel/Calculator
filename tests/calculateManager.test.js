const CalculateManager = require('../calculateManager')

const calculateManager = new CalculateManager;

test('calculate 342*1/+ to be 11', () => {
    expect(calculateManager.calculateComplexResult('342*1/+')).toEqual('11');
});

test('calculate 342/3**- to be 18', () => {
    expect(calculateManager.calculateComplexResult('342/3**')).toEqual('18');
});